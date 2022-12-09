import React from 'react'

export default function SearchBar({setSearchTerm}) {

    const onChange = (e)=>{
        setSearchTerm(e.target.value);
      }

  return (
    <div className='d-flex justify-content-center my-3'>
      <span className="mx-3"><input onChange={onChange} className="form-control mr-sm-2 border border-dark" type="text" placeholder="Search by country name..."/></span>  
    </div>
  )
}
