import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { wildPokemonService } from "../services/WildPokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawWildPokemon() {
  const wildPokemon = AppState.wildPokemon

  let template = ''

  wildPokemon.forEach(pokemon => {
    template += Pokemon.wildListTemplate
  })

  setHTML('wildPokemon', template)
}

export class WildPokemonController {

  constructor() {
    console.log('the pokemon controller is loaded');

    this.getPokemon()

    AppState.on('wildPokemon', _drawWildPokemon)
  }

  async getPokemon() {
    try {
      await wildPokemonService.getPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}