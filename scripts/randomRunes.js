const version = '12.22.1';
let runesArray;

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
    console.log(rolledSlotOne)
    const rolledSlotTwo = rolledPath.slots[2].runes[getRandomIndex(rolledPath.slots[2].runes)];
    const rolledSlotThree = rolledPath.slots[3].runes[getRandomIndex(rolledPath.slots[3].runes)];

    let secondaryRolledPath = runesArray[getRandomIndex(runesArray)];

    // This 'while' loop ensures we don't get eg. 'Domination' as both the main and secondary path
    while (runesArray.indexOf(rolledPath) === runesArray.indexOf(secondaryRolledPath)) {
        secondaryRolledPath = runesArray[getRandomIndex(runesArray)];
    }

    const secondaryRolledSlotOne = secondaryRolledPath.slots[1].runes[getRandomIndex(secondaryRolledPath.slots[1].runes)];
    const secondaryRolledSlotTwo = secondaryRolledPath.slots[2].runes[getRandomIndex(secondaryRolledPath.slots[2].runes)];

    const rolledRunes = {
        path: rolledPath.name,
        keystone: rolledKeystone.name,
        slot1: rolledSlotOne.name,
        slot2: rolledSlotTwo.name,
        slot3: rolledSlotThree.name,

        pathImg: `./images/${rolledPath.icon}`,

        keystoneImg: `./images/${rolledKeystone.icon}`,
        slot1Img: `./images/${rolledSlotOne.icon}`,
        slot2Img: `./images/${rolledSlotTwo.icon}`,
        slot3Img: `./images/${rolledSlotThree.icon}`,

        secondaryPath: secondaryRolledPath.name,
        secondarySlot1: secondaryRolledSlotOne.name,
        secondarySlot2: secondaryRolledSlotTwo.name,

        secondaryPathImg: `./images/${secondaryRolledPath.icon}`,

        secondarySlot1Img: `./images/${secondaryRolledSlotOne.icon}`,
        secondarySlot2Img: `./images/${secondaryRolledSlotTwo.icon}`,
    };
    
    return rolledRunes;
}

export default getRandomRunes;