import { Types } from "./type";

const initialState = {
  count: 1,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.increaseCount: {
      return {
        count: (state.count += action.payload),
      };
    }
    case Types.decreaseCount: {
      return {
        count: (state.count -= action.payload),
      };
    }
    default:
      return state;
  }
};
