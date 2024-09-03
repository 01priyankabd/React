import React from "react";

function Row(props){
    return(
        <tr className={props.isPaid ? "success" : "danger"}>
            <td> { props.id } </td>
            <td> { props.name } </td>
            <td> { props.email } </td>
            <td> { props.age } </td>
            <td> { props.isPaid ? "Paid" : "UnPaid" } </td>
        </tr>
    )
}

export default Row