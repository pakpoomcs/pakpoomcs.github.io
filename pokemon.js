const container = document.querySelector('#container')


for (let i = 1; i <= 898; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `${i}`

    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    pokemon.appendChild(label);
    pokemon.appendChild(newImg);

    container.appendChild(pokemon)
    pokemon.classList.add('pokemon')
}