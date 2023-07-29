import { createContext } from "react";


export const WorkoutContext = createContext();

export function workoutsReducer(state, action) {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { workouts: action.payload };
    case  'CREATE_WORKOUT':
      return { workouts: [action.payload, ...state]};
    default:
      return state;
  }
}


export default function WorkoutContextProider({ children }) {

  const [state,dispatch] = useReducer(workoutsReducer,{
    workouts:null
  });

  return (
    <WorkoutContext.Provider value={{state,dispatch}}>
        { children }
    </WorkoutContext.Provider>
  )
}