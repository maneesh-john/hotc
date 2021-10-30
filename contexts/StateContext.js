import React, { createContext, useReducer } from "react";

import { SET_STATE, SET_LOADING } from "../constants/actionTypes";

export const StateContext = createContext(null);

const initState = {
  name: "HOTC",
  data: {
    name: "",
    data: [
      {
        name: "photos",
        data: []
      },
      {
        name: "videos",
        data: []
      }
    ]
  },
  isLoading: false
}

const reducer = (state = initState, action) => {
  switch(action.type){
    case SET_STATE:
      return action.payload;
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}

export const StateProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initState);

  return(
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}