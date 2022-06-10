import React, { useEffect, useReducer } from "react";
import { mainGoalReduce } from "../reducer/MaingoalReducer";
import "./css/goal.css";

const Goal = () => {
  const initialState = {
    goal: "",
    finalGoal: "",
    toDoCompleted: false,
    edit: false,
  };
  const [state, dispatch] = useReducer(mainGoalReduce, initialState);

  const inputGoalHandler = (e) => {
    const goalFinal = JSON.parse(localStorage.getItem("goal"));
    dispatch({ type: "SET_FINAL_GOAL", payload: { value: goalFinal } });
    dispatch({ type: "EDIT_GOAL", payload: { value: false } });
  };
  const inputHandler = (e) => {
    localStorage.setItem(
      "goal",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("goal")),
        goal: e.target.value,
      })
    );
    dispatch({ type: "SET_GOAL", payload: { value: e.target.value } });
  };
  useEffect(() => {
    const goal = JSON.parse(localStorage.getItem("goal")) ?? {};
    dispatch({ type: "SSET_FINAL_GOAL", payload: { value: goal } });
  }, []);
  return (
    <>
      {state.finalGoal && !state.edit ? (
        <>
          <div className="main-goal-section">
            <h1 className="today-goal">Your Goal For Today is</h1>
            <div className="display-flex">
              <div className="goal-checkbox">
                <input
                  type="checkbox"
                  className="goal-checkbox"
                  checked={
                    JSON.parse(localStorage.getItem("goal")).toDoCompleted
                  }
                  onClick={() => dispatch({ type: "SET_TODO_COMPLETED" })}
                />
                <div className={`mygoal ${state.toDoCompleted && "completed"}`}>
                  {state.finalGoal}
                </div>
              </div>
              <div className="icons">
                <div
                  className="edit-btn"
                  onClick={() =>
                    dispatch({ type: "EDIT_GOAL", payload: { value: true } })
                  }
                >
                  <i className="fa-solid fa-pen"></i>
                </div>
                <div
                  className="delete-btn"
                  onClick={() => dispatch({ type: "CLEAR_GOAL" })}
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="main-goal-cont">
            <div className="main-goal-question">
              What is Your Main Goal For Today?
            </div>
            <input
              type="text"
              className="goal-input"
              placeholder="Type Here..."
              value={
                state.edit
                  ? JSON.parse(localStorage.getItem("goal")).goal
                  : state.goal
              }
              onChange={(e) => inputHandler(e)}
              onKeyPress={(e) => {
                e.key === "Enter" && inputGoalHandler();
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export { Goal };
