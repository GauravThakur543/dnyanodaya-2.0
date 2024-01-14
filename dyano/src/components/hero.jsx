import { useState,useRef } from "react";
import axios from "axios";
import img2 from '../../../server/yourfilenamehere.png';
const Hero = ()=>{
    const [count, setCount] = useState(0);
    const [ans,setAns] = useState('');
    const [text,setText] = useState('car');
    const ref = useRef();

    function handleClick(){
        axios.post('http://localhost:3005/img',{"prompt":text}).then((res)=>{
            ref.current.style = {display:"block"};
            document.querySelector('img').src = img2
            setCount(count+1);
            console.log(res);
            setAns(res.data);
        }).catch((err)=>{console.log(err)});
    }
        
    

    return(
        <div className="workspace">
            <div className="ip-area">
            <input type="text" placeholder="Enter text" value={text} className="main-ip" onChange={(e)=>{
                    setText(e.target.value);
                }}/>
                <button className="ip-btn" onClick={handleClick}>Submit</button>
            </div>  
            <br/>
            <p style={!ans?{'border':'none'}:{'border': '1px solid black'}}>{ans}</p>
            <img src={null} alt="Rendered Image" className="ren-img" style={{display: "none"}} ref={ref}/><br/>
        </div>
    );
}

export default Hero;