import React from "react";

export default function Names(props) {
  return (
    <div>
       <h3>Names</h3>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th>Common</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Official</th>
            <td>{props.official}</td>
          </tr>
          <tr>
            <th>Common(Native)</th>
            <td>{props.nativeName}</td>
          </tr>
          <tr>
            <th>Official(Native)</th>
            <td>{props.officialNative}</td>
          </tr>
          <tr>
            <th>Alternative spellings</th>
            <td>{props.altSpellings}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
