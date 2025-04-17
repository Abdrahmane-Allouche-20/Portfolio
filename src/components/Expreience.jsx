import React from 'react'
import { experiences } from '../constants'

function Expreience() {
    return (
        <>
            {experiences.map((experience, index) => {
                return (

                    <div className='p-6 rounded-xl hover:scale-105 ease-in-out transform duration-300 ' style={{ backgroundColor: experience.iconBg ,boxShadow:`10px 10px 0px ${experience.border} `}} key={index}>
                        <div className='flex items-start justify-between gap-3'>
                            <div className='block-container w-12 h-12  '>
                                <div className={`btn-back rounded-xl ${experience.title}`} />
                                <div className='btn-front rounded-xl flex justify-center items-center'>
                                    <img
                                        src={experience.icon}
                                        alt='threads'
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                            </div>
                            <div className=' flex flex-col'>
                                <h4 className='text-base sm:text-xl text-end font-bold'>
                                    {experience.title}
                                </h4>
                                <span className='text-xs text-black/60 mt-1 text-end'>{experience.date}</span>


                            </div>
                        </div>

                        <p className='mt-5 text-sm text-justify'>{experience.description}</p>

                    </div>
                );
            })}
        </>
    )
}

export default Expreience