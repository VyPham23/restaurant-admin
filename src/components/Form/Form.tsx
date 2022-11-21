import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                
            </>
        );
    }

    const addInput = () => {
        
    }
    return (
        <div className="form__container">

            <form onSubmit={handleSubmit} method="POST">
                <h2 id="formtitle">UPDATE DATA</h2>
                <div className='form__section'>
                    <label>Name(*)</label><br/>
                    <input type="text" placeholder="Food name" name="name" required />
                </div>

                <div className='form__section'>
                    <label>Category(*)</label><br/>
                    <input className='form__input' type="text" placeholder="Category" name="category" required />
                </div>

                <div className='form__section'>
                    <label>Ingredients:</label><br/>
                    <input className='form__input' type="text" placeholder="Ingredient" name="ingredient[]"/>
                    
                    <button onClick={addInput}>+</button>
                </div>

                <div className='form__section'>
                    <label>Price in VND(*)</label><br/>
                    <input className='form__input' type="number" min="0" placeholder="Price" name="price" required />
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default Form;