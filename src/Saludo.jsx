function Saludo(props){
    return(
        <>
        <h1>Hola</h1>
        <h1>Como estás {props.nombre} {props.apellido } ?</h1>
        </> 
    )
}
export default Saludo;