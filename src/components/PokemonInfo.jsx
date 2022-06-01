import { Component } from "react";
import PokemonFallbackView from "./PokemonErrorView";
import PokemonDataView from "./PokemonDataView";
import PokemonPendingView from "./PokemonPendingView";
import api from '../services/ServicesApi';

export default class PokemonInfo extends Component{
  state = {
    pokemon: null,
    // loading: false,
    error: null,
    status: 'idle',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: 'pending'});

      api.fetchPokemonName(this.props.pokemonName)
        .then(pokemon => this.setState({ pokemon , status: 'resolved'}))
        .catch(error => this.setState({ error, status:'rejected' }))
        // .finally(this.setState({ loading: false }))
   }
 }

  render() {
    const { pokemon, error , status,} = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>print name</div>
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName}/>
    }
    
    if (status === 'rejected') {
      return <PokemonFallbackView message={error.message}/>
    }

    if (status === 'resolved') {
      return (
        <PokemonDataView pokemon={pokemon}/>
      )}
    }


    // return <div>
    //   <h1>PokemonInfo</h1>
    //   {error && <p>{error.message}</p>}
    //   {loading && <div>Loading...</div>}
    //   {!pokemonName && <div>print name</div>}
    //   {pokemon && <div>
    //     <p>{pokemon.name}</p>
    //     <img src={pokemon.sprites.other['official-artwork'].front_default}
    //       alt={pokemon.name}
    //     width='200'/>
    //   </div>}
    // </div>
  
}