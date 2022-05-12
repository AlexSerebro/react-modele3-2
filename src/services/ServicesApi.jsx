 function fetchPokemonName(name) {
  return (
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
          if (response.ok) { return response.json() }
          return Promise.reject(new Error('Not found pokemon'))
        })
  )
}

const api = {
  fetchPokemonName
};

export default api;
