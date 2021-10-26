import React from 'react';
import {Link} from 'react-router-dom';

const home = () => {
    return (
        <section className="homeSection">
            {/* <h1>home</h1> */}


            <Link to="/shop">
                <h2>Go Shopping Now</h2>
            </Link>
        </section>
    );
};

export default home;