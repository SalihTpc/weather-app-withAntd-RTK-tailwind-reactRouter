import React from "react";
import { Card } from "antd";

const WeatherCard = ({ data }) => {
  return (
    <li className="m-3">
      {data.result && (
        <div className="site-card-border-less-wrapper">
          <Card
            title={data.result.name + "  " + data.result.sys.country}
            hoverable
            style={{
              width: 275,
              backgroundColor: "#87e8de",
            }}
          >
            <figure className="flex justify-center items-center">
              <img
                src={`https://openweathermap.org/img/wn/${data.result.weather[0].icon}@2x.png`}
              />
              <figcaption>{data.result.weather[0].description}</figcaption>
            </figure>
            <p>
              {Math.round(data.result.main.temp)}
              <sup>°C</sup>
            </p>
          </Card>
        </div>
      )}
    </li>
  );
};

export default WeatherCard;
