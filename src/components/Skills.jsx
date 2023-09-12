import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import GITHUB from '../assets/github.png'
import JAVASCRIPT from '../assets/javascript.png'
import MONGO from '../assets/mongo.png'
import NODE from '../assets/node.png'
import REACT from '../assets/react.png'
import BOOTSTRAP from '../assets/bootstrap.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full sm:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Tech Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
    <div className=' shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
        <p className='my-4'>HTML</p>
    </div>
    <div className=' shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
        <p className='my-4'>CSS</p>
    </div>
    <div className=' shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT icon" />
        <p className='my-4'>JAVASCRIPT</p>
    </div>
    <div className=' shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={BOOTSTRAP} alt="BOOTSTRAP icon" />
        <p className='my-4'>BOOTSTRAP</p>
    </div>
    <div className=' shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={REACT} alt="REACT icon" />
        <p className='my-4'>REACT</p>
    </div>
    <div className=' shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={MONGO} alt="MONGO icon" />
        <p className='my-4'>MONGO DB</p>
    </div>
    <div className=' shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={NODE} alt="NODE icon" />
        <p className='my-4'>NODE JS</p>
    </div>
    <div className=' shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={GITHUB} alt="GITHUB icon" />
        <p className='my-4'>GITHUB</p>
    </div>
</div>
        </div>
        
    </div>
    
  )
}

export default Skills