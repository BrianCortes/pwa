import React, { Component } from 'react';
import Api from '../util/callApi'
import PokeBall from './pokebola.png'
import './pokemon.css'

class Pokemon extends Component {
  state = {
    pokemon: {},
    statePokeBall: false 
  }
  componentWillMount(){
    Api.getPokemon(2)
      .then((response) => {
        console.log('quien es ese pokemon')   
        const data = response.data
        this.setState({
          pokemon: data
        })
      })
  }
  openPokeBall = () => {
    this.setState({statePokeBall: true})
  }
  getPokemon = () => {
    const pokemon = this.state.pokemon
    return (
      <div>
        <p>{pokemon.name}</p>
        <img src='https://pokeapi.co/api/v1/media/img/2.png' alt=""/>
      </div>
    )
  }
 
  render(){
    return (
      <div className='container'>
        { this.state.statePokeBall === false ?
          <div>
            <img src={PokeBall} alt="" onClick={()=> this.openPokeBall()} className='pokebola'/>
            <p className='text'>Tocame la pokeball</p> 
          </div>
          : 
          this.getPokemon()
        }
      </div>
    )
  }
}
export default Pokemon