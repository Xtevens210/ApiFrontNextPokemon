
import Head from "next/head"
import NavBar from "./NavBar"


export default function Container(props) {
    return (
        <div>
            <Head>
                <title>Pokemon Byte4Bit</title>
                <link rel='stylesheet' href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lumen/bootstrap.min.css"/>
            </Head>
            <NavBar/>
            <div className="container p-4">
                {props.children}
            </div>
        </div>
    )
}

//Podemos generar etiquetas head con next en donde podemos modificar todo lo referente a un head en este caso el titulo de la pagina y el link de los estilos.