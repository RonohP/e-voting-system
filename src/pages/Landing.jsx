import React from 'react';
import { Fragment } from 'react';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import How from '../components/How/How';
import LiveRes from '../components/LiveRes/LiveRes';
import Stats from '../components/Stats/Stats';

function Landing() {
    return (
        <Fragment>
            <Header/>
            <Features/>
            <How/>
            <LiveRes/>
            <Stats/>
            <Footer/>
        </Fragment>
    );
}

export default Landing;