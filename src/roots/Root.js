import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const root = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default root;