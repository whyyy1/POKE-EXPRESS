import React from 'react'

function Show({poke, index}) {
  return (
    <div><h1>{poke.name[0].toUpperCase()+ poke.name.slice(1) }</h1>
    <img src={poke.img +'.jpg'}/>
    <a href={`/pokemon/`}><button>Back</button></a>
    </div>
  )
}

export default Show