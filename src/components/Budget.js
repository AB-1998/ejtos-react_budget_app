import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [budgeett,setBudget]=useState("")
    function handel(e){
        
        setBudget(e.target.value)
        if(budgeett>20000){
            alert('maximum budget £20000')
            setBudget(budget)
           
        }else if (budgeett<totalExpenses){
            alert("you can't reduce the budget less then the spending ")
            setBudget(budget)
        }
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input type="number" step="10" onChange={handel} value={budgeett}></input></span>
        </div>
    );
};
export default Budget;
