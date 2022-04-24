import './Card.css'
function Card(props){
    let style ='card ';
    style += props.className;
    return(
        <div className={style}>{props.children}</div>
    );
}

export default Card;