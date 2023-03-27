import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function Pokemones() {
    const [pokemones, setPokemones] = useState([]);
    const [pokemon, setPokemon] = useState(null);
    
    const navigate = useNavigate();


    const handleChange = (e) => {
        setPokemon(e.target.value);
    };

    const getPokemones = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?");
        const data = await res.json();
        setPokemones(data.results);
    };
    const seeDetail = () => {
        console.log(pokemon);
        if (pokemon !== null && pokemon !== "Selecciona un Pokémon") {
            navigate(`/pokeapi/detalles/${pokemon}`);
        } 
        else {
            alert("Selecciona un pokemon");
        }
    };

    useEffect(() => {
        getPokemones();
    }, []);

    return (
        <div className="detailsForm">
            <h2 className="mt-2"> Selecciona un Pokémon</h2>
            <select onChange={handleChange} className="form-select select" aria-label="Pokemones">
            <option value={null}>Selecciona un Pokémon</option>
            {pokemones.map((pokemon) => (   
            <option key={pokemon.name}    value={pokemon.name}>{pokemon.name}</option>
            ))}

            </select>
            <button onClick={seeDetail} type="button" className="btn btn-dark mt-3">Ver Detalle</button>
        </div>
    )
}