import React from 'react';
import { useForm } from "react-hook-form"

const ProductDetailForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
            <input name='fullname' className='form-control'   {...register("fulllname", { required: true })} placeholder='Full Name' />
            {errors.exampleRequired && <span className='error'>Name is required</span>}
            <br />
            <input name='usernameOrEmail' className='form-control'   {...register("usernameOrEmail", { required: true })} placeholder='Username or Email' />
            {errors.exampleRequired && <span className='error'>Email is required</span>}
            <br />
            <input name='date' className='form-control'  {...register("date", { required: true })} placeholder='Date' />
            {errors.exampleRequired && <span className='error'>Address is required</span>}
            <br />
            <input name='description' className='form-control'  {...register("description", { required: true })} placeholder='Description' />
            {errors.exampleRequired && <span className='error'>Phone number is required</span>}
            <br />
            <input name='organizeBooks ' className='form-control'  {...register("organizeBooks", { required: true })} placeholder='Organize Books at the library' />
            {errors.exampleRequired && <span className='error'>Phone number is required</span>}
            <br />
            <input type="submit" className='btn btn-primary container' />
        </form>
    )
}

export default ProductDetailForm;