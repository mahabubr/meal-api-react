import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MealsDeatils = () => {

    const details = useLoaderData()
    const meals = details.meals[0];

    const { strMeal, strInstructions, strMealThumb, strCategory } = meals

    return (
        <Card style={{ width: '20rem', margin: '20px auto' }} className='d-flex'>
            <Card.Img variant="left" src={strMealThumb} />
            <Card.Body>
                <Card.Text>{strCategory}</Card.Text>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    {strInstructions}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default MealsDeatils;