
// typed / named components

export function Profile(props){
    return(
        <div>
            <img src={props.url} height={200} width={200} alt="no pic found" />

            <h3>{props.title}</h3>
        </div>
    )
}