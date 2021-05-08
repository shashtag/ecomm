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
  // const selectedItems = useRef([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [order, setOrder] = useState(false);
  const history = useHistory();
  const { setLoading, setSnackbar } = useContext(UIContext);
  const [lastProductAdded, setLastProductAdded] = useState(false);
  const [razorPay, setRazorPay] = useState("");

  useEffect(() => {
    if (order) {
      let data;
      for (let i = 0; i < selectedItems.length; i++) {
        data = { order: order.details.o_id };
        // console.log(data);
        patchOrderProductToOrder(
          data,
          selectedItems[i],
          setLoading,
          setSnackbar,
          i === selectedItems.length - 1 ? setLastProductAdded : () => {},
        );
      }
    }
    return () => {};
  }, [order]);

  // useEffect(() => {
  //   if (lastProductAdded) {
  //     console.log(order);
  //     fetchOrderDetailsFinally(order.details.o_id, setLoading);
  //   }
  //   return () => {};
  // }, [lastProductAdded]);

  return (
    <OrderContext.Provider
      value={{
        cartItem,
        setCartItem,
        selectedItems,
        setSelectedItems,
        order,
        setOrder,
        lastProductAdded,
        setLastProductAdded,
        razorPay,
        setRazorPay,
      }}>
      {props.children}
    </OrderContext.Provider>
  );
};
