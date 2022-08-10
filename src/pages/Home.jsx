import React from "react";
import SearchBox from "../components/SearchBox";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const weatheredCities = useSelector((state) => {
    return state.cities.cities;
  });
  return (
    <div className="App">
      <h1 className="text-3xl mb-8">Search any city's weather &#128513;</h1>
      <SearchBox />
      {weatheredCities.length >= 1 && (
        <Button onClick={() => navigate("/results", { replace: true })}>
          Result Page
        </Button>
      )}
    </div>
  );
};

export default Home;
