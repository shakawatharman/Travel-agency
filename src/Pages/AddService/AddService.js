import React, { useRef } from 'react';
import "./AddService.css"

const AddService = () => {
    
    const titleRef = useRef()
    const dateRef = useRef()
    const descRef = useRef()
    const imgRef = useRef()
    const priceRef = useRef()
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const title = titleRef.current.value;
        const date = dateRef.current.value;
        const desc = descRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;

       const event = {
            title,date,desc,img,price
        }
        console.log(event)

        fetch("https://ghoulish-beast-08902.herokuapp.com/events",{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(event)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Event successfully added')
                e.target.reset();
            }
        })
        
    }

    return (
        <>
           <div className="container">
           <form onSubmit={handleSubmit} className="event-form" action="#">
                        <div className="row bg-white rounded p-4">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="title">Add Place</label>
                                <input ref={titleRef} type="text" id="title" placeholder="Enter title" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="date">Select Date</label>
                                <input ref={dateRef} type="date" id="date" placeholder="Enter date" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="textarea">Description</label>
                                <textarea ref={descRef} placeholder="Enter description" id="textarea"></textarea>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="date">Price</label>
                                <input ref={priceRef} type="number" id="price" placeholder="Add Price" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="upload">Add Image URL</label>
                               
                                <input ref={imgRef} type="text" id="upload" placeholder="Add Valid Image URL" />
                                    
                            </div>
                        </div>
                        <input type="submit" value="Add" />
                    </form>
           </div>
        </>
    );
};

export default AddService;