import "./NewsLetter.css";

import { Button, Grid, Modal, Paper } from "@mui/material";
import React, { useState } from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const NewsLetter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
        <input type="email" placeholder="Your email id" />
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Subscribe
        </button>
      </div>
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
                <CheckCircleIcon sx={{ color: "green", fontSize: "90px" }} />
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
                {
                  "You have been subscribed for the newsletter for you email. You will get timely updates, make sure to keep you eyes open !!!"
                }
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
  );
};

export default NewsLetter;
