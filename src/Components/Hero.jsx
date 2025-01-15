import React from 'react';
import { HERO_CONTENT } from '../constants';
import ProfilePic from "../assets/Nqobile.jpg";
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <div className='border-b border-neutral-500 pb-4 lg:mb-35'>
      
      <div className='flex flex-wrap items-center'>
        
        <div className='w-full lg:w-1/2 px-4'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
              Nqobile Biyela
            </h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
              Full Stack Software Developer
            </span>
            <p className='my-4 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left'>
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        
        <div className='w-full lg:w-1/2 flex justify-center px-4'>
          <img
            src={ProfilePic}
            alt='Profile'
            className='max-w-xs rounded-lg shadow-lg lg:max-w-md'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
