import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';



export default function Detalles() {

    const [pokeDetails, setPokeDetails] = useState(null);
    const { name } = useParams();

    const getPokemonDetails = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        setPokeDetails(data);    
    }

    useEffect(() => {
        getPokemonDetails();
    }, []);


    return (
        <div>
             <h3 className="mt-3">Pokemon: {name}</h3>   
            <div className="d-flex justify-content-center align-items-center">      
            <img src={pokeDetails?.sprites.other.home.front_default} alt="pokemon" />      
            <ul>
            <h3>Element: {pokeDetails?.types[0].type.name}</h3>
            <li>HP: {pokeDetails?.stats[0].base_stat} </li>
            <li>Attack: {pokeDetails?.stats[1].base_stat} </li>
            <li>Special Attack: {pokeDetails?.stats[2].base_stat} </li>
            <li>Defense: {pokeDetails?.stats[3].base_stat} </li>
            <li>Special Defense: {pokeDetails?.stats[4].base_stat} </li>
            <li>Speed: {pokeDetails?.stats[5].base_stat} </li>
            </ul>
            </div>         
         </div>

    )
}