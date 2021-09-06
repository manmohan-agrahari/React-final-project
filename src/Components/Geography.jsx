import React from "react";

export default function Geography(props) {
  return (
    <div>
      <h3>Geography</h3>
      <table class="table table-dark table-bordered">
        <tbody>
          <tr>
            <th>Region</th>
            <td>{props.region}</td>
          </tr>
          <tr>
            <th>Subregion</th>
            <td>{props.subregion}</td>
          </tr>
          <tr>
            <th>Captial</th>
            <td>{props.capital}</td>
          </tr>
          <tr>
            <th>Demonym</th>
            <td>{props.demonym}</td>
          </tr>
          <tr>
            <th>Lat/Lng</th>
            <td>{props.latlng}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{props.area}km2</td>
          </tr>
          <tr>
            <th>Land borders</th>
            <td>{props.borders}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
