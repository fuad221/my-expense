import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";




const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    
    //Money formatter function
    let moneyFormatter = new Intl.NumberFormat("de-De", {
        style: "currency",
        currency: "EUR"
    }).format(transaction.amount);


    const sign = transaction.amount < 0 ? "-" : "+";
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}{" "}
            <span>
                {sign}
                {moneyFormatter}
            </span>
            <button
                onClick={() => deleteTransaction(transaction.id)}
                className="delete-btn"
            >
                x
            </button>
        </li>
    )
}

export default Transaction
