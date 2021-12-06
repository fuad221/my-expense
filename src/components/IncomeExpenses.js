import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";



export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts.filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expense =
        amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1;

    let IncomeMoneyFormatter = new Intl.NumberFormat("de-De", {
        style: "currency",
        currency: "EUR"
    }).format(income);

    let  expenseMoneyFormatter = new Intl.NumberFormat("de-De", {
        style: "currency",
        currency: "EUR"
    }).format(expense);


    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{IncomeMoneyFormatter}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expenseMoneyFormatter}</p>
            </div>
        </div>
    )
}

