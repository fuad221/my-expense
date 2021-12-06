import React, { useContext } from 'react';
import { GlobalContext } from '../Reference-import';


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    
    // 
    let  moneyFormatter = new Intl.NumberFormat("de-De", {
        style: "currency",
        currency: "EUR"
    }).format(total)
    
    return (
        <>
            <h4>Your Balance</h4>
            <h1>{moneyFormatter}</h1>
        </>
    )
}