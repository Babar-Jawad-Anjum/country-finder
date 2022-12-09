import React from 'react'

export default function CountryItem({name, capital, imageUrl, population, region}) {

  // console.log(name);
  // console.log(capital);
  // console.log(imageUrl);
  // console.log(population);
  return (
    <div>
      <div className="card" style={{width: '18rem'}}>
        <img src={imageUrl} className="card-img-top" alt="no img"/>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h5>Capital: {capital}</h5>
          <h6>Population: {population}</h6>
          <p>Region: {region}</p>
        </div>
      </div>
    </div>
  )
}
