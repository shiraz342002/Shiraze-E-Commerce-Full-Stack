import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const token = localStorage.getItem('authToken');
            console.log(token);
            
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/user/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                const responseData = await response.json();
                console.log(responseData);
                
                if (response.ok) {
                    setUser(responseData.data);
                } else {
                    toast.error(`Error: ${responseData.message || 'Something went wrong'}`);
                }
            } catch (error) {
                toast.error('An unexpected error occurred.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) {
        return <p className="text-center text-gray-600">Loading...</p>;
    }

    return (
        <div className="flex flex-col items-center mt-10 p-5 bg-gray-100 rounded-lg shadow-md">
            {user ? (
                <div className="text-center max-w-lg">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                        Hello <span className="text-blue-600">{user.name}</span>!
                    </h1>
                    <p className="text-xl text-gray-700 mb-4">
                        Welcome back! Check out our latest collection.
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        <span className="font-semibold">Email:</span> {user.email}
                    </p>
                    <div className="mt-6 flex justify-center">
                        <a
                            href="/collection"
                            className="py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Browse Collection
                        </a>
                    </div>
                </div>
            ) : (
                <div className="text-center max-w-lg">
                    <p className="text-3xl text-gray-800">
                        You are not signed in.
                    </p>
                    <p className="text-lg text-gray-600 mt-2">
                        Please <a href="/login" className="text-blue-600 hover:underline">log in</a> to access your profile.
                    </p>
                </div>
            )}
        </div>
    );
  
};

export default MyProfile;
