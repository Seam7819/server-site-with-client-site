import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='my-10'>
            <Hero></Hero>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;