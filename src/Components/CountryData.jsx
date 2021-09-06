import React, { useState, useEffect } from "react";
import Code from "./Code";
import Flag from "./Flag";
import Geography from "./Geography";
import Languages from "./Languages";
import Names from "./Names";

export default function CountryData() {
  const [countryDetails, setCountryDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://restcountries.eu/rest/v2/name/arab") //india arab  america
      .then((response) => response.json())
      .then((data) => {
        setCountryDetails(data);
        setLoading(false);
      });
  }, []);
  console.log(countryDetails[0]);
  console.log(countryDetails[1]);

  if (loading) return <h1>loading</h1>;
  return (
    <div>
      <div class="row">
      <div className="col-md-4">
      <Names
      name={countryDetails[1].name}
      nativeName={countryDetails[1].nativeName}
      official={countryDetails[1].altSpellings[2]}
      officialNative={countryDetails[1].altSpellings[3]}
      altSpellings={countryDetails[1].altSpellings.map((alt)=>alt+", ")}/>
       <Code
        alpha2Code={countryDetails[1].alpha2Code}
        alpha3Code={countryDetails[1].alpha3Code}
        numericCode={countryDetails[1].numericCode}
        callingCodes={countryDetails[1].callingCodes}
        currencyCode={countryDetails[1].currencies[0].code}
      />
      </div>
      <div className="col-md-4">
      <Geography
        region={countryDetails[1].region}
        subregion={countryDetails[1].subregion}
        capital={countryDetails[1].capital}
        demonym={countryDetails[1].demonym}
        latlng={countryDetails[1].latlng.map((lat) => lat + "/")}
        area={countryDetails[1].area}
        borders={countryDetails[1].borders.map((border) => border + ", ")}
      />
      <Languages languages={countryDetails[1].languages}/>
      </div>
      <div className="col-md-4">
        <Flag  flagUrl={countryDetails[1].flag}/>
      </div>
     
      </div>
    </div>
  );
}
