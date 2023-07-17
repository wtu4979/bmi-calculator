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
          <p className="whiteRectangleText">Enter your details below</p>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="metric"
              name="radio-buttons-group"
            >
              <FormControlLabel
                className="radioButton"
                value="metric"
                control={<Radio size="large" />}
                label={
                  <Typography variant="body1" color="rgba(37, 51, 71, 1)">
                    <Box fontWeight="bold">Metric</Box>
                  </Typography>
                }
              />
              <FormControlLabel
                className="radioButton"
                value="imperial"
                control={<Radio size="large" />}
                label={
                  <Typography variant="body1" color="rgba(37, 51, 71, 1)">
                    <Box fontWeight="bold">Imperial</Box>
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default Hero;
