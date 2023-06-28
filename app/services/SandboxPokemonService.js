import { api } from "./AxiosService.js"

class SandboxPokemonService {
  async getSandboxPokemon() {
    const res = await api.get('pokemon')
    console.log('pokemon data from sandbox?', res.data);
  }

}

export const sandboxPokemonService = new SandboxPokemonService()