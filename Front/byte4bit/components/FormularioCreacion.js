
export default function FormularioCreacion() {
    return (
        <div className="container-form">
            <h1>Crear un pokemon</h1>
            <form>
                <div>
                    <input className="nombre-pokemon" id="nombre-pokemon"  onChange="" placeholder="Pokemon" type="text"/>
                    <input className="tipo-pokemon" id="tipo-pokemon" onChange="" placeholder="Tipo" type="text"/>
                    <input className="habilidad-pokemon" id="habilidad-pokemon" onChange="" placeholder="Habilidad" type="text"/>
                    <label>Imagen</label>
                    <input className="imagen-pokemon" type="file" name="" onChange="" id="imagen-pokemon" />
                    <input className="enviar-formulario" type="submit" value="Crear"></input>
                </div>
            </form>
        </div>
    )
}
