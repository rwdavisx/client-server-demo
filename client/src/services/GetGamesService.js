export const GetGamesService = async () => {
    const response = await fetch('/api/games');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) throw Error(body.message);

    return body;
};