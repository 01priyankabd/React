
// export function Item(props){
//     return <li style={{color:props.isPacked ? "green" : "orangered"}}>{ props.name }</li>
// }

export function Item(props){
    if(props.isPacked){
        return <li style={{color:props.isPacked ? "green" : "orangered"}}>{ props.name }</li>
    } else{
        return null;
    }
}