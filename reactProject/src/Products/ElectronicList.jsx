import Electronic from "./electronic"
import hard from "./assets/hard2.png"
import hard3 from "./assets/hard3.png"
import hard4 from "./assets/hard4.png"
import hard5 from "./assets/hard5.png"

function Electroniclist(){
    const Elec=[
        {
            img:hard,
            price:Rs100, 
            name:"hard1"
        },
        {
            img:hard3,
            price:Rs200,
            name:"hard3"   
        },
        {
            img:hard4,
            price:Rs300,
            name:"hard4"
        },
        {
            img:hard5,
            price:Rs400,
            name:"hard5"
        }
    ]
    const listofElectronic=Elec.map((electronic)=>
    <Electronic img={electronic.img} name={electronic.name} price={electronic.price}/>)
    return(listofElectronic)
}
export default Electroniclist
