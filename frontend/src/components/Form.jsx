import React from 'react';

const Form = ({ form, handleChange, handleSubmit, buttonText }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Titre" value={form.title} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
            <input type="text" name="category" placeholder="Catégorie" value={form.category} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Prix" value={form.price} onChange={handleChange} required />
            <button type="submit">{buttonText}</button>
        </form>
    );
};

export default Form;