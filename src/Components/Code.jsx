import React from "react";

export default function Code(props) {
  return (
    <div>
       <h2>Codes</h2>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th>ISO 3166-1 alpha2</th>
            <td>{props.alpha2Code}</td>
          </tr>
          <tr>
            <th>ISO 3166-1 alpha-3</th>
            <td>{props.alpha3Code}</td>
          </tr>
          <tr>
            <th>ISO 3166-1 numeric</th>
            <td>{props.numericCode}</td>
          </tr>
          <tr>
            <th>International calling code</th>
            <td>{props.callingCodes}</td>
          </tr>
          <tr>
            <th>ISO 4217 currency code</th>
            <td>{props.currencyCode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
