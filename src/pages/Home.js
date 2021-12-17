import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Navigation from '../components/Navigation';
import SocialNerwork from '../components/SocialNerwork';

const Home = () => {
    return (
        <div>
            <div className="home">
                <Navigation />
                <SocialNerwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>TAKTAK Agency</h1>
                    </div>
                </div>
                <ButtonsBottom right={"/project-1"}/>
            </div>
        </div>
    );
};

export default Home;