import { Link } from 'react-router-dom';
import './Home.css';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';

const Home = () => {
    return (
        <div >
            <div className='heading'>
                <div className='heading-info'>
                    <h2>Would you like a Cup of Delicious Coffee?</h2>
                    <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <div><button className='btn-learn'>Learn more</button></div>
                </div>
            </div>
            <div className='coffee-list'>
                <div className='coffee-heading'>
                    <h2>Our Popular Product</h2>
                    <div><button className='btn-coffee'>Add Coffee</button></div>
                </div>
                <div className='show-coffee'>
                    <div className='coffee-item'>
                        <div>
                            <img src="/images/1.png" alt="" />
                        </div>
                        <div className='coffee-item-info'>
                            <div className='coffee-item-des'>
                                <p><b>Name:</b> X</p>
                                <p><b>Chef:</b> y</p>
                                <p><b>Price:</b> 220</p>
                            </div>
                            <div>
                                <div><Link to="/"><button className='view-btn'><FaEye color={'white'}></FaEye></button></Link></div>
                                <div><Link><button className='update-btn'><FaPen color={'white'}></FaPen></button></Link></div>
                                <div><Link><button className='delete-btn'><FaTrash color={'white'}></FaTrash></button></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className='coffee-item'>
                        <div>
                            <img src="/images/1.png" alt="" />
                        </div>
                        <div className='coffee-item-info'>
                            <div className='coffee-item-des'>
                                <p><b>Name:</b> X</p>
                                <p><b>Chef:</b> y</p>
                                <p><b>Price:</b> 220</p>
                            </div>
                            <div>
                                <div><Link to="/"><button className='view-btn'><FaEye color={'white'}></FaEye></button></Link></div>
                                <div><Link><button className='update-btn'><FaPen color={'white'}></FaPen></button></Link></div>
                                <div><Link><button className='delete-btn'><FaTrash color={'white'}></FaTrash></button></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;