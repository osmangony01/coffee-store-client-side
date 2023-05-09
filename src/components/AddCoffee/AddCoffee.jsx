
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AddCoffee.css';

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const coffee_name = form.coffee_name.value;
        const chef_name = form.chef_name.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffee_data = { coffee_name, chef_name, supplier, taste, category, details, photo };
        console.log(coffee_data);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee_data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('Add Coffee successfully');
                }
                form.reset();
            })

    }


    return (
        <div className='coffee-add'>
            <div><Link to="/"><button className='btn-back'> <FaArrowLeft></FaArrowLeft> Back to home</button></Link></div>

            <div className='add-coffee-form'>
                <h2 className='add-coffee-title'>Add New Coffee</h2>
                <p className='add-coffee-info'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form action="" onSubmit={handleAddCoffee}>
                    <div className='input-group'>
                        <div>
                            <label htmlFor="" className='label'>Name</label>
                            <div>
                                <input type="text" name="coffee_name" placeholder='Enter coffee name' className='input-control' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Chef</label>
                            <div>
                                <input type="text" name="chef_name" placeholder='Enter chef name' className='input-control' />
                            </div>
                        </div>
                    </div>
                    <div className='input-group'>
                        <div>
                            <label htmlFor="" className='label'>Supplier</label>
                            <div>
                                <input type="text" name='supplier' placeholder='Enter coffee supplier' className='input-control' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Taste</label>
                            <div>
                                <input type="text" name="taste" placeholder='Enter coffee taste' className='input-control' />
                            </div>
                        </div>
                    </div>
                    <div className='input-group'>
                        <div>
                            <label htmlFor="" className='label'>Category</label>
                            <div>
                                <input type="text" name="category" placeholder='Enter coffee category' className='input-control' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Details</label>
                            <div>
                                <input type="text" placeholder='Enter coffee details' name="details" className='input-control' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className='label'>Photo</label>
                        <div>
                            <input type="text" placeholder='Enter coffee photo' name="photo" className='input-control' />
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='add-coffee-btn'>Add Coffee</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddCoffee;