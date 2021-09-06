import React from 'react'

export default function Languages(props) {
    return (
        <div>
        <h3>Languages</h3>
        <table class="table table-bordered">
        <tbody>
         {props.languages.map((language)=>{return (<tr>
            <th>{language.name}</th>
            <td>{language.nativeName}</td>
         </tr>)})}
        </tbody>
      </table>
        </div>
    )
}
