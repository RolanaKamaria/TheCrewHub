import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import SmallLogo from '../../assets/SmallLogo.png'
import darkLogo from '../../assets/darkLogo.png'
import progressC from '../../assets/progressC.svg'
import progressR from '../../assets/progressR2.svg'
import step1bg from '../../assets/BG.png'
import Button from "./Button";
import axios from "axios";
import { useTheme } from "../ThemeProvider";
import { setIndustry } from "../Stor/userSlice";
import { useDispatch } from "react-redux";

function CreateStep2() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [industries,setIndustries] = useState([]);
    const { isLight } = useTheme();

    useEffect(() =>{
        axios.get("https://crewhub.synked.cloud/api/selects")
          .then((response) => {
              const data = response.data;
              setIndustries(data.data.industries);
          })
          .catch((error) => {
              console.error("Error fetching user types:", error.response?.data || error.message);
          });
  }, []);
  const handleIndustry = (industryId) => {
    dispatch(setIndustry([industryId]));
    navigate("/create-account/step1/step2");
  };

      const handleOtherIndustry = () => {
        navigate("/create-account/step1/step2");
      };
    const handleBack = () => {
        navigate("/create-account/step1");
      };
  return (

    <div>
      <div className='flex flex-col space-y-10 bg-mode-light dark:bg-mode-dark '> 
       <div className="flex flex-col space-y-4">
        {isLight ? <img src={SmallLogo} alt="Logo" className="ml-20 mt-10 cursor-pointer
        w-12 h-6 top-6 xl:w-24 xl:h-12 lg:w-20 lg:h-10 md:w-16 md:h-7 sm:w-12 sm:h-6"/> : 
         <img src={darkLogo} alt="Logo" className="ml-20 mt-10 cursor-pointer
         w-12 h-6 xl:w-24 xl:h-12 lg:w-20 lg:h-10 md:w-16 md:h-7 sm:w-12 sm:h-6"/>}
        <div className="flex flex-row space-x-0">
        <img src={progressR} alt="Progress" className="w-1/2"/>
        <img src={progressC} alt="Progress" className="w-5 h-5"/>
        </div>
        <div className="flex flex-row space-x-3 ml-20 cursor-pointer" onClick={handleBack}>
            <p className="font-bold text-text-light dark:text-text-dark font-['Open Sans'] 
            xl:text-2xl lg:text-xl md:text-lg sm:text-base text-xs
           hover:text-button2-light hover:dark:text-button2-light">&lt;</p>
            <p className="font-bold text-text-light dark:text-text-dark font-['Open Sans'] 
            xl:text-2xl lg:text-xl md:text-lg sm:text-base text-xs
            hover:text-button2-light hover:dark:text-button2-light">Back</p>
        </div> 
       </div>
       <div className="flex flex-col space-y-3 justify-center content-center items-center 
        text-text-light dark:text-text-dark font-['Open Sans'] 
        xl:text-lg lg:text-lg md:text-base sm:text-sm">
        <p className="font-bold text-xs xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-center">
        Which Industry Best Describes <br/> Your Production Needs?</p>
        </div>
        {isLight?
        (
          <div className="relative">
          <img src={step1bg} className='bg-contain absolute w-[100%] mt-8
         h-[80vh] xl:h-[65vh] lg:h-[80vh] md:h-[70vh] sm:h-[60vh]'/> 
          <div className=" absolute flex flex-col space-y-8 px-[10vw]
           xl:px-[20vw] lg:px-[10vw] md:px-[10vw] sm:px-[10vw]
           xl:text-lg lg:text-lg md:text-base sm:text-sm text-xs
          text-text-light dark:text-text-dark  font-['Open Sans']">
        <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2
          gap-x-16 gap-y-7 xl:gap-x-16 xl:gap-y-7 lg:gap-x-16 lg:gap-y-7 md:gap-x-16 md:gap-y-7 sm:gap-x-16 sm:gap-y-4">
        {industries && industries.map((item,index) =>{
            return(
              <Button
              key={index}
              text={item.name}
              onClick={() => handleIndustry(item.id)}
            />
            )
           })}
        </div>
        <button 
        onClick={handleOtherIndustry}
        className="bg-gradient-to-r from-button3-light from-10% via-button2-light via-50% to-button1-light to-90%
                     hover:bg-none hover:border hover:border-transparent hover:border-button2-light 
                      text-text-dark font-bold hover:text-text-light hover:dark:text-text-dark
                      xl:w-44 lg:w-48 md:w-40 sm:w-36 h-12 rounded-lg  w-24 py-2
                     xl:mx-[22vw] lg:mx-[29vw] md:mx-[25vw] sm:mx-[17vw] mx-[15vw]
                      ">Other Industry</button>
          </div>
          </div>
        ):
        (
          <div className="relative">
        <div className="flex flex-col space-y-8 pt-8
         xl:text-lg lg:text-lg md:text-base sm:text-sm text-xs
         xl:px-[20vw] lg:px-[10vw] md:px-[10vw] sm:px-[10vw] px-[20vw]
         w-[100%] h-[100vh] xl:h-[80vh] lg:h-[75vh] md:h-[80vh] sm:h-[100vh]
         text-text-light dark:text-text-dark dark:bg-gray-hover-dark font-['Open Sans']">
        <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2
          gap-x-10 gap-y-7 xl:gap-x-16 xl:gap-y-7 lg:gap-x-16 lg:gap-y-7 md:gap-x-16 md:gap-y-7 sm:gap-x-16 sm:gap-y-4">
        {industries && industries.map((item,index) =>{
            return(
              <Button
              key={index}
              text={item.name}
              onClick={() => handleIndustry(item.id)}
            />
            )
           })}
        </div>
      <button 
      onClick={handleOtherIndustry}
      className="bg-gradient-to-r from-button3-light from-10% via-button2-light via-50% to-button1-light to-90%
                   hover:bg-none hover:border hover:border-transparent hover:border-button2-light 
                    text-text-dark font-bold hover:text-text-light hover:dark:text-text-dark
                     xl:w-44 lg:w-48 md:w-36 sm:w-36 h-10 rounded-lg  w-24 py-2
                     xl:mx-[23vw] lg:mx-[29vw] md:mx-[30vw] sm:mx-[17vw] mx-[15vw]
                    ">Other Industry</button>
     
        </div>
    </div>
        )}
       </div>
      </div>

  )
}

export default CreateStep2
