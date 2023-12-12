import { Link } from 'react-router-dom';
import img from '../../../assets/Banner/coderrahim.jfif'
import Title from '../../Title';

const Banner = () => {
    return (
        <div>
            <div className='flex justify-between h-[80vh] items-center'>
                <div className='w-1/2'>
                    <h2 className='text-5xl mb-5 font-semibold'>I'm Coder Rahim</h2>
                    <h2 className='text-pink-500 font-semibold text-3xl'>
                        MERN Stack Web Developer
                    </h2>
                    <div className='my-8 space-x-4'>
                        <a href="#contact">
                            <button className='btn btn-outline btn-secondary'>
                                Contact Me
                            </button>
                        </a>
                        <a
                            href='/Assignment_No_ 02'
                            download="Assignment_No_ 02"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className='btn btn-secondary'>CV Download</button>
                        </a>
                    </div>
                </div>
                <div></div>
                <div className='w-1/2'>
                    <img className='rounded-full max-h-96 shadow-md  border-white border-2' src={img} alt="CoderRahim" />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Banner;