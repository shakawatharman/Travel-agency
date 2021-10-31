import React from "react";
import useOrders from '../../Hooks/useOrders';
import useAuth from '../../Hooks/useAuth';

const MyService = () => {
    const {user} = useAuth();

    const {email} = user;

    const [orders] = useOrders()
console.log(orders)
  return (
    <div>
      <div className="container my-5">
        <div className="row">
            <h1 className="text-center"> My Bookings</h1>
        <div class="col-md-12 theme-bg p-5">
                    <div class="volenteer-list bg-white rounded p-4">
                        <table class="table table-borderless">
                            <thead>
                                <tr class="theme-bg rounded">
                                    <th scope="col">Destination</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Client Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.filter(order=>order.email==email).map(order=>
                                        <tr>
                      
                                        <td>{order.destination}</td>
                                        <td>{order.date}</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td class="btn btn-warning">{order.status}</td>
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

export default MyService;
