// export const SEARCH = {
//   CHARACTERS: 'people',
//   FILMS: 'films',
//   PLANETS: 'planets',
//   SPECIES: 'species',
//   STARSHIPS: 'starships',
//   VEHICLES: 'vehicles'
// }

export async function StarWarsApi ({ type, search = null }) {
  return await fetch(`https://swapi.dev/api/${type}${search ? `/?search=${search}` : ''}`)
    .then(async response => await response.json())
    .then(data => data.results)
    .catch(() => { console.log('ERROR') })
}

// const ressult = await StarWarsApi({ type: 'people' })
// console.log(ressult)
