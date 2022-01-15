import React from 'react';
import swal from 'sweetalert';

class FormularioCreacion extends React.Component {

    state = {
        nombre: '',
        tipo: '',
        habilidad: '',
        imagen: '',
        id:''
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        swal({
            title: "Crear",
            text: "Crear pokemon",
            icon: "warning",
            buttons: ["No", "Si"]
        }).then(respuesta =>{
            if(respuesta){
                swal({
                    text: "El pokemon se creo con exito",
                    icon: "succes"
            })
            window.location.href = "http://localhost:3000"
            }

        /*alertaFetch()

        function crear(objeto){
            fetch("localhost:4000/api/pokemones/new-pokemon"),{
            method: 'POST',
            body : JSON.stringify({
                name: objeto.name,
                image: objeto.image,
                id: objeto.id,
                tipo: objeto.tipo,
                habilidad: objeto.habilidad
            })
        }
        }

        function alertaFetch(){
            swal({
                title: "Crear",
                text: "Crear pokemon",
                icon: "warning",
                buttons: ["No", "Si"]
            }).then(respuesta =>{
                if(respuesta){
                    crear(this.setState)
                    window.location.href = "http://localhost:3000"
                    swal({
                        text: "El pokemon se borro con exito",
                        icon: "succes"
                })
                }
            }
            )
        };*/
    }
    )
}


    render(){
        return (
            <div className="container-form">
                <h1>Crear un pokemon</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                        type="text"
                        className="id-pokemon"
                        name="id"
                        onChange={this.handleChange}
                        placeholder="Numero"/>

                        <input
                        type="text"
                        className="nombre-pokemon"
                        name="nombre"
                        onChange={this.handleChange}
                        placeholder="Pokemon"/>

                        <input
                        type="text"
                        className="tipo-pokemon"
                        name="tipo"
                        onChange={this.handleChange}
                        placeholder="Tipo"/>

                        <input
                        type="text"
                        className="habilidad-pokemon"
                        name="habilidad"
                        onChange={this.handleChange}
                        placeholder="Habilidad"/>

                        <label>Imagen</label>

                        <input
                        type="file"
                        className="imagen-pokemon"
                        name="imagen"
                        onChange={this.handleChange}/>

                        <input className="enviar-formulario" type="submit" name="submit" value="Crear"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormularioCreacion;


