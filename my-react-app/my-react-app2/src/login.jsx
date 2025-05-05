import { useState } from "react"

// on change Event
function Login(){
    const[pwd1,setpwd1]=useState('')
    const[pwd2,setpwd2]=useState('')
    const[same,setSame]=useState(true)
    function handlepassword1(event){
        setpwd1(event.target.value)
        console.log(event.target.value)
    }
    function handlepassword2(event){
        setpwd2(event.target.value)
        console.log(event.target.value)

        if(pwd1 == event.target.value){
            setSame(true)
        }else{
            setSame(false)
        }
    }
    return(
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address </label>
                    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                    <input value={pwd1} onChange={handlepassword1} type="password" className="htmlForm-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="htmlForm-label"> Re enter Password</label>
                    <input value={pwd2} onChange={handlepassword2} type="password" className="htmlForm-control" id="exampleInputPassword2" />
                </div>
                {!same && <p>dosen't match</p> || <p>Password matched</p> } 
                <div className="mb-3 htmlForm-check">
                    <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1" />
                    <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default Login