import styled from "styled-components";
import Header from "../Header";
import ReactSelect from "react-select";
import { useState } from "react";
import MaterialInput from "../../MaterialInput";
import makeRequest from "../../controllers/makeRequest";
import BarLoader from "../BarLoader";
import Button from "../Button";
import { BarChart, PieChart } from "@mui/x-charts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function ComparisonStat({ states, data }) {
  if (!data) return null;
  return (
    <Container>
      <Row1>
        <BarChart
          xAxis={[{ scaleType: "band", data: states }]}
          series={[
            {
              data: data.rice,
              label: "Rice Production Comparison",
            },
          ]}
          width={window.innerWidth * 0.3}
          height={400}
        />
        <BarChart
          xAxis={[{ scaleType: "band", data: states }]}
          series={[
            {
              data: data.wheat,
              label: "Wheat Production Comparison",
            },
          ]}
          width={window.innerWidth * 0.3}
          height={400}
        />
      </Row1>{" "}
      <Row1>
        <BarChart
          xAxis={[{ scaleType: "band", data: states }]}
          series={[
            {
              data: data.maze,
              label: "Maze Production Comparison",
            },
          ]}
          width={window.innerWidth * 0.3}
          height={400}
        />
        <BarChart
          xAxis={[{ scaleType: "band", data: states }]}
          series={[
            {
              data: data.barley,
              label: "Barley Production Comparison",
            },
          ]}
          width={window.innerWidth * 0.3}
          height={400}
        />
      </Row1>
    </Container>
  );
}
