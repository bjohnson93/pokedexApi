export class Pokemon {
  constructor(data) {
    this.id = data.id || ''
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.img
    this.weight = data.weight
    this.height = data.height
    //come back to this one, althought not 'required'
    this.types = data.types[{}]
    this.creatorId = data.creatorId
  }

  static wildListTemplate(wildPokemon) {
    return `
    <li class="mb-2 fs-4">
    <input>
    <span class="selectable" onclick="app.SandboxPokemonController.setActivePokemon('${this.id}')" role="button">${this.name}</span> 
  </li>
    `
  }
}


//active card template below
{/* <div class="d-flex">
  <div>
      <img class="img-fluid" src="${this.img}">
  </div>
  <div>
    <h2>${this.name}</h2>
    <p>${this.nickName}</p>
    <h3>Range: ${this.types}</h3>
    <div class="d-flex">
      <h4 class="me-5">Weight: ${this.weight}</h4>
      <h4>Height: ${this.height}</h4>
    </div>
  
  </div>
</div> */}
// let pokemonData = 