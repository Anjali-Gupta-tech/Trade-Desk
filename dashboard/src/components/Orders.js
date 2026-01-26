import React from "react";

import { useState,useEffect } from "react";
import axios from 'axios'
const Orders = () => {
  const[allOrders,setAllOrders]=useState([]);
  console.log(allOrders)
  useEffect(()=>{
      axios.get('http://localhost:8080/orders').then((response)=>{
        setAllOrders(response.data)
      })
  },[])
  return (
    <div className="orders">
      <div className="order-table">
       <table>
       <tr>
         <th>Name</th>
          <th>Stock-Quantity</th>
            <th>Stock-Price</th>
             <th>Stock.mood</th>

       </tr>
      
       {allOrders.map((stock)=>{
        return(
          <tr>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.price}</td>
            <td>{stock.mood}</td>
          </tr>
        )
       })}
        </table>
      </div>
    </div>
  );
};

export default Orders;
