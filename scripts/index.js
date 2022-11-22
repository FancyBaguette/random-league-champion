import getRandomChampion from "./randomChampion.js";
import getRandomRunes from "./randomRunes.js";

const championDataElement = document.querySelector('main');

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
    
        <div class="data-container champion-data">

            <img class="champion-avatar" src="${avatarURL}"/>
            <div style="display: flex; flex-direction: column; justify-content: space-evenly;">
                <h1 class="champion-name">${name}</h1>
                <em class="champion-title">${title}</em>
            </div>

        </div>

        <div class="data-container rune-data">
            <div class="rune-data-header">
                <img src="${pathImg}"/>
                <h2 data-path="${path}">${path}</h2>
            </div>

            <ol class="rune-list">

                <li class="rune-list-item">
                    <div class="rune-icon keystone-icon" style="background-image: url('${keystoneImg}');"></div>
                    <span class="keystone-name">${keystone}</span>
                </li>
            
                <li class="rune-list-item">
                    <div class="rune-icon" style="background-image: url('${slot1Img}');"></div>
                    <span>${slot1}</span>
                </li>
            
                <li class="rune-list-item">
                    <div class="rune-icon" style="background-image: url('${slot2Img}');"></div>
                    <span>${slot2}</span>
                </li>
            
                <li class="rune-list-item">
                    <div class="rune-icon" style="background-image: url('${slot3Img}');"></div>
                    <span>${slot3}</span>
                </li>

            </ol>

            <div class="rune-data-header">
                <img src="${secondaryPathImg}"/>
                <h2 data-path="${secondaryPath}">${secondaryPath}</h2>
            </div>

            <ol class="rune-list">

                <li class="rune-list-item">
                    <div class="rune-icon" style="background-image: url('${secondarySlot1Img}');"></div>
                    <span>${secondarySlot1}</span>
                </li>
        
                <li class="rune-list-item">
                    <div class="rune-icon" style="background-image: url('${secondarySlot2Img}');"></div>
                    <span>${secondarySlot2}</span>
                </li>

            </ol>

        </div>


    `;

    document.body.style.backgroundImage = `url('${splashArtURL}')`
};

document.querySelector('button').addEventListener('click', render);



