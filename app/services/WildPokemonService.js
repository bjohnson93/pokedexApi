import { pokeApi } from "./AxiosService.js";

class WildPokemonService {
  async getPokemon() {
    const res = await pokeApi.get('pokemon')
    console.log(res.data, (', here is the response data of pokemon'));
  }

}

export const wildPokemonService = new WildPokemonService()