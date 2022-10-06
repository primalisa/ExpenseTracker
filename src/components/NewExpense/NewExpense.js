import React from 'react'

import "./newexpense.css"

import ExpenseForm from './ExpenseForm'
const NewExpense =(props) =>
{

  const saveExpenseDataHandler =(enteredexpensedata) =>
  {
       
    const expenseData ={
      ...enteredexpensedata,
      id:Math.random().toString()

    }

    props.onAddExpense(expenseData)


  }

  return(
    <div className='new-expense'>
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )

}


export default NewExpense;
