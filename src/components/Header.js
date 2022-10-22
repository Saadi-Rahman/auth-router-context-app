import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    // console.log('context', user);

    const handleSignOut = () => {
        logOut()
            .then(() =>{})
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="navbar bg-white">
                <div className="flex-1">
                    <Link className="ml-10 font-bold text-xl text-primary" to='/'>Awesome Auth</Link>
                </div>
                <div className="flex-none text-primary mr-8">
                    <ul className="menu menu-horizontal gap-x-1.5 p-0 mr-2">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                    </ul>
                    {user?.email && <span>Welcome, {user.email}</span>}
                    {
                        user?.email ?
                        <button onClick={handleSignOut} className='btn btn-sm btn-outline btn-primary ml-4'>Logout</button>
                        : <Link to='/login'>
                            <button className='btn btn-sm btn-outline btn-primary ml-4'>Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;