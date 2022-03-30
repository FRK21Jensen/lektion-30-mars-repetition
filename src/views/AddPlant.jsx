import React, { useContext, useState } from 'react'
import { PlantsContext } from '../App';
import Button from '../Components/Button';

export default function AddPlant() {
    const { plants, setPlants } = useContext(PlantsContext);

    const [newPlant, setNewPlant] = useState({
        id: plants.length,
        name: "",
        sunCravings: 0
    });

    function handleAddClick() {
        const id = plants.length;
        setNewPlant({ ...newPlant, id: id });
        //här hinner vi inte uppdatera newPlant's id innan vi vill uppdatera plant
        setPlants(plants => [...plants, newPlant]);
    }

    return (
        <main>
            <h1>Add plant:</h1>
            <label htmlFor='name'>Plant name</label>
            <input onChange={(e) => { setNewPlant({ ...newPlant, name: e.target.value }) }} id="name" type="text" placeholder='Plant name' />
            <label htmlFor="suncravings">Sun cravings:</label>
            <input onChange={(e) => { setNewPlant({ ...newPlant, sunCravings: parseInt(e.target.value) }) }} id="suncravings" type="number" placeholder='1' />
            <Button action={handleAddClick} title="Add plant" />
        </main>
    )
}
