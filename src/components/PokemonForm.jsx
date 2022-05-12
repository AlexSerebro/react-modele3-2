import { Component } from "react";
import { ImSearch } from 'react-icons/im'
import { toast } from "react-toastify";

const style = { form: { marginBotton: 20 } };

export default class PokemonForm extends Component{
  state = {
    pokemonName:'',
  }

  handleNameCange = event => {
  this.setState({ pokemonName: event.currentTarget.value.toLowerCase() })
};

handleSubmit = event => {
  event.preventDefault();

  if (this.state.pokemonName.trim() === '') {
    // toast.error('print pokemon name')
    return;
  }

  this.props.getName(this.state.pokemonName);
  this.setState({ pokemonName: '' })
};

render(){
  return (
    <form onSubmit={this.handleSubmit} style={style.form}>
      <input type='text' name="pokemonName" value={this.state.pokemonName} onChange={this.handleNameCange} />
      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Search
      </button>
    </form>
  )
};
}


// {
//     state = {
//     pokemon: null,
//     loading: false,
// }

//   componentDidMount() {
//      this.setState({loading: true})
//     setTimeout(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         .then(res => res.json())
//         .then(pokemon => this.setState({ pokemon })).finally( this.setState({loading: false}))}, 1000);
//   }
// }