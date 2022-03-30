import React from 'react'

export default function PlantCard(props) {
    console.log(props.plant);
    const plant = props.plant;
    return (
        <article>
            <h3>{plant.name}</h3>
            <p>Sun needs: {plant.sunCravings}/10</p>
        </article>
    )
}
