import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Meals = ({ data }) => {
    const { strMeal, strMealThumb, strInstructions, idMeal } = data

    // const meal = useLoaderData()
    // console.log(meal);

    return (
        <div className='mb-5'>
            <Card>
                <Card.Img variant="top" style={{ height: '150px', objectFit: 'cover' }} src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 100)}
                    </Card.Text>
                    <Link to={`/meals/${idMeal}`}><Button variant='outline-danger'>See More</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Meals;