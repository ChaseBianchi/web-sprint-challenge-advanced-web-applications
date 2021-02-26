import React, { useEffect, useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {urlBase} from '../mocks/handlers'
import {axiosWithAuth} from '../helpers/axiosWithAuth'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth().get(`${urlBase}/colors`)
      .then((res) => {
        console.log(res);
        setColorList(res.data)
      }).catch((err) => {
        console.log('fetch colors error: ', err)
      })
  },[])

  return (
    <>
      <ColorList colorList={colorList} setColorList={setColorList} />
      <Bubbles colorList={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
