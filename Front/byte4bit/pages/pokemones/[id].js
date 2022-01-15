import {useRouter} from 'next/router';
import Container from '../../components/Container';
import swal from 'sweetalert';

export default function Pokemon(props) {
    const router = useRouter();
    const {id} = router.query;

    function mostrarAlerta(){
        swal({
            title : "Eliminar",
            text : "Seguro que quieres borrar este pokemon?",
            icon : "warning",
            buttons : ["No","Si"]
        }).then(respuesta =>{
            if(respuesta){
                borrar(props.pokemones.id)
                window.location.href = "http://localhost:3000"
                swal({
                    text: "El pokemon se borro con exito",
                    icon: "success"
                })
            }
        }
    )
};

        function borrar(id){
            fetch(`http://localhost:4000/api/pokemones/${id-1}`,{
                method: 'DELETE',
            })

    }



    return (
        <div>
            <Container>
                <div className=''>
                    <div className="titulo-pagina-pokemon">
                        <h1>Pokemon</h1>
                    </div>
                </div>

                <div className="container-pagina-pokemon">
                    <img src={props.pokemones.image} className="imagen-pagina-pokemon" alt={props.pokemones.name}/>
                    <div className="cuerpo-pagina-pokemon">
                        <img className="pokeball-uno" src="https://res.cloudinary.com/diqp92rza/image/upload/v1642214599/Multimedia/pokemon-g4422d60ac_640_i16nlp.png" alt="-pokeball"/>
                        <img className="pokeball-dos" src="https://res.cloudinary.com/diqp92rza/image/upload/v1642214599/Multimedia/pokemon-g4422d60ac_640_i16nlp.png" alt="-pokeball"/>
                        <h2 className="titulo-tarjeta-pokemon"><i>{props.pokemones.name}</i></h2>
                        <ul className="ul-tarjeta-pokemon">
                            <li className=""><h2 className="">Tipo: {props.pokemones.tipo}</h2></li>
                            <li className=""><h2 className="">Habilidad: {props.pokemones.habilidad}</h2></li>
                        </ul>
                        <button class="button button--rhea" onClick={mostrarAlerta}><span>Borrar</span></button>
                    </div>
                </div>
            </Container>
        </div>
    )
}


Pokemon.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:4000/api/pokemones');
    const data = await res.json();
    const query = ctx.query.id-1
    return {pokemones: data.pokemones[query]};
}


//<button type="button" className="" onClick={mostrarAlerta}>Borrar</button>