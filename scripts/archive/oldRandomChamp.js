const allChampNamesArray = [];
const rolledChampion = {};

// Get an array of all of the current champions

fetch(`https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json`)
    .then((response) => response.json())
        .then((data) => getAllChampNames(data.data));

        /* 
            First 'data' is the object returned by Riot.
            Inside of it there's an another object called 'data' (second data)
            Actual champion objects are nested inside of the second data obj
        */

const getAllChampNames = (object) => {

    for (const item in object) {
        allChampNamesArray.push(item);
    }

    /* 
        This function pushes every champ's name into 'allChampNamesArray'
        I'm confused how this works but it works.
        The name is later used in 'getRandomChampion' function to fetch a specific .json file
    */ 
}

// Get a random champion

const getRandomChampion = () => {

    console.log('getRandomChampion called')

    const randomIndex = Math.floor(Math.random()*allChampNamesArray.length);

    const championName = allChampNamesArray[randomIndex];

    console.log(`championName = ${championName}`)

    fetch(`https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${championName}.json`)
    .then((response) => response.json())
        .then((data) => {
            processChampion(data.data[championName]);
            console.log('Fetch successful')
        });
    
    const processChampion = (championObj) => {
        console.log('processChampion called');
        const {name, title, id} = championObj;
        rolledChampion.name = name;
        rolledChampion.title = title;
        rolledChampion.splashArtURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;
        rolledChampion.avatarURL = `https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${id}.png`;
    }

    console.log('returning rolled champion')
    return rolledChampion;
}

export default getRandomChampion;