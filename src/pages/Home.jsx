import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        getPokemons();
    }, []);
    const getPokemons = async () => {
        var endpoints = [];
        for(var i = 0; i < 150; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        console.log(endpoints);
        axios.all(endpoints.map(endpoints));
        await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
            .then((res) => {setPokemons(res.data.results)})
            .catch((error) => {console.log(error)});
    };

    return (
        <React.Fragment>
            <Navbar />
            <Container maxWidth='false'>
                <Grid container>
                    {pokemons.map((pokemon, key) =>{
                        <Grid item xs={4} key={key}>
                            <PokemonCard name={pokemon.name}/>
                        </Grid>
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    );
};