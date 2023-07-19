import React, { Component } from "react";
import "./styles/Hero.css";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

export class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="blueRectangle">
          <div className="blueIcon">
            <Logo></Logo>
          </div>
          <h1 className="headingText">Body Mass Index Calculator</h1>
          <p className="subHeadingText">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className="whiteRectangle">
          <div className="belowWhiteRectangle">
            <p className="whiteRectangleText">Enter your details below</p>
            <FormControl style={{ padding: "0 32px" }}>
              <RadioGroup
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="metric"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  className="radioButton"
                  value="metric"
                  style={{
                    width: "50%",
                  }}
                  control={<Radio size="large" />}
                  label={
                    <Typography variant="body1" color="rgba(37, 51, 71, 1)">
                      <Box fontWeight="bold">Metric</Box>
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="imperial"
                  control={<Radio size="large" />}
                  label={
                    <Typography variant="body1" color="rgba(37, 51, 71, 1)">
                      <Box fontWeight="bold">Imperial</Box>
                    </Typography>
                  }
                />
              </RadioGroup>
              <div className="input-boxes">
                <div className="height-input-container">
                  <p className="height-input-label">Height</p>
                  <div className="height-input-box">
                    <input></input>
                    <p className="height-input-box-text">cm</p>
                  </div>
                </div>
                <div className="height-input-container">
                  <p className="height-input-label">Weight</p>

                  <div className="height-input-box">
                    <input></input>
                    <p className="height-input-box-text">kg</p>
                  </div>
                </div>
              </div>
            </FormControl>
            <div className="resultRectangle">
              <div className="result-box">
                <div className="result-box-left">
                  <h5>Welcome!</h5>
                  <p>
                    Enter your height and weight and you’ll see your BMI result
                    here
                  </p>
                </div>
                <div className="result-box-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
