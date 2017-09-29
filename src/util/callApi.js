import axios from 'axios'

var pokemon_api = axios.create({
  baseURL: 'https://api.github.com'
});

const api = {
  getPokemon: (user) => {
    console.log('consultando')
    return pokemon_api.get(`/users/${user}`)
  },
  getSprites: () => {
    return pokemon_api.get(`sprite/3/`)
  }
}

export default api