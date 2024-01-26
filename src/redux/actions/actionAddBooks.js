import { ADD_BOOKS } from "../constants";

export const addBook = (data) => {
  return {
    type: ADD_BOOKS,
    payload: data /* Object */,
  };
};
