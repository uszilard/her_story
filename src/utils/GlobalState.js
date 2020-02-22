import React, { useReducer, createContext, useContext } from "react";
// Don't forget to import all of your actions!
import {
  SET_CURRENT_POST,
  REMOVE_POST,
  UPDATE_POSTS,
  ADD_POST,
  LOADING
} from "./actions";


const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [state.posts, ...action.posts],
        loading: false
      };
    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
        loading: false
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post._id !== action._id;
        })
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.post,
        loading: false
      };
      //case ADD_FAVORITE:
      return {
        ...state,
        favorites: [state.posts, ...action.posts],
        loading: false
      };
      ///case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: [...action.posts],
        loading: false
      };
      //case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.posts.filter((post) => {
          return post._id !== action._id;
        })
      };//
    case LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

const StoreContext = createContext();
const { Provider } = StoreContext;

const StateProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      title: '',
      body: '',
      author: ''
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StateProvider, useStoreContext };
