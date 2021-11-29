import axios from "axios";
import { PRODUCTS_URL } from "../API";
import { SHOW_PRODUCT } from "./types";

const leadProducts = () => async (dispatch) => {
  const AllProducts = await axios.get(`https://reqres.in/api/products`);

  dispatch({
    type: SHOW_PRODUCT,
    payload: {
      product: AllProducts,
    },
  });
};

export default leadProducts;
