import React from 'react'

function New() {
    
  return (
    <div><form action='/pokemon' method='POST'>

    <label htmlFor='name'>Name:</label><br />
    <input type='text' id='name' name='name'></input><br /><br /><br />
   

    

    <button>Submit</button>
</form></div>
  )
}

export default New