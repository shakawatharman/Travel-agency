import React from 'react';
import { useParams } from 'react-router';
import BookingForm from '../../Components/BookingForm/BookingForm';
import ServiceDetail from '../../Components/ServiceDetail/ServiceDetail';
import './Service.css';

const Service = () => {

    const {serviceId}= useParams();
   

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-8">
                        <ServiceDetail
                        serviceId={serviceId}
                        ></ServiceDetail>
                    </div>
                    <div className="col-md-4">
                        <BookingForm
                        serviceId={serviceId}
                        ></BookingForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;