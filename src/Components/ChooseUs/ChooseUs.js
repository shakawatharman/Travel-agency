import React from 'react';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div className="my-5">
           <div className="container">
               <div className="row">
                   <div className="col-md-6 ">
                       <img src="https://image.freepik.com/free-vector/pensive-businessman-making-decision_74855-5283.jpg" alt="" />
                   </div>
                   <div className="col-md-6">
                        <h2 className="text-start mb-5">Choose Your Adventure at one place with Ease</h2>
                        <p className="text-start mb-5">We offer hundreds of tours and activities for travelers around the globe. Choose from sightseeing tours to spa escapes to interactive cultural programs and so much more.</p>

                        <button className="explore-btn">Explore Tours</button>
                   </div>
               </div>
           </div> 
        </div>
    );
};

export default ChooseUs;