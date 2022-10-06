import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import { useLoaderData } from 'react-router-dom';
import Meals from '../Header/Meals/Meals';

const Home = () => {

    const data = useLoaderData()
    const getData = data.meals;

    return (
        <CardGroup className='mt-5 w-25 mx-auto'>
            {
                getData.map(data => <Meals data={data} key={data.idMeal} />)
            }
        </CardGroup>
    );
};

export default Home;