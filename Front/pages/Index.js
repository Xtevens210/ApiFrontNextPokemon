import Container from "../components/Container";
import TarjetasPokemon from "../components/TarjetasPokemon";

export default function Index(props) {
    return (
        <Container>
            <h1>Lista Pokemon</h1>
            <TarjetasPokemon pokemones={props.pokemones}/>
        </Container>
    )
}


Index.getInitialProps = async (ctx) => {
    //const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const res = await fetch('http://localhost:4000/api/pokemones');
    const data = await res.json();
    //console.log(data);
    //return {users: data};
    return {pokemones: data};
}

//<h2>{props.users[0].id}</h2>