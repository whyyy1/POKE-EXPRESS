import React from 'react'

function Index({pokemon}) {
  
  return (
    <div>
         {pokemon? <>{pokemon.map((poke,i)=>
            <div key={i}>
            <a href={`/pokemon/${poke._id}`}>{poke.name[0].toUpperCase()+ poke.name.slice(1)}</a>
            </div>
            )}
            <a href={`/pokemon/new`}>NEW</a></>:<div>
              <a href='/pokemon/new'><h1>Go get some Pokemon</h1></a></div>
              }
    </div>
  )
}

export default Index