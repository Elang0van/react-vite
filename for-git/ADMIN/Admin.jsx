import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Owners from './Owners';
import CreateOwner from './CreateOwner';
import Login from '../LOGIN/logIn';
import Dashboard from './DashBoard';
import Product from '../PRODUCTS/Product';



function Admin() {

    return (
        <>
            <Router>
                <Routes>
                        <Route path='/' element={<Login/>}/>
                        <Route path='/dashboard' element={<Dashboard/>}/>
                        <Route path='/Owners' element={<Owners />} />
                        <Route path='/CreateOwners' element={<CreateOwner />} />
                        <Route path='/Products' element={<Product/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default Admin;
