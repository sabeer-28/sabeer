import { useState } from "react";
function Button(){

    const[count,setCount]=useState(0);
    function click(){
        setCount(count+1);
    }
    return(
        <div className="continer">
            <button  onClick={()=>click()}>
            {count==10 ? 'infinity':'clickme'}
            </button>
        </div>
    )
}
export default Button;