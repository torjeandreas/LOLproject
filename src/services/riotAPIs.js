const api_key = process.env.RIOT_API_KEY;



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
