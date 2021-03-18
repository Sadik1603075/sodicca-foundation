import React from 'react';
import './Home.css';

// Components
import Banner from '../Banner/Banner';
import About from './About';
import Members from './Members';

function Home() {
    return (
        <main className="main-body">
            <Banner/>
            <About/>
            <Members />
        </main>
    )
}

export default Home;
