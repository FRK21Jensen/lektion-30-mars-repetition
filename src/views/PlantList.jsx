import React, { useContext } from 'react'
import { PlantsContext } from '../App';
import PlantCard from '../Components/PlantCard';

export default function PlantList() {
    const ctx = useContext(PlantsContext);
    const plants = ctx.plants;
  return (
    <main>
        <h1>Our plants</h1>
        {plants.map((plant, index) => (
            <PlantCard key={index} plant={plant} />
        ))}
    </main>
  )
}
