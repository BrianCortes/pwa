import React, { Component } from 'react';
import Api from '../util/callApi'
import { random } from 'lodash'
import PokeBall from './pokebola.png'
import PokeOPen from './pokebolaoPen.png'
import './pokemon.css'

class Pokemon extends Component {
  state = {
    pokemon: {},
    statePokeBall: false,
    showPokemon: false,
   }
  componentWillMount(){
    const perfiles = [
      'BrianCortes',
      'andresfcardenas',
      'Alegospina',
      'davsket',
      'ebar0n',
      'julian-amaya',
      'luisvillara',
      'maximux13',
      'migueljo',
      'SoyAndresHernandez',
      'JonathanRLopez',
      'jjmedinas'
    ]  
    Api.getPokemon(perfiles[0])
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
    setTimeout(() => this.setState({showPokemon: true}) , 2000)
  }
  componentDidMount = () => {
    Notification.requestPermission(function(status) {
      console.log('Notification permission status:', status);
    });
    
  }

  callPushNotification = () => {
    setTimeout(() => {
      if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
          var options = {
            body: 'Te amo',
            icon: PokeBall,
            vibrate: [100, 50, 100],
            data: {
              dateOfArrival: Date.now(),
              primaryKey: 1
            }
          };
          reg.showNotification('Soy la ostia', options);
        });
      }
    }, 10000)
  }

  getPokemon = () => {
    const pokemon = this.state.pokemon
    debugger
    return (
      <div className='containerUser'>
        <p className='nameUser'>{pokemon.name}</p>
        <img src={pokemon.avatar_url} className='imageUser' alt=""/>
        <p className='nameUser'>from: {pokemon.company}</p>
        <input type="submit" value="Submit" onClick={() => this.callPushNotification()}/>
      </div>
    )
  }
 
  render(){
    return (
      <div className='container'>
        { this.state.showPokemon === false ?
          <div>
            <img src={this.state.statePokeBall === false ? PokeBall : PokeOPen} alt="" onClick={()=> this.openPokeBall()} className='pokebola'/>
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