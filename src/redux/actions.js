import { Types } from "./type";

export const increaseCount = (data) => {
  return {
    type: Types.increaseCount,
    payload: data,
  };
};

export const decreaseCount = (data) => {
  return {
    type: Types.decreaseCount,
    payload: data,
  };
};

export const addTodo = (data) => {
  return {
    type: Types.addTodo,
    payload: data,
  };
};

export const deleteTodo = (data) => {
  return {
    type: Types.deleteTodo,
    payload: data,
  };
};
