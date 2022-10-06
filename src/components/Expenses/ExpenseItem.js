import React ,{useState}from "react";
import "./expenseitem.css"
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  // const [title , setTitle] = useState(props.title);
  // function clickHandler () {
  //   setTitle('Updated')
    
  // }

  return (
   
  <Card className="expense-item">

    <ExpenseDate date={props.date}></ExpenseDate>
   
    <div className="expense-item__description">
      <h2 >{props.title}</h2>
      <div   className="expense-item__price">${props.amount}</div>
      {/* <button onClick={clickHandler}>Change title</button> */}

    </div>
  </Card>)
};

export default ExpenseItem;

