import React, {useRef} from 'react';
import useAuth from '../../Hooks/useAuth';
import useService from '../../Hooks/useService';

const BookingForm = ({serviceId}) => {

    const [services] = useService()

    const destinationName = services.filter(service=>service._id==serviceId).map(service=>service.title);

    const {user} = useAuth();

    const nameRef = useRef()
    const emailRef = useRef()
    const dateRef = useRef()
    const destinationRef = useRef()
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const date = dateRef.current.value;
        const email = emailRef.current.value;
        const destination = destinationRef.current.value;

       const order = {
        name,date,email,destination,status:'PENDING'
        }

        console.log(order)

        fetch("https://ghoulish-beast-08902.herokuapp.com/orders",{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('order successfully added')
                e.target.reset();
            } 
        })
        
    }


    return (
        <div className="theme-bg p-1 my-5">
        <form onSubmit={handleSubmit} className="event-form" action="#">
            <div className="row bg-white rounded p-4">
                <div className="mb-3">
                    <label htmlFor="title">Your Name</label>
                    <input ref={nameRef} type="text" id="title" placeholder="Enter Name" value={user?.displayName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Your Email</label>
                    <input ref={emailRef} type="email" id="email" placeholder="Enter Email" value={user?.email}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="date">Booking Date</label>
                    <input ref={dateRef} type="date" id="date" placeholder="Enter date" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address">Your Destination</label>
                    <input ref={destinationRef} type="text" id="address" placeholder="Enter Address" value={destinationName} />
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