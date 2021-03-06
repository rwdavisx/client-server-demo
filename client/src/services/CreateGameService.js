export const CreateGameService = async (data) => {
    const name = data.name;
    const rating = data.rating;
    const genre = data.genre;

    const response = await fetch('/api/games', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            rating: rating,
            genre: genre,
        })
    });

    const status = await response.status;

    if (status !== 200) throw Error();

    return status;
};