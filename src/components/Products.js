import { useEffect } from "react";
import { useDispatch } from "react-redux";
import leadProducts from "../Actions/productAction";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(leadProducts());
  });

  //   const [data, setData] = useState([]);
  //   const [filter, setFilter] = useState(data)
  return <>ahmed</>;
};

export default Products;
