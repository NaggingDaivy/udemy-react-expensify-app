import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => (
    <div>
        404 - <Link to='/'>Go Home</Link> {/* 404! {<a href="/">Go home</a>}  ---> pas bon car va rafraichir la page*/}

    </div>
);


export default NotFoundPage;