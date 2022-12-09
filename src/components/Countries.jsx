import React, { useState } from 'react'
import CountryItem from './CountryItem'
import axios from 'axios'
import LoadingBar from './LoadingBar';
import SearchBar from './SearchBar';

export default function Countries() {
    
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


    const getData = ()=>{
      const url = 'https://restcountries.com/v2/all';
        axios.get(url)
        .then((response) => 
        {
          setCountries(response.data);
        })
        .catch((err) =>
        {
          console.log(err);
        })
    }
    // getData();
    React.useEffect(getData, []);

    // console.log(countries);

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm}/>
      <h2 className='my-3 text-center'>Countries - You want to find.</h2>
      <div className="row m-0 p-0">
      {countries.length === 0 ? <LoadingBar /> : countries.filter((element =>
      {

         if(searchTerm === '')
         {
          return element;
         }
         else if (element.name.toLowerCase().includes(searchTerm.toLowerCase()))
         {
            return element;
         }

      })).map((element) =>
      {
        return (
          <div className="col-md-6 col-lg-4 p-0 my-2 d-flex justify-content-center" key={element.name}>
            <CountryItem name={element.name?element.name:""} capital={element.capital?element.capital:""} imageUrl={element.flags.png} population={element.population} region={element.region}/>
          </div>
        )
    })}
      </div>
      

    </div>
  )
}
