import getRandomChampion from "./randomChampion.js";
import getRandomRunes from "./randomRunes.js";

const championDataElement = document.querySelector('.champion-data');

async function render() {

    const randomChampion = await getRandomChampion();
    const randomRunes = await getRandomRunes();

    const { name, title, splashArtURL, avatarURL } = randomChampion;
    const { 
        path, keystone, slot1, slot2, slot3,
        pathImg, keystoneImg, slot1Img, slot2Img, slot3Img,
        secondaryPath, secondarySlot1, secondarySlot2,
        secondaryPathImg, secondarySlot1Img, secondarySlot2Img,
    } = randomRunes;

    championDataElement.innerHTML = `
    
        <div class="champion-data-block champion-data-block--header">

            <img class="champion-avatar" src="${avatarURL}"/>
            <div>
                <h1>${name}</h1>
                <em>${title}</em>
            </div>

        </div>

        <div class="champion-data-block">
            <div class="champion-data-block--header">
                <img class="rune-icon--path" src="${pathImg}"/>
                <h2 data-path="${path}">${path}</h2>
            </div>

            <ol class="rune-list">
                <li>
                    <img class="rune-icon" src="${keystoneImg   }">
                    <span>${keystone}</span>
                </li>

                <li>
                    <img class="rune-icon" src="${slot1Img}">
                    <span>${slot1}</span>
                </li>

                <li>
                    <img class="rune-icon" src="${slot2Img}">
                    <span>${slot2}</span>
                </li>

                <li>
                    <img class="rune-icon" src="${slot3Img}">
                    <span>${slot3}</span>
                </li>
            </ol>

            <div class="champion-data-block--header">
                <img class="rune-icon" src="${secondaryPathImg}"/>
                <h3 data-path="${secondaryPath}">${secondaryPath}</h3>
            </div>

            <ol class="rune-list">
                <li>
                    <img class="rune-icon" src="${secondarySlot1Img}">
                    <span>${secondarySlot1}</span>
                </li>

                <li>
                    <img class="rune-icon" src="${secondarySlot2Img}">
                    <span>${secondarySlot2}</span>
                </li>
            </ol>

        </div>


    `;

    document.body.style.backgroundImage = `url('${splashArtURL}')`
};

document.querySelector('button').addEventListener('click', render);



