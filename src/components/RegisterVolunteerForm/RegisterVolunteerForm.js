import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { MyContext } from '../../App';


const RegisterVolunteerForm = ({voulnteerId}) => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const info = { ...loggedInUser, data, id: voulnteerId };
        fetch(`http://localhost:5000/registeredVolunteer`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(result => {
                alert('successfully added')
            })
        // console.log(data)
    }



    return (
        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
            <input name='fullname' defaultValue={loggedInUser.name} className='form-control'   {...register("fulllname", { required: true })} placeholder='Full Name' />
            {errors.exampleRequired && <span className='error'>Name is required</span>}
            <br />
            <input name='usernameOrEmail' defaultValue={loggedInUser.email} className='form-control'   {...register("usernameOrEmail", { required: true })} placeholder='Username or Email' />
            {errors.exampleRequired && <span className='error'>Email is required</span>}
            <br />
            <input name='date' type='date' className='form-control'  {...register("date", { required: true })} placeholder='Date' />
            {errors.exampleRequired && <span className='error'>Address is required</span>}
            <br />
            <input name='description' className='form-control'  {...register("description", { required: true })} placeholder='Description' />
            {errors.exampleRequired && <span className='error'>Phone number is required</span>}
            <br />
            <input name='organizeBooks ' className='form-control'  {...register("organizeBooks")} placeholder='Organize Books at the library(optional)' />
            {errors.exampleRequired && <span className='error'>Phone number is required</span>}
            <br />
            <input type="submit" className='btn btn-primary container' value={"Registration"} />
        </form>
    );
};

export default RegisterVolunteerForm;