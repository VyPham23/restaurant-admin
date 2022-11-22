import axios from 'axios';
import React from 'react';
 import { useForm } from 'react-hook-form';
 import './Form.css';

 interface FormInputs {
     name: string;
     category: string;
     description: string;
     image: string;
    //  ingredient: string[];
     price: number;
   }

 const Form = () => {

     const {
         register,
         handleSubmit,
         formState: { errors }
       } = useForm<FormInputs>();

       const addFood = async (data: FormInputs) => {
        await axios.post("http://restaurant-laravel-api.herokuapp.com/api/restaurant", {ingredients: ['abc', 'def'], ...data})
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
       }

       const onSubmit = (data: FormInputs) => {
         addFood(data)
       };

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
                     <label>Image(*)</label><br/>
                     <input {...register("image")} className='form__input' type="text" placeholder="Image Url" required />
                 </div>

                 <div className='form__section'>
                     <label>Category(*)</label><br/>
                     <input {...register("category")} className='form__input' type="text" placeholder="Category" required />
                 </div>

                 {/* <div className='form__section'>
                     <label>Ingredients:</label><br/>
                     <input {...register("ingredient")} className='form__input' type="text" placeholder="Ingredient"/>
                     <button>+</button>
                 </div> */}

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