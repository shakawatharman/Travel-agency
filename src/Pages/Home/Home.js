import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import Destination from '../../Components/Destination/Destination';
import Services from '../../Components/Services/Services';
import AddService from '../AddService/AddService';

const Home = () => {
    return (
        <>
            
            <Banner></Banner>
            <Services></Services>
            <Destination></Destination>
            <ChooseUs></ChooseUs>
            <AddService></AddService>


        </>
    );  
};

export default Home;