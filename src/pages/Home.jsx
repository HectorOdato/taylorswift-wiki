import React from 'react';
import Header from '../components/layout/Header';
import Card from '../components/ui/card';

function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <h1 className="text-2xl font-bold bg-red-500">Welcome to the Home Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 max-w-7xl mx-auto">
            </div>
        </div>
    );
}


export default Home;
