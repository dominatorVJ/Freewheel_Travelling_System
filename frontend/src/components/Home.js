import React from "react";
import { Crousel } from "./Crousel";
import { Travelnav } from "./Travelnav";
import { Outlet } from "react-router-dom";
import { Reviews } from "./Reviews";
import { CityCrousel } from "./CityCrousel"
export const Home = () => {
  return (
    <div >
      <Crousel />
      <CityCrousel />
      <Reviews />
      <div style={{ marginTop: "100px" }}>
        <Travelnav />
      </div>
      <Outlet />
    </div>
  );
};
