import axios from "axios";
import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  useRef,
} from "react";
import { useHistory } from "react-router";
import { fetchOrderDetailsFinally } from "../API/Get";
import { patchOrderProductToOrder } from "../API/Patch";
import { UIContext } from "./UIContext";

export const OrderContext = createContext();

export const OrderProvider = (props) => {
  const selectedItems = useRef([]);
  const [cartItem, setCartItem] = useState([]);
  const [order, setOrder] = useState(false);
  const history = useHistory();
  const { setLoading, setSnackbar } = useContext(UIContext);
  const [lastProductAdded, setLastProductAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_URL}orders/view/cart/`,
      headers: {
        Authorization: `Token ${localStorage.getItem("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        setCartItem(response.data.results);
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {};
  }, []);

  useEffect(() => {
    if (order) {
      let data;
      for (let i = 0; i < selectedItems.current.length; i++) {
        data = { order: order.details.o_id };
        console.log(data);
        patchOrderProductToOrder(
          data,
          selectedItems.current[i],
          setLoading,
          setSnackbar,
          i === selectedItems.current.length - 1
            ? setLastProductAdded
            : () => {},
        );
      }
    }
    return () => {};
  }, [order]);

  useEffect(() => {
    if (lastProductAdded) {
      console.log(order);
      fetchOrderDetailsFinally(order.details.o_id, setLoading);
    }
    return () => {};
  }, [lastProductAdded]);

  return (
    <OrderContext.Provider
      value={{
        cartItem,
        setCartItem,
        selectedItems,
        order,
        setOrder,
      }}>
      {props.children}
    </OrderContext.Provider>
  );
};
