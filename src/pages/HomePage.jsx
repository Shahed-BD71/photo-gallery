import React, { Fragment } from 'react';
import Home from '../components/Home';

const HomePage = ({authGuard}) => {
    return (
        <Fragment>
            <Home/>
        </Fragment>
    );
};

export default HomePage;