import html from '../../../assets/Skills/html5.svg'
import css from '../../../assets/Skills/css3-original-wordmark.svg'
import tailwind from '../../../assets/Skills/tailwind.svg'
import javascript from '../../../assets/Skills/javascript.svg'
import react from '../../../assets/Skills/react.svg'
import nodejs from '../../../assets/Skills/nodejs.svg'
import mongodb from '../../../assets/Skills/mongodb.svg'
import mysql from '../../../assets/Skills/mysql.svg'
import firebase from '../../../assets/Skills/firebase.svg'
import figma from '../../../assets/Skills/figma.svg'
import Title from '../../Title'

const Skills = () => {
    return (
        <div className='py-12'>
            <Title title={'SKILLS'} />
            <div>
                <h2 className='bg-pink-300 inline-block px-10 mx-auto text-3xl font-semibold py-4 text-center rounded-full my-5'>Technical Knowledge</h2>
                <div className='flex justify-evenly'>
                    <div>
                        <div className='flex gap-5 justify-center items-center my-5 shadow  rounded-full min-w-full  px-10 md:px-20 py-3'>
                            <img className='w-8 md:w-16 rounded-md' src={html} alt="" />
                            <h3 className='text md:text-2xl font-medium text-pink-500'>HTML</h3>
                        </div>
                        <div className='flex gap-5 justify-center items-center my-5 shadow  rounded-full min-w-full px-10 md:px-20 py-3'>
                            <img className='w-8 md:w-16 rounded-md' src={css} alt="" />
                            <h3 className='text md:text-2xl font-medium text-pink-500'>CSS</h3>
                        </div>
                        <div className='flex gap-5 justify-center items-center my-5 shadow  rounded-full min-w-full px-10 md:px-20 py-3'>
                            <img className='w-8 md:w-16 rounded-md' src={tailwind} alt="" />
                            <h3 className='text md:text-2xl font-medium text-pink-500'>Tailwind</h3>
                        </div>
                        <div className='flex gap-5 justify-center items-center my-5 shadow  rounded-full min-w-full px-10 md:px-20 py-3'>
                            <img className='w-8 md:w-16 rounded-md' src={javascript} alt="" />
                            <h3 className='text md:text-2xl font-medium text-pink-500'>Javascript</h3>
                        </div>
                        <div className='flex gap-5 justify-center items-center my-5 shadow  rounded-full min-w-full px-10 md:px-20 py-3'>
                            <img className='w-8 md:w-16 rounded-md' src={react} alt="" />
                            <h3 className='text md:text-2xl font-medium text-pink-500'>React</h3>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-5 justify-center items-center my-5 shadow  rounded-full min-w-full px-10 md:px-20 py-3'>
                            <img className='w-8 md:w-16 rounded-md' src={nodejs} alt="" />
                            <h3 className='text md:text-2xl font-medium text-pink-500'>NodeJs</h3>
                        </div>
                        <div className='flex gap-5 justify-center items-center my-5 shadow  rounded-full min-w-full px-10 md:px-20 py-3'>
                            <img className='w-8 md:w-16 rounded-md' src={mongodb} alt="" />
                            <h3 className='text md:text-2xl font-medium text-pink-500'>MongoDB</h3>
                        </div>
                        <div className='flex gap-5 justify-center items-center my-5 shadow  rounded-full min-w-full px-10 md:px-20 py-3'>
                            <img className='w-8 md:w-16 rounded-md' src={mysql} alt="" />
                            <h3 className='text md:text-2xl font-medium text-pink-500'>MySQL</h3>
                        </div>
                        <div className='flex gap-5 justify-center items-center my-5 shadow  rounded-full min-w-full px-10 md:px-20 py-3'>
                            <img className='w-8 md:w-16 rounded-md' src={firebase} alt="" />
                            <h3 className='text md:text-2xl font-medium text-pink-500'>Firebase</h3>
                        </div>
                        <div className='flex gap-5 justify-center items-center my-5 shadow  rounded-full min-w-full px-10 md:px-20 py-3'>
                            <img className='w-8 md:w-16 rounded-md' src={figma} alt="" />
                            <h3 className='text md:text-2xl font-medium text-pink-500'>Figma</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Education */}
            <div>
                <h2 className='bg-pink-300 text-3xl font-semibold py-4 inline-block mt-10 px-10 mx-auto text-center rounded-full my-5'>Educational Background</h2>

                <div className='md:flex justify-between '>
                    <div className='space-y-3 border-l-4 px-3 m-5 text-2xl md:text-3xl font-semibold shadow-md p-5 rounded-xl '>
                        <h2 className='text-4xl font-semibold mb-8 '>Secondary School Certificate</h2>
                        <h3 className='text-3xl'>Computer Technology</h3>
                        <h3>2018-2020</h3>
                        <hr />
                        <h3>Result: 4.93 Out of 5</h3>
                        <p>Mushribuza Technical School</p>
                    </div>
                    <div className='space-y-3 border-l-4 px-3 m-5 text-2xl md:text-3xl font-semibold shadow-md p-5 rounded-xl '>
                        <h2 className='text-4xl font-semibold mb-8 '>Diploma In Engineering</h2>
                        <h3 className='text-3xl'>Computer Technology</h3>
                        <h3>2020-2024</h3>
                        <hr />
                        <h3>6th Semester</h3>
                        <p>Chapainawabganj Polytechnic Institute</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Skills;