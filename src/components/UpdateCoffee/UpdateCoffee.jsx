import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {


    const coffee = useLoaderData();
    console.log(coffee);
    const { _id, coffee_name, chef_name, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const coffee_name = form.coffee_name.value;
        const chef_name = form.chef_name.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const update_coffee = { coffee_name, chef_name, supplier, taste, category, details, photo };
        console.log(update_coffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update_coffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update coffee Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    
                }

            })
    }
    return (
        <div className='coffee-add'>
            <div><Link to="/"><button className='btn-back'> <FaArrowLeft></FaArrowLeft> Back to home</button></Link></div>

            <div className='add-coffee-form'>
                <h2 className='add-coffee-title'>Update Existing Coffee Details</h2>
                <p className='add-coffee-info'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form action="" onSubmit={handleUpdateCoffee}>
                    <div className='input-group'>
                        <div>
                            <label htmlFor="" className='label'>Name</label>
                            <div>
                                <input type="text" name="coffee_name" placeholder='Enter coffee name' className='input-control' defaultValue={coffee_name} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Chef</label>
                            <div>
                                <input type="text" name="chef_name" placeholder='Enter chef name' className='input-control' defaultValue={chef_name} />
                            </div>
                        </div>
                    </div>
                    <div className='input-group'>
                        <div>
                            <label htmlFor="" className='label'>Supplier</label>
                            <div>
                                <input type="text" name='supplier' placeholder='Enter coffee supplier' className='input-control' defaultValue={supplier} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Taste</label>
                            <div>
                                <input type="text" name="taste" placeholder='Enter coffee taste' className='input-control' defaultValue={taste} />
                            </div>
                        </div>
                    </div>
                    <div className='input-group'>
                        <div>
                            <label htmlFor="" className='label'>Category</label>
                            <div>
                                <input type="text" name="category" placeholder='Enter coffee category' className='input-control' defaultValue={category} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Details</label>
                            <div>
                                <input type="text" placeholder='Enter coffee details' name="details" className='input-control' defaultValue={details} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className='label'>Photo</label>
                        <div>
                            <input type="text" placeholder='Enter coffee photo' name="photo" className='input-control' defaultValue={photo} />
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='add-coffee-btn'>Update Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;