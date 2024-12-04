import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import SmallLogo from '../../assets/SmallLogo.png'
import darkLogo from '../../assets/darkLogo.png'
import progressC from '../../assets/progressC.svg'
import progressR from '../../assets/progressR.svg'
import step1bg from '../../assets/BG.png'
import Button from "./Button";
import axios from "axios";
import ModeSwitcher from "../ModeSwitcher";
import { useTheme } from "../ThemeProvider";
import { setUserType } from "../Stor/userSlice";
import { useDispatch } from "react-redux";

function CreateStep1() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userTypes,setUserTypes] = useState([]);
    const { isLight } = useTheme();

    useEffect(() =>{
        axios.get("https://crewhub.synked.cloud/api/user/types")
          .then((response) => {
              const data = response.data;
              setUserTypes(data.data);
          })
          .catch((error) => {
              console.error("Error fetching user types:", error.response?.data || error.message);
          });
  }, []);

      const handleUserType = (userId) => {
        dispatch(setUserType(userId))
        userId == 1 ? navigate('#'):
        navigate("/create-account/step1/step2");
      };

    const handleBack = () => {
        navigate("/");
      };
      

  return (
      <div className='flex flex-col space-y-10 bg-mode-light dark:bg-mode-dark'> 
       <div className="flex flex-col space-y-4">
        {isLight ? <img src={SmallLogo} alt="Logo" className=" ml-20 mt-10 cursor-pointer
        w-12 h-6 xl:w-24 xl:h-12 lg:w-20 lg:h-10 md:w-16 md:h-7 sm:w-12 sm:h-6"/> : 
         <img src={darkLogo} alt="Logo" className="ml-20 mt-10 cursor-pointer
         w-12 h-6 xl:w-24 xl:h-12 lg:w-20 lg:h-10 md:w-16 md:h-7 sm:w-12 sm:h-6 "/>}
        <div className="flex flex-row space-x-0">
        <img src={progressR} alt="Progress" className="w-1/4"/>
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
       <div className="flex flex-col space-y-3 justify-center content-center items-center font-['Open Sans']
        text-text-light dark:text-text-dark xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs ">
        <p>Nice to meet you, Omar!</p>
        <p className="font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-xs text-center">
        In order to start creating your account, <br/> 
        are you a freelancer or considering hiring freelancers for your projects?</p>
       </div>
        {isLight ?
        (
          <div className="relative">
          <img src={step1bg} className=' w-[100%] bg-contain absolute mt-8
         h-[60vh] xl:h-[39vh] lg:h-[50vh] md:h-[60vh] sm:h-[44vh]'/> 
         <div className="absolute flex flex-col space-y-8 
         px-[25vw] xl:px-[35vw] lg:px-[35vw] md:px-[28vw] sm:px-[28vw]
          text-text-light dark:text-text-dark font-['Open Sans'] 
          xl:text-lg lg:text-base md:text-sm sm:text-sm text-xs">
           {userTypes&&userTypes.map((item,index) =>{
            return(
              <Button
              key={index}
              id={item.id}
              text={item.name}
              onClick={() => handleUserType(item.id)}
              className="xl:w-96 xl:h-20 lg:w-96 lg:h-20 md:w-80 md:h-16 sm:w-80 sm:h-16 w-[11rem] h-12 "
            />
            )
           })}
         </div>
        </div>
        ):
        (
          <div className="relative">
         <div className="flex flex-col space-y-8 font-['Open Sans'] 
         text-text-light dark:text-text-dark dark:bg-gray-hover-dark 
          px-[35vw] pt-8 w-[100%] h-[50vh] xl:h-[44vh] lg:h-[60vh] md:h-[65vh] sm:h-[50vh]
">
           {userTypes&&userTypes.map((item,index) =>{
            return(
              <Button
              key={index}
              id={item.id}
              text={item.name}
              onClick={() => handleUserType(item.id)}
              className="xl:w-96 xl:h-20 lg:w-96 lg:h-20 md:w-80 md:h-16 sm:w-60 sm:h-10 w-[10rem] h-12 "
            />
            )
           })}
         </div>
        </div>
        )}
      <ModeSwitcher 
className="top-[80vh]"/>
      </div>

    
  )
}

export default CreateStep1
