const pokedex = document.getElementById("pokedex");
    	const promises = [];
		for (let i = 1; i <= 100; i++) {
		  promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
		}

		Promise.all(promises).then(results => {
		  const pokemon = results.map(data => ({
		    name: data.name,
		    id: data.id,
		    image: data.sprites["front_shiny"],
		    type: data.types.map(type => type.type.name).join(", "),
		  }));
		  getPokemon(pokemon);
		});

		const getPokemon = pokemon => {
			  console.log(pokemon);
			  const pokemonData = pokemon
			    .map(
			      pokeman =>
			        `
			    <li>
			         <img> src="${pokeman.image}"/</img>
			        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
			        <p class="card-subtitle">Type: ${pokeman.type}</p>
			    </li>
			    `
			    )
			    .join("");
			  pokedex.innerHTML = pokemonData;
    };
 pokedex.innerHTML = pokemonData;