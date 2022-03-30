import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../Components/Button';

export default function Plant() {
  const location = useLocation();
  const plant = location.state.plant;
  const API_KEY = "YisUcdG_-r1zyERJmgSH94sqSPS_o6-LtsdLlgTeZf8";
  const url = `https://api.unsplash.com/photos/?query=${plant.name}&client_id=${API_KEY}`;
  console.log(url);
  const [plantImage, setPlantImage] = useState();
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setPlantImage(data[0].urls.small))
  }, []);

  function handleButtonClick() {
    console.log('button clicked!');
  }

  return (
    <main>
      <img src={plantImage}></img>
      <h1>{plant.name}</h1>
      <Button action={handleButtonClick} title="Update plant"/>
    </main>
  )
}
