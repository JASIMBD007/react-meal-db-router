import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setMeals(data.meals))

    }, [searchText]);

    const searchFood = event => {
        setSearchText(event.target.value);
    }
    return (
        <div>
            <h1>Search Your Food Here</h1>
            <input onChange={searchFood} type="text" name="" id="" />
            <br />
            <h3>{meals.length} Items Found</h3>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;