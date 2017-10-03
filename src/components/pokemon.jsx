import React, { Component } from 'react';
import Api from '../util/callApi'
import { random } from 'lodash'
import PokeBall from './pokebola.png'
import PokeOPen from './pokebolaoPen.png'
import Open from './checked.png'
import Close from './error.png'
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
            },
            actions: [
              {action: 'explore', title: 'Explore this new world',
                icon: Open},
              {action: 'close', title: 'Close notification',
              icon: Close},
            ]
          };
          reg.showNotification('Soy la ostia', options);
        });
      }
    }, 1000)
  }

  getPokemon = () => {
    const pokemon = this.state.pokemon
    const style={
      backgroundImage: `url(${pokemon.avatar_url})`
    }
    debugger
    return (
      <div className='containerUser'>
        <p className='nameUser'>{pokemon.name}</p>
        <div style={style} className='imageUser' alt=""/>
        <p className='nameUser'>from: {pokemon.company}</p>
        <div className='sendPus' type="submit" onClick={() => this.callPushNotification()}>PUSH NOTIFICATION</div>
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