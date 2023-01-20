import React from "react";
import {deleteGoal} from '../features/goals/goalSlice'
import { useDispatch } from "react-redux";

function GoalItem({ goal }) {
  const dispatch=useDispatch()  
  
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button onClick={()=>dispatch(deleteGoal(goal._id))} className="close">x</button>
    </div>
  );
}

export default GoalItem;
