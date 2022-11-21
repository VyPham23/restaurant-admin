import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

interface FormInputs {
    name: string;
    category: string;
    description: string;
    ingredient: string[];
    price: number;
  }

const Form = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<FormInputs>();
    
      const onSubmit = (data: FormInputs) => {
        console.log(data);
      };

    

    const addInput = () => {
        
    }

    return (
        <div className="form__container">

            <form onSubmit= {handleSubmit(onSubmit)} method="POST">
                <h2 id="formtitle">UPDATE DATA</h2>
                <div className='form__section'>
                    <label>Name(*)</label><br/>
                    <input {...register("name")} className='form__input' type="text" placeholder="Food name" required />
                </div>

                <div className='form__section'>
                    <label>Description(*)</label><br/>
                    <input {...register("description")} className='form__input' type="text" placeholder="Description" required />
                </div>

                <div className='form__section'>
                    <label>Category(*)</label><br/>
                    <input {...register("category")} className='form__input' type="text" placeholder="Category" required />
                </div>

                <div className='form__section'>
                    <label>Ingredients:</label><br/>
                    <input {...register("ingredient")} className='form__input' type="text" placeholder="Ingredient"/>
                    <input {...register("ingredient")} className='form__input' type="text" placeholder="Ingredient"/>
                    <button onClick={addInput}>+</button>
                </div>

                <div className='form__section'>
                    <label>Price in VND(*)</label><br/>
                    <input {...register("price")} className='form__input' type="number" min="0" placeholder="Price" name="price" required />
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default Form;