import React, { useContext, useEffect, useState } from 'react'
import { PlantsContext } from '../App';
import Button from '../Components/Button'

export default function AddPlant() {
    const {plants, setPlants} = useContext(PlantsContext);
    const id = plants.length;

    const [newPlant, setNewPlant] = useState({
        id: id,
        name: "",
        sunCravings: 0
    });

    useEffect(() => {
        console.log(plants);
    },[plants]);

    function handleAddClick() {
        setNewPlant({...newPlant, id: id});
        setPlants(plants => [...plants, newPlant])
    }

  return (
    <main>
        <h1>Add plant:</h1>
        <label htmlFor='name'>Plant name</label>
        <input onChange={(e) => {setNewPlant({...newPlant, name: e.target.value})}} id="name" type="text" placeholder='Plant name'/>
        <label htmlFor="suncravings">Sun cravings:</label>
        <input onChange={(e) => {setNewPlant({...newPlant, sunCravings: parseInt(e.target.value)})}} id="suncravings" type="number" placeholder='1'/>
        <Button action={handleAddClick} title="Add plant" />
    </main>
  )
}
