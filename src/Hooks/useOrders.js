import { useEffect, useState } from 'react';

const useOrders = () => {

    const [orders,setOrders] = useState([]);
console.log(orders)
    useEffect(()=>{
        fetch('https://ghoulish-beast-08902.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
      },[])
    return [
        orders
    ];
};

export default useOrders;