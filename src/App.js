import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddPlant from './views/AddPlant';
import Plant from './views/Plant';
import PlantList from './views/PlantList';
import Start from './views/Start';
import PlantsData from './assets/data.json';

//skapar contexten i app.js som är förälder till hela applikationen
//så att alla komponenter och vyer skall komma åt datan där
export const PlantsContext = createContext();

function App() {
  const [plants, setPlants] = useState([]);
  //kör en setstate när komponenten mountas via useeffect-hooken
  useEffect(() => {
    setPlants(PlantsData);
    console.log(PlantsData);
  }, []);

  return (
    <PlantsContext.Provider value={{ plants, setPlants }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/plantlist" element={<PlantList />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/addplant" element={<AddPlant />} />
        </Routes>
      </BrowserRouter>
    </PlantsContext.Provider>
  );
}

export default App;
