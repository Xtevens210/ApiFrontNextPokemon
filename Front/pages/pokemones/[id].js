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
                swal({
                    text: "El pokemon se borro con exito",
                    icon: "success"
                })
            }
        }
    )
};

        function borrar(id){
            fetch(`http://localhost:4000/api/pokemones/${id}`,{
                method: 'DELETE',
            })

    }



    return (
        <div>
            <Container>
                <div className='row'>
                    <div className='col text-center'>
                        <h1>Pokemon</h1>
                    </div>
                </div>

                <div class="card mb-3 shadow p-3 mb-5 bg-body rounded">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={props.pokemones.image} class="img-fluid rounded-start" alt={props.pokemones.name}/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title">{props.pokemones.name}</h2>
                            <ul class="list-group p-2">
                                <li class="list-group-item"><h2 class="text-primary">Tipo: {props.pokemones.tipo}</h2></li>
                                <li class="list-group-item"><h2 class="text-primary">Habilidad: {props.pokemones.habilidad}</h2></li>
                            </ul>
                            <button type="button" class="btn btn-warning m-2 px-5" onClick={mostrarAlerta}>Borrar</button>
                        </div>
                    </div>
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
    return {pokemones: data[query]};
}
