import React from 'react'

function Index({pokemon}) {
    console.log(pokemon[0].name)
  return (
    <div>Index
         {pokemon.map((poke,i)=>
            <div key={i}>
            <a href={`/pokemon/${i}`}>{poke.name[0].toUpperCase()+ poke.name.slice(1)}</a>
            </div>
            )}
            <a href={`/pokemon/new`}>NEW</a>
    </div>
  )
}

export default Index