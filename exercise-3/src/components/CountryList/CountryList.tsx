import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { useQuery, gql } from '@apollo/client';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

interface language {
  code: string,
  name: string
}

interface Country {
  name: string,
  native: string,
  capital: string,
  emoji: string,
  currency: string,
  languages: language[]
}

const CountryList: React.FC = () => {

  const [country, setCountry] = useState<Country>();
  const [countryCode, setCountryCode ] = useState<string>("");

  const asyncFunctionDebounced = AwesomeDebouncePromise(
    setCountryCode,
    1000
  );
  
  const onCountryCodeChange = (value: string) => {
    asyncFunctionDebounced(value);
  }

  const getCountries = () => {
    const LIST_COUNTRIES = gql`
    {
      countries(code:"${countryCode}") {
        name
        code
      }
    }
    `;
    const {data, loading, error} = useQuery(LIST_COUNTRIES);

    if (loading)
     console.log("Loading: " + loading);
    if (error)
      console.log("Error: " + error);

    setCountry(data);
  }

  useEffect(() => {
    if (countryCode !== "") {
      getCountries();
    }
  }, [countryCode]);

  return (
    <div className="listContainer">
      <div>
          <input onChange={(e) => {
            onCountryCodeChange(e.target.value);
          }} type="text" placeholder="Enter Country Code"/>
          {country && <div>
            <label>{country.name}</label>
          </div>}
      </div>
      <div>

      </div>
    </div>
  );
}

export default CountryList;
