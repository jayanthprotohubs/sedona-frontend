import "./CartItems.css";

import { Button, Grid, Modal, Paper } from "@mui/material";
import React, { useContext, useState } from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ShopContext } from "../../Context/ShopContext";
import cross_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { products } = useContext(ShopContext);
  const { cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format">
                <img className="cartitems-product-icon" src={e.image} alt="" />
                <p cartitems-product-title>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quatity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="cartitems-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            PROCEED TO CHECKOUT
          </button>
          <Grid>
            <Modal open={open}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Paper sx={{ height: "50vh", width: "50vw" }}>
                  <Grid
                    p={5}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{ color: "green", fontSize: "90px" }}
                    />
                  </Grid>
                  <Grid
                    px={5}
                    py={1}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"Your order has been placed successfully"}
                  </Grid>
                  <Grid
                    pt={10}
                    px={5}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#008000",
                      }}
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      {"Done"}
                    </Button>
                  </Grid>
                </Paper>
              </Grid>
            </Modal>
          </Grid>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
