//const api_key = process.env.RIOT_API_KEY;
const api_key = "RGAPI-744cb41b-4ef3-4cb7-91b3-5e0952cf94ce";


async function get_player(gameName, tagLine){
    const url = "https://euw1.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + gameName + "/" + tagLine + api_key
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        const puuid = data.puuid;
    }
    else{
        console.error("Error: " + response.status)
    }

    console.log(puuid)
}

get_player("Torje", "TAR")
