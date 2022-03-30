import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Start() {
    let navigate = useNavigate();
    function handleClick(){
        navigate('/plantlist');
    }

    return (
        <main onClick={handleClick} style={{height: "100vh"}}>
            <h1>Start</h1>
        </main>
    )
}
