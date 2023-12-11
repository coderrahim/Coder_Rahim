import { Link } from 'react-router-dom';
import project1 from '../../../assets/projects/project1.png'
import project2 from '../../../assets/projects/project2.png'
import project3 from '../../../assets/projects/project3.png'
import Title from '../../Title';

const Projects = () => {
    return (
        <div className='py-12'>
            <Title title={'Recent Projects'} />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={project1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl mb-5 font-semibold text-center">Percel Delivery Website</h2>
                        <div className="card-actions justify-center">
                            <Link to='https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-coderrahim/'>
                                <button className="btn btn-primary">Github</button>
                            </Link>
                            <Link to='https://percel-delivery-system.web.app/'>
                                <button className="btn btn-primary">Live</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={project2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl mb-5 font-semibold text-center">Tech Zone</h2>
                        <div className="card-actions justify-center">
                            <Link to='https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-coderrahim/'>
                                <button className="btn btn-primary">Github</button>
                            </Link>
                            <Link to='https://tech-zone-with-mongodb.web.app/'>
                                <button className="btn btn-primary">Live</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl mb-5 font-semibold text-center">Resturant Website</h2>
                        <div className="card-actions justify-center">
                            <Link to='https://github.com/Porgramming-Hero-web-course/b8a11-server-side-coderrahim/'>
                                <button className="btn btn-primary">Github</button>
                            </Link>
                            <Link to='https://redchili-restaurent.web.app/'>
                                <button className="btn btn-primary">Live</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;