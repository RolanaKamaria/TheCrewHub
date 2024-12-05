import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SmallLogo from '../../assets/SmallLogo.png'
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import create from '../../assets/create.png'
import { EyeIcon, EyeOffIcon} from "@heroicons/react/outline";
import axios from "axios";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../Stor/userSlice";
import { useDispatch } from "react-redux";

function CreateAccount() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };
    const registerSchema = Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
      .required("Please enter a valid email address")
      .matches(
        "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
        'Invalid email address'
      ),
      password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });


   const createAccount = async (data) => {
      try {
        const response = await axios.post("https://crewhub.synked.cloud/api/user/register", 
          {
            email:data.email,
            first_name: data.firstName, 
            last_name: data.lastName,
            password: data.password,
          },
         { headers: {
          'Content-Type': 'application/json',
           accept: 'application/json',
        },
    });
        if (response.status === 200) {
          dispatch(registerUser(data));
          navigate("/create-account/step1");
        }
    } catch (error) {
      console.error("Error creating account:", error.response?.data || error.message);
      alert("Failed to create account. Please try again.");
    }
};
    const handleBack = () => {
        navigate("#");
      };
  return (
    <div className=' flex flex-row space-x-5 bg-mode-light dark:bg-mode-dark'>
      <div className='container xl:w-3/5 lg:w-3/5 md:w-0 sm:w-0 w-0 h-screen max-h-full '>
       <img src={SmallLogo} alt="Logo" 
       className='absolute cursor-pointer w-12 h-6 top-6 
        xl:w-24 xl:h-12 lg:w-20 lg:h-10 md:w-16 md:h-7 sm:w-12 sm:h-6
        xl:left-24 lg:left-24 md:left-10 sm:left-10 left-5'
       onClick={handleBack} />
       <img src={create} alt="Illustration" 
       className="xl:w-full xl:h-full xl:object-cover bottom-0 w-0 h-screen object-none
       lg:w-full lg:h-full lg:object-cover
       md:w-0 md:h-0 md:object-none
       sm:w-0 sm:h-0 sm:object-none
        "/>
      </div>
      <div className="flex flex-col space-y-10 font-['Open Sans'] justify-center items-start content-start  
      xl:px-10 lg:px-10 md:px-5 sm:px-5 pt-10">
        <div className="flex flex-col space-y-2">
       <p className="font-bold text-2xl text-text-light dark:text-text-dark">Create your account!</p>
       <p className="text-text-light/50 dark:text-text-dark/50 font-normal text-sm w-96 
       xl:w-80 lg:w-80 md:w-fit sm:w-fit ">
       Follow the instructions to make it easier to register and you will be able to explore inside.</p>
       </div>
       {/* <div className="flex flex-row space-x-10">
        <div className="flex flex-row space-x-2 border border-solid cursor-pointer
         border-border-light/20 dark:border-text-dark/30 py-2 px-4 rounded-lg hover:bg-text-light/5 hover:dark:bg-text-dark/10">
            <img src={google} alt="Google Logo" className="w-6 h-6"/>
            <p className="text-text-light dark:text-text-dark font-normal text-sm">Login with Google</p>
        </div>
        <div className="flex flex-row space-x-2 border border-solid cursor-pointer
         border-border-light/20 dark:border-text-dark/30  py-2 px-4 rounded-lg hover:bg-text-light/5 hover:dark:bg-text-dark/10">
            <img src={facebook} alt="Facebook Logo" className="w-5 h-5"/>
            <p className="text-text-light dark:text-text-dark font-normal text-sm">Login with Facebook</p>
        </div>
       </div>
       <div className="flex flex-row space-x-3">
       <div className="border-b border-solid border-b-border-light/20 dark:border-text-dark/50 xl:w-48 lg:w-48 md:w-60 sm:w-72"></div>
       <div className="text-text-light/50 dark:text-text-dark/50">or</div>
       <div className="border-b border-solid border-b-border-light/20 dark:border-text-dark/50 xl:w-48 md:w-60 sm:w-72"></div>
       </div> */}
       <form onSubmit={handleSubmit(createAccount)} className="w-full space-y-5">
       <div className="flex flex-row space-x-10 text-text-light dark:text-text-dark text-sm">
        <div className="flex flex-col space-y-1">
            <label className="font-semibold">First Name *</label>
            <input
            {...register("firstName")}
             type="text"
             placeholder="First Name" 
            className="bg-input-label-light hover:bg-input-label-hover-light
             hover:dark:bg-input-label-hover-light/20 dark:bg-input-label-dark
               p-2 rounded-lg shadow-sm shadow-border-light/20 
               xl:w-48 lg:w-48 md:w-72 sm:w-72 w-32 h-10 "/>
            {errors.firstName && 
            <div className="flex flex-row justify-start font-['Open_Sans'] text-xs
             text-error-light dark:text-error-light ">
              {errors.firstName.message}</div>}
        </div>
        <div className="flex flex-col space-y-1">
        <label className="font-semibold">Last Name *</label>
        <input
         {...register("lastName")}
         type="text"
         placeholder="Last Name"
        className="bg-input-label-light hover:bg-input-label-hover-light
         hover:dark:bg-input-label-hover-light/20 dark:bg-input-label-dark 
         p-2 rounded-lg shadow-sm shadow-border-light/20 
         xl:w-48 lg:w-48 md:w-72 sm:w-72 w-32 h-10"/>
        {errors.lastName && (
        <div className="flex flex-row justify-start font-['Open_Sans'] text-xs
         text-error-light dark:text-error-light ">
          {errors.lastName.message}</div>)}
        </div>
       </div>
       <div className="flex flex-col space-y-1 text-text-light dark:text-text-dark text-sm">
       <label className="font-semibold">Email *</label>
       <input 
       {...register("email")}
       type="email"
       placeholder="Your Email"
       className="bg-input-label-light hover:bg-input-label-hover-light 
        hover:dark:bg-input-label-hover-light/20 dark:bg-input-label-dark 
        p-2 rounded-lg shadow-sm shadow-border-light/20 
        xl:w-96 lg:w-96 md:w-full sm:w-full w-fit h-10 "/>
        {errors.email && 
            <div className="flex flex-row justify-start font-['Open_Sans'] text-xs
             text-error-light dark:text-error-light ">
          {errors.email.message}</div>}
       </div>
       <div className="flex flex-col space-y-1 text-text-light dark:text-text-dark text-sm">
       <label className="font-semibold">Password *</label>
                 <div className="relative">
                  <div className="flex flex-row bg-input-label-light hover:bg-input-label-hover-light 
                    hover:dark:bg-input-label-hover-light/20 dark:bg-input-label-dark    
                    p-2 rounded-lg shadow-sm shadow-border-light/20
                    xl:w-96 lg:w-96 md:w-full sm:w-full w-fit h-10
                    space-x-[14vw] xl:space-x-[10vw] lg:space-x-[13vw] md:space-x-[44vw] sm:space-x-[14vw]
                    " >
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    {...register("password")}
                    placeholder="Create Your Password"
                    className="bg-input-label-light hover:bg-input-label-hover-light  
                    hover:dark:bg-input-label-hover-light/20 dark:bg-input-label-dark 
                    "
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className=" flex opacity-50 
                    justify-end content-end items-end text-end "
                >
                    {isPasswordVisible ? (
                      <EyeIcon className="w-5 h-5 text-text-light dark:text-gray-hover-light" />
                    ) : (
                      <EyeOffIcon className="w-5 h-5 text-text-light dark:text-gray-hover-light" />
                    )}
                </button>
                </div>
            </div>
            {errors.password && (
            <div className="flex flex-row justify-start font-['Open_Sans'] text-xs
             text-error-light dark:text-error-light">
              {errors.password.message}</div>
              )}
       </div>
       <button 
       type="submit"
       className="bg-gradient-to-r from-button3-light from-10% via-button2-light via-50% to-button1-light to-90%
                  xl:w-96 lg:w-96 md:w-full sm:w-full w-52 h-10 rounded-3xl font-bold
                   hover:bg-none hover:border hover:border-transparent hover:border-button2-light 
                    text-text-dark hover:text-text-light hover:dark:text-text-dark
                    ">
                   <p>Create Account</p></button>
                   </form>
       <div className="flex flex-row space-x-2">
        <p className="text-text-light dark:text-text-dark text-sm">Already have an account?</p>
        <Link to="/login" className="font-bold text-sm
        text-text-light dark:text-text-dark hover:text-button2-light hover:dark:text-button2-light">Login</Link>
        </div>
      </div>
      </div>
  )
}

export default CreateAccount
