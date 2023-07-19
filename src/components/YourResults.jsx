import React, { Component } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./styles/YourResults.css";

export class YourResults extends Component {
  render() {
    return (
      <div className="second-container">
        <div>img</div>
        <div className="your-results-text">
          <h1>What your BMI result means</h1>
          <p>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>
    );
  }
}

export default YourResults;
