import React from 'react';
import useService from '../../Hooks/useService';

const ServiceDetail = ({serviceId}) => {

    const [services] = useService();


    return (
        <div>
            
           
        {
            services.filter(service=>service._id==serviceId).map(service=>
                 <>
                 <h2>{service.title}</h2>
                 <img className="img-fluid rounded shadow my-5" src={service.img} alt="" />
                 <p>{service.desc}</p>
                 </>
            )
        }

        </div>
    );
};

export default ServiceDetail;