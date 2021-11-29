import { SHOW_PRODUCT } from "../Actions/types";

const initState = {
  product: [],
};

const proReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT:
      console.log("ahmed");
      return {
        ...state,
        product: action.payload,
      };
    default:
      return { ...state };
  }
};
export default proReducer;
