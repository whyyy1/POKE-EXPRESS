import React from 'react'

function Show({poke}) {
  let imageURl = poke.img
 console.log(poke)
  return (
    <div><h1>{poke.name[0].toUpperCase()+ poke.name.slice(1) }</h1>
    <img src={imageURl} alt={poke.name + ' image - IF YOU SEE THIS THE IMAGE LINK BROKE'}/>
    {/* <a href={imageURl}>{imageURl}</a> */}
    <br></br>
    <a href={`/pokemon`}><button>Back</button></a>
    <br></br>
    <form action={`/pokemon/${poke._id}`} method='POST'>
    <input type="hidden" name="_method" value="DELETE"/>
    <button>Delete</button>
</form>

    </div>
  )
}

export default Show