import getRandomChampion from "./randomChampion.js";
import getRandomRunes from "./randomRunes.js";

const championCardContainer = document.querySelector('.champion-card-container');

async function render() {

    const randomChampion = await getRandomChampion();
    const randomRunes = getRandomRunes();

    const { name, title, splashArtURL, avatarURL } = randomChampion;
    const { path, keystone, keystoneImg, slot1, slot2, slot3 } = randomRunes;

    championCardContainer.innerHTML = `

        <h1> <img src='${avatarURL}'/> ${name}</h1>
        <em>${title}</em>

        <hr>

        <h2>Runes</h2>

        <h3>${path}</h3>
        <p>
            <img src='${keystoneImg}'/> ${keystone}<br>
            ${slot1}<br>
            ${slot2}<br>
            ${slot3}
        </p>

    
    `

    document.body.style.backgroundImage = `url('${splashArtURL}')`
};

document.querySelector('button').addEventListener('click', render);



