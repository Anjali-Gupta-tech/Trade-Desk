import React from "react";
import {useState,useEffect} from 'react';
import axios from "axios";
const Positions = () => {
  const[allpositions,setAllpositions]= useState([]);
 useEffect(()=>{
    axios.get('http://localhost:8080/positions').then((response)=>{
      setAllpositions(response.data)
    })
  },[])
  return (
    <>
      <h3 className="title">Positions ({allpositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
       {
            allpositions.map((stock, index) => {
             const currValue=stock.price*stock.qty;
              const isProfit=currValue-stock.avg*stock.qty>=0.0
             const  profClass = isProfit ? 'profit':'loss';
            const   dayClass = stock.isLoss ? 'profit' : 'loss';
            
          return(
          <tr key={index}>
            <td>{stock.product}</td>
            <td>{stock.name}</td>
            <td>{stock.qty.toFixed(2)}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td className={profClass}>
              {(currValue-stock.avg*stock.qty).toFixed(2)}
            </td>
            <td class={dayClass}>{stock.day}</td>
          </tr>
          )})
       
         }
 </table>
      </div>
    </>
  );
};

export default Positions;
