import React from 'react';
import useOrders from '../../Hooks/useOrders';

const ManageAllOrders = () => {
    
    const [orders] = useOrders()
console.log(orders)
  return (
    <div>
      <div className="container my-5">
        <div className="row">
            <h1 className="text-center">Manage All Bookings</h1>
        <div className="col-md-12 theme-bg p-5">
                    <div className="volenteer-list bg-white rounded p-4">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="theme-bg rounded">
                                    <th scope="col">Destination</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Client Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order=>
                                        <tr>
                      
                                        <td>{order.destination}</td>
                                        <td>{order.date}</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td className="btn btn-warning">PENDING</td>
                                    </tr>
                                        )
                                }
                               
                               
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;