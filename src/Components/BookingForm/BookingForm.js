import React from 'react';
import useAuth from '../../Hooks/useAuth';

const BookingForm = () => {

    const {user} = useAuth()

    return (
        <div className="theme-bg p-1">
        <form className="event-form" action="#">
            <div className="row bg-white rounded p-4">
                <div className="mb-3">
                    <label htmlFor="title">Your Name</label>
                    <input type="text" id="title" placeholder="Enter Name" value={user?.displayName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="Enter Email" value={user?.email}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="date">Booking Date</label>
                    <input type="date" id="date" placeholder="Enter date" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address">Your Address</label>
                    <input type="text" id="address" placeholder="Enter Address" />
                </div>
                <div className="mb-3">
                    
                    <button className="" type="submit" id="upload">
                        Book Now
                    </button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default BookingForm;