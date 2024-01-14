// import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'

export const Home = ()=>{
    // const [str,setStr] = useState('');
    // const[count, setCount] = useState(1)
    // useEffect(() => {
    //     setInterval(()=>{
    //         if(count%4 === 0){
    //             setStr('');
    //             setCount(1)
    //         }
    //         else{
    //             setStr(str.concat('.'));
    //         } 
    //         setCount(count + 1)   
    //     },1500);
    // }, [count, str])

    return(
            <div className="hero">
                <h2>
                    Start Learning with<br/>
                    Dnyanodaya<br/>
                    <Link to="/learn"><button className="home-btn">launch app</button></Link>
                </h2>
                <br/>
            </div>
    )
}