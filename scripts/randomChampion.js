const version = '12.22.1';

const allChampNamesArray = [];

// Get an array of all of the current champions

fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`)
    .then((response) => response.json())
        .then((data) => getAllChampNames(data.data));

const getAllChampNames = (object) => {

    for (const item in object) {
        allChampNamesArray.push(item);
    }

    /* 
        This function pushes every champ's name into 'allChampNamesArray'
        The name is later used in 'getRandomChampion' function to fetch a specific .json file
    */ 
}

// Get a random champion

// async function getChampionJSON(championName)

const getChampionJSON = async championName => {
    return fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json`)
    .then((response) => response.json())
        .then((data) => data.data[championName]);
}

const getRandomChampion = async () => {

    const championName = allChampNamesArray[Math.floor(Math.random()*allChampNamesArray.length)];

    const rolledChampion = await getChampionJSON(championName);

    rolledChampion.splashArtURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${rolledChampion.id}_0.jpg`;
    rolledChampion.avatarURL = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${rolledChampion.id}.png`;

    return rolledChampion;
}

export default getRandomChampion;