/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
POKER CARD DECODER
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

let deck = {
    c: {
        0: 'A',
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        10: 'J',
        11: 'Q',
        12: 'K'

    },
    d: {
        13: 'A',
        14: 2,
        15: 3,
        16: 4,
        17: 5,
        18: 6,
        19: 7,
        20: 8,
        21: 9,
        22: 'T',
        23: 'J',
        24: 'Q',
        25: 'K'
    },
    h: {
        26: 'A',
        27: 2,
        28: 3,
        29: 4,
        30: 5,
        31: 6,
        32: 7,
        33: 8,
        34: 9,
        35: 'T',
        36: 'J',
        37: 'Q',
        38: 'K'
    },
    s: {
        39: 'A',
        40: 2,
        41: 3,
        42: 4,
        43: 5,
        44: 6,
        45: 7,
        46: 8,
        47: 9,
        48: 'T',
        49: 'J',
        50: 'Q',
        51: 'K'
    }
};

let cards = ['Ac', 'Ks', '5h', 'Td', '3c'];

function encode(card) {
    // split data
    let cardData = card.split("");
    firstChar = cardData[0];
    secondChar = cardData[1];

    //lets select the correct object
    for (property in deck[secondChar]) {
        if (deck[secondChar][property] == firstChar) {
            // return `${firstChar}${secondChar} => ${property}`;
            return `${property}`;
        }
    }
}


let encoded = cards.map((card) => encode(card));
encoded = encoded.sort((a, b) => {
    return a - b
});
console.log(encoded);

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
DECODING
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

cards = ['0', '51', '30', '22', '2'];
let card = '51';

//first organize the cards
let shuffled = cards.sort((a, b) => {
    return a - b;
});

//decoding function
function decode(card) {
    for (symbol in deck) {
        for (row in deck[symbol]) {
            if (row === card) {
                return `${deck[symbol][row]}${symbol}`;
            }
        }
    }
}

//then lets do the magic!
let decoded = shuffled.map((card) => decode(card));


console.log(decoded);




