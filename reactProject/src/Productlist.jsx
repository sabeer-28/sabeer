import Products from "../products/products"
import Tea from "../assets/tea.png"
import background from "../assets/bg.jpeg"
import grass from "../assets/gras.png"
function ProductsList(){
    const Prod=[
        {
            img:Tea,
            name:"Tea",
            price:"Rs10"
        },
        {
            img:background,
            name:"netflix",
            price:"Rs1200"
        },
        {
            img:grass,
            name:"grass",
            price:"Rs100"
        }
    ]
    const listofprod=Prod.map((produ)=>
        <Products img={produ.img} name={produ.name} price={produ.price}/>
    )
    return(
        <>{listofprod}</>
    )
}

export default ProductsList