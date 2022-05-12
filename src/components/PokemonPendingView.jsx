import {ImSpiner} from 'react-icons/im'
import PokemonDataView from './PokemonDataView'
import pendingImage from './pending.png'

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    status:[],
  }
  return (
    <div role='alert'>
      <div style={styles.spiner}>
        <ImSpiner size='32' className='icon-spin' />
        Loading...
      </div>
      <PokemonDataView pokemon={pokemon}/>
    </div>
  )
}