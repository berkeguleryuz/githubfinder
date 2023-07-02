import React, { useReducer } from "react";
import UsersReducers from "../reducers/usersReducers";

export const UsersContext = React.createContext();

const UsersContextProvider = (props) => {
    const initialState = {
        users: [],
        loading: false
      }
      const [state, dispatch] = useReducer(UsersReducers, initialState);

    const searchUsers = (keyword) => {
        setLoading();
    
        setTimeout(() => {
          fetch("https://api.github.com/search/users?q=" + keyword)
          .then(response => response.json())
           .then (data => {
            dispatch({
              type: "SEARCH_USERS",
              users: data.items
            });
           });
        }, 1000);
      } 
    const setLoading = () => {
        dispatch({
          type: "SET_LOADING"
        });
      }
    const clearUsers = () => {
        dispatch({
          type: "CLEAR_USER"
        });
      }

    return (
        <UsersContext.Provider value={{
            users: state.users,
            loading: state.loading,
            searchUsers,
            clearUsers
        }}>
            { props.children }
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;