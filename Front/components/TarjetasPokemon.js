import Router from "next/router";
import styles from "../styles/TarjetasPokemon.module.css"

export default function TarjetasPokemon(props) {
    let listaTarjetas = [];
    for(let i = 0; i < props.pokemones.length; i++){
        listaTarjetas.push(
            <div className="col p-2"  key={props.pokemones[i].id} onClick={() => Router.push(`/pokemones/[id]`, `/pokemones/${props.pokemones[i].id}`)}>
                <div className="container card shadow p-3 mb-5 bg-body rounded w-75" id={styles.container}>
                        <img src={props.pokemones[i].image} className="card-img-top" alt={props.pokemones[i].name}/>
                    <div className="card-body">
                        <h3 className="card-text text-center"><i>{props.pokemones[i].name}</i></h3>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {listaTarjetas}
        </div>
    )
}
