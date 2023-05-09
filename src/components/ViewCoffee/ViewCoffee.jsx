
import { FaArrowLeft, } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './ViewCoffee.css';

const ViewCoffee = () => {

    const coffee = useLoaderData();
    console.log(coffee);
    const { _id, photo, coffee_name, chef_name } = coffee;

    return (
        <div className='coffee-add'>
            <div><Link to="/"><button className='btn-back'> <FaArrowLeft></FaArrowLeft> Back to home</button></Link></div>
            <div className='coffee-item'>
                <div>
                    <img src="photo" alt="" />
                </div>
                <div className='view-coffee-info'>
                    <div className='coffee-item-des'>
                        <p><b>Name:</b>{coffee_name}</p>
                        <p><b>Chef:</b> {chef_name}</p>
                        <p><b>Price:</b> 220</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;