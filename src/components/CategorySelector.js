import React, { useState } from 'react';

const CategorySelector = ({ onCategoryChange }) => {
    const [category, setCategory] = useState('health');

    const handleChange = (e) => {
        setCategory(e.target.value);
        onCategoryChange(e.target.value);
    };

    return (
        <select value={category} onChange={handleChange}>
            <option value="health">Health</option>
            <option value="fitness">Fitness</option>
            <option value="nutrition">Nutrition</option>
            <option value="diet">Diet</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="meditation">Meditation</option>
        </select>
    );
};

export default CategorySelector;
