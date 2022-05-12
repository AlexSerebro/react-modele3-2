import { Component } from "react";
import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";
// import {ToastContainer} from 'react-toastify'

export default class App extends Component{
  state = {
    pokemonName:''
  }

  handleFormSubmit = pokemonName => {
    this.setState({pokemonName})
  }

  render() {
    return (
    <div
      style={{
        maxWidth:1170, margin:'0 auto', padding:0
      }}
      >
        <PokemonForm getName={this.handleFormSubmit} />
        <PokemonInfo pokemonName={ this.state.pokemonName}/>
        {/* <ToastContainer autoClose={3000}/> */}
    </div>
  );
}
};
