function products(props){
    return(
        <>
        <div className='card'>
            <img src={props.img} alt=""/>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
        </>
    )
}
export default products