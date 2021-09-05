import react from "react";
import Cardcss from './Cardcss.css'


const Card = (props) => {
    console.log('folloers',props.followers[0])
    return (
        <div className='card'>
            <h2>{props.login}</h2> 
            <h4>{props.repos}</h4> 
            <img src ={props.avatar} /> 
            <ul>
                {props.followers.map((item)=>(
                <li key = {item.key}>{item.login}</li>))}
            </ul>
        </div>
    )
}

export default Card;
