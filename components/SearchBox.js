import React from 'react'

export const SearchBox = ({ handleChange=null}) => {
  return (
    <div className="container">
        <div className="row">
            <section className="col s4 offset-s4"></section>
                <div className="input-field"></div>
                <input placeholder="Search Movie" type="text" onChange={handleChange}/>

        </div>

    </div>
  )
}
