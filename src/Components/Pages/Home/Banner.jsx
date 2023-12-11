import img from '../../../assets/Banner/coderrahim.jfif'
import Title from '../../Title';

const Banner = () => {
    return (
        <div className=''>
            <div className='flex justify-between h-[80vh] items-center'>
                <div className='w-1/2'>
                    <Title title={'I\'m Coder Rahim'} />
                    <h2 className='text-pink-500 font-semibold text-3xl'>
                    MERN Stack Web Developer
                    </h2>                    
                </div>
                <div className='w-1/2'>
                    <img className='rounded-full max-h-96 shadow-md  border-white border-2' src={img} alt="CoderRahim" />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Banner;