import { sandboxPokemonService } from "../services/SandboxPokemonService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxPokemonController {
  constructor() {
    console.log('sandbox pokemon controller up ');
    // this.getSandboxPokemon()
  }

  async getSandboxPokemon() {
    try {
      await sandboxPokemonService.getSandboxPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}
