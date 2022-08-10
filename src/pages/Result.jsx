import { useSelector } from "react-redux";
import React from "react";
import WeatherCard from "../components/WeatherCard";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Result = () => {
  const weatheredCities = useSelector((state) => {
    return state.cities.cities;
  });
  const navigate = useNavigate();

  return (
    <>
      {weatheredCities.length >= 1 ? (
        <div>
          <div className="flex justify-center mb-8">
            <ul className="flex flex-wrap">
              {weatheredCities?.map((item, index) => (
                <WeatherCard key={index} data={item} />
              ))}
            </ul>
          </div>
          <Button
            type="primary"
            onClick={() => navigate("/", { replace: true })}
            danger
            ghost
          >
            Go Home
          </Button>
        </div>
      ) : (
        navigate("/", { replace: true })
      )}
    </>
  );
};

export default Result;
