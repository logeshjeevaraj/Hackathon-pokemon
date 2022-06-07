let pokemons = [];
let images =["https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png",
"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png"]

async function pok(){
    for(let i=1;i<51;i++){
        let solo = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let solos = await solo.json();
        pokemons.push(solos);
    }
    console.log(pokemons);

    for(i=0;i<pokemons.length;i++){
        var div = document.createElement("div");
        div.innerHTML=` <img src= ${images[i]}>
        <p class="name"><span>Name:</span>  ${pokemons[i].name}</p>
        <p class="ability"><span>Ability:</span>  ${pokemons[i].abilities[0].ability.name}</p>
        <p class="moves"><span>Moves:</span>  ${pokemons[i].moves[0].move.name}</p>
        <p class="weight"><span>Weight:</span>  ${pokemons[i].weight}</p>`;
        div.setAttribute("class","seg");
        document.body.append(div);
    }
}
pok();
