import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const onBudgetChange = (e) => {
        const { value } = e.target;

        if (value > 20000) {
            alert(`You cannot exceed the limit ${currency}20000`);
        } else if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input type='number' step='10' value={budget} onChange={onBudgetChange}/></span>
        </div>
    );
};

export default Budget;