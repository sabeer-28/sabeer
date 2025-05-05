import {useState,useEffect} from "react"
function Home(){
    const[post,setPost]=useState(null)
    const controller=new AbortController();
    const signal=Controller.signal
    useEffect(()=>{
        setTimeOut(()=>{
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response=>response.json())
            .then(data=>setPost(data))
            .catch(error=>console.log('Error Fetching data',error))
        },3000)
    })
    
    return (
    <>
    {/* <h1>i am home</h1>
    <link className="btn btn-warning" to="/login">Login</link>
    <a href=""></a>
    <ul>
        {post && post.map((post)=>(<li key={post.id}>{post.id}{post.title}))}
    </ul> */}
    console.log("controller login")
    console.log("colean up Fetching")

    </>
    )
}
export default Home;