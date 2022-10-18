import React from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <PokemonCard/>
        </React.Fragment>
    )
}