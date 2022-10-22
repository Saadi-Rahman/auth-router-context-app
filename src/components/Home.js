import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-base-200">
            <h2>This is Home for {user?.email}</h2>
        </div>
    );
};

export default Home;