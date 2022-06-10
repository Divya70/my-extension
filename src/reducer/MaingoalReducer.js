const mainGoalReduce = (state, action) => {
  switch (action.type) {
    case "SET_GOAL":
      return {
        ...state,
        goal: action.payload.value,
      };
    case "SET_FINAL_GOAL":
      return {
        ...state,
        finalGoal: action.payload.value.goal,
        toDoCompleted: action.payload.value.toDoCompleted,
      };
    case "SET_TODO_COMPLETED":
      localStorage.setItem(
        "goal",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("goal")),
          toDoCompleted: !state.toDoCompleted,
        })
      );
      return {
        ...state,
        toDoCompleted: !state.toDoCompleted,
      };
    case "EDIT_GOAL":
      return {
        ...state,
        edit: action.payload.value,
      };
    case "CLEAR_GOAL":
      localStorage.removeItem("goal");
      return {
        ...state,
        goal: "",
        finalGoal: "",
        toDoCompleted: false,
        edit: false,
      };
    default:
      return state;
  }
};
export { mainGoalReduce };
