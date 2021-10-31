import { useEffect, useState } from 'react';

const useService = () => {

    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('https://ghoulish-beast-08902.herokuapp.com/events')
        .then(res=>res.json())
        .then(data=>setServices(data))
      },[])
    return [
        services
    ];
};

export default useService;