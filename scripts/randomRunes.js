let runesArray;
const version = '12.22.1' // latest

fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`)
    .then((response) => response.json())
        .then((data) => runesArray = data)


const getRandomRunes = () => {

    const getRandomIndex = (arr) => {
        return Math.floor(Math.random()*arr.length);
    };
    
    const rolledPath = runesArray[getRandomIndex(runesArray)];

    /*
        rolledPath can be: Precision, Domination, Sorcery, Resolve or Inspiration.
        It will be an object, with an array "slots" inside of it.
        Keystones are located in a subarray "runes" at index 0 of "slots" array.
        Slot1 runes at subarray "runes" at index 1 of "slots", etc. etc.
    */

    const rolledKeystone = rolledPath.slots[0].runes[getRandomIndex(rolledPath.slots[0].runes)];

    const rolledSlotOne = rolledPath.slots[1].runes[getRandomIndex(rolledPath.slots[1].runes)];
    const rolledSlotTwo = rolledPath.slots[2].runes[getRandomIndex(rolledPath.slots[2].runes)];
    const rolledSlotThree = rolledPath.slots[3].runes[getRandomIndex(rolledPath.slots[3].runes)];

    const rolledRunes = {
        path: rolledPath.name,
        keystone: rolledKeystone.name,
        keystoneImg: `./images/${rolledKeystone.icon}`,
        slot1: rolledSlotOne.name,
        slot2: rolledSlotTwo.name,
        slot3: rolledSlotThree.name,
    };
    
    return rolledRunes;
}

export default getRandomRunes;