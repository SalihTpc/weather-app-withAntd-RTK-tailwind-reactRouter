import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/features/searchSlice";
import axios from "axios";
import { addCity } from "../store/features/citySlice";
import { FaCity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [myValue, setMyValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = import.meta.env.VITE_API_URL;
  function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  const searchCity = useSelector((state) => {
    return state.search.city;
  });

  const getWeather = async (cityName) => {
    await axios
      .get(`${url}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`)
      .then(function (response) {
        if (!searchCity.includes(response.data.name)) {
          dispatch(addCity(response.data));
          navigate("/results", { replace: true });
        }
      });
  };
  const onFinish = (values) => {
    if (!searchCity.includes(capitalize(values.cityname))) {
      dispatch(setSearch(values.cityname));
    } else {
      alert(
        `${capitalize(
          values.cityname
        )} already checked Please search for another city 😉`
      );
    }
    getWeather(values.cityname);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 10,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="City"
          name="cityname"
          rules={[
            {
              required: true,
              message: "Please input a valid city name!",
            },
          ]}
        >
          <Input
            placeholder="City Name"
            size="large"
            prefix={<FaCity />}
            value={myValue}
            autoFocus
            onChange={(e) => {
              setMyValue(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Tooltip title="Get Weather">
            <Button
              disabled={!myValue}
              htmlType="submit"
              shape="round"
              icon={<SearchOutlined />}
              size="large"
            />
          </Tooltip>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SearchBox;
