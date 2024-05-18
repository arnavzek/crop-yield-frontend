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
  /* margin-top: 10px; */
  width: 100%;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function DashboardStat({ prodData }) {
  return (
    <Container>
      <Row1>
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["Rice", "Wheat", "Barley", "Maze"] },
          ]}
          series={[
            {
              data: [
                prodData.rice,
                prodData.wheat,
                prodData.barley,
                prodData.maze,
              ],
              label: "Production Stat",
            },
          ]}
          width={window.innerWidth * 0.3}
          height={400}
        />

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: prodData.rice, label: "Rice" },
                { id: 1, value: prodData.wheat, label: "Wheat" },
                { id: 2, value: prodData.barley, label: "Barley" },
                { id: 3, value: prodData.maze, label: "Maze" },
              ],
              label: "Production Stat",
            },
          ]}
          width={400}
          height={400}
        />
      </Row1>
    </Container>
  );
}
