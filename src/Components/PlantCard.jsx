import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PlantCard(props) {
    const plant = props.plant;
    const navigate = useNavigate();

    function handleClick() {
        navigate('/plant', {state:{plant}});
    };

    return (
        <article onClick={handleClick}>
            <h3>{plant.name}</h3>
            <p>Sun needs: {plant.sunCravings}/10</p>
        </article>
    )
}
