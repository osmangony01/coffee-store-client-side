import { Link, useLoaderData } from 'react-router-dom';
import './Home.css';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import Coffee from '../Coffee/Coffee';

const Home = () => {

    const coffee_data = useLoaderData();

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
                    <div><Link to="/add-coffee"><button className='btn-coffee'>Add Coffee</button></Link></div>
                </div>
                <div className='show-coffee'>
                    {
                        coffee_data.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;