

let myjokes = [
        {
            "category": "Programming",
            "type": "single",
            "joke": "The generation of random numbers is too important to be left to chance.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 39,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 35,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "I have a joke about trickle down economics, but 99% of you will never get it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 238,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "Never date a baker. They're too kneady.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 271,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "My wife is really mad at the fact that I have no sense of direction.\nSo I packed up my stuff and right.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 201,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 191,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "Oysters hate to give away their pearls because they are shellfish.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 90,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Debugging: Removing the needles from the haystack.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 40,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Your mama's so FAT she can't save files bigger than 4GB.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 9,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "Nowadays people are so sensitive, you can't even say \"black paint\" anymore.\nInstead, you have to say \"Jamal, please paint the fence\".",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": false
            },
            "id": 133,
            "safe": false,
            "lang": "en"
        }
    ]

    let index = Math.floor(Math.random()*(myjokes.length - 1));
    joke.innerHTML = myjokes[index].joke;

const refreshBtn = document.getElementById("btn");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
