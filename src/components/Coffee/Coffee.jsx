
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Coffee = ({ coffee }) => {

    const { _id, photo, coffee_name, chef_name } = coffee;
    // console.log(photo)

    const handleCoffeeDelete =(_id) =>{
        console.log('delete')

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
        })
    }


    return (
        <div className='coffee-item'>
            <div>
                <img src="https://ibb.co/BLdDJWL" alt="" />
            </div>
            <div className='coffee-item-info'>
                <div className='coffee-item-des'>
                    <p><b>Name:</b> {coffee_name}</p>
                    <p><b>Chef:</b> {chef_name}</p>
                    <p><b>Price:</b> 220</p>
                </div>
                <div>
                    <div><Link to={`/coffee/${_id}`}><button className='view-btn'><FaEye color={'white'}></FaEye></button></Link></div>
                    <div><Link to={`/coffee/${_id}`}><button className='update-btn' ><FaPen color={'white'}></FaPen></button></Link></div>
                    <div><Link to=""><button className='delete-btn' onClick={()=>handleCoffeeDelete(_id)}><FaTrash color={'white'}></FaTrash></button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;