import Router from "next/router";
import React, { useEffect } from 'react'

export default function TarjetasPokemon(props) {

        let listaTarjetas = [];
        for(let i = 0; i < props.pokemones.pokemones.length; i++){
            if(props.pokemones.pokemones[i] == null){

            }else{
                listaTarjetas.push(
                    <div className="card" key={props.pokemones.pokemones[i].id} onClick={() => Router.push(`/pokemones/[id]`, `/pokemones/${props.pokemones.pokemones[i].id}`)}>
                            <img src={props.pokemones.pokemones[i].image} className="" alt={props.pokemones.pokemones[i].name}/>
                        <div className="cuerpo-tarjeta">
                            <h3 className="titulo-tarjeta"><i>{props.pokemones.pokemones[i].name}</i></h3>
                        </div>
                    </div>
            )
        }
    }



    return (
        <div className="container">
            {listaTarjetas}
        </div>
    )
}


//id={styles.container}>