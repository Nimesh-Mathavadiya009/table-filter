import React, { useEffect, useId, useState } from 'react'
import "./component.css"


function SearchFilter({items}) {
  const [searchTerm, setSearchTerm] = useState("")
  
  let filteredItems
  
  if(searchTerm !== ""){
    filteredItems = items.filter((item) => (item.name.toLowerCase().includes(searchTerm.toLowerCase())) )
  }

  return (
    <>
       <div id="hero">
           <div id="searchField">
                 <input type="text" 
                 placeholder='Enter Search Item : ' 
                 value={searchTerm} 
                 onChange={(event) => setSearchTerm(event.target.value) } />
           </div>
           <div id="filtered-items">
                <table border={1}>
                  <thead>
                    <tr>
                      {
                        searchTerm === "" ? null : <td colSpan={2}>Filtered Items</td>
                      }
                    </tr>
                  </thead>
                  <tbody>
                    {
                      searchTerm === "" ? null : 
                      filteredItems.map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                          </tr>
                      ))
                    }
                  </tbody>
                </table>          
           </div>
       </div>
    </>
  )
}

export default SearchFilter
