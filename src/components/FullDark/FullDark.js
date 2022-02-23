import { Container } from "@mui/material";
import React from "react";
import ButtonComponents from "../Button";
import FullDarkWrapper from "./FullDarkWrapper";

function FullDark(props) {
  return (
    <FullDarkWrapper>
      <div className="jobForYou w-screen flex py-12 items-center justify-center">
        <Container>
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-white text-5xl font-bold">
              Get The Right Job For You
            </h1>
            <p className="text-white text-xl mt-6">
              Subscribe to get updated on latest and relevant career
              opportunities
            </p>
            <div className="flex w-7/12 py-2 bg-white mt-6 rounded-lg">
              <input
                type="email"
                name="jobForYou"
                className="form group outline-none form-control p-2 rounded-lg bg-transparent border-transparent flex-1"
                placeholder="Enter your email"
              />
              <ButtonComponents text={"Subscribe"} />
            </div>
          </div>
        </Container>
      </div>
    </FullDarkWrapper>
  );
}

export default FullDark;
