import axios from 'axios'

var pokemon_api = axios.create({
  baseURL: 'https://api.github.com'
});

const api = {
  getPokemon: (id) => {
    console.log('consultando')
    return pokemon_api.get(`/users/BrianCortes`)
  },
  getSprites: () => {
    return pokemon_api.get(`sprite/3/`)
  }
}

export default api