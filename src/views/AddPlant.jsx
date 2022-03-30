import React, { useContext, useEffect, useState } from 'react'
import { PlantsContext } from '../App';
import Button from '../Components/Button';

export default function AddPlant() {
    const { plants, setPlants } = useContext(PlantsContext);
    const [newPlant, setNewPlant] = useState({
        id: 0,
        name: "",
        sunCravings: 0
    });

    //fixen för att få in rätt id
    //problemet var att vår komponent inte fick in datan från useContext innan den moutnades
    //så om vi istället lyssnar på när vår komponents state newPlant ändras och då uppsaterar id't efter
    //vår contexts plant length, så har vår contexts hunnit laddats in
    useEffect(() => {
        setNewPlant({...newPlant, id: plants.length})
    }, [newPlant])

    function handleAddClick() {
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
