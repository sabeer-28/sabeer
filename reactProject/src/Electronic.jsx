function Electronic(props){
    return(
        <>
        <div className='cash'>
            <img src={props.img} alt=""/>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
        </>
    )
}
export default Electronic