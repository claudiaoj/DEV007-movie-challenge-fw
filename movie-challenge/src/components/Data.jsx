function Data(path) {
    const Api = 'https://api.themoviedb.org/';

    const options = {
    headers: {
        Authorization: "Bearer e76e43be11ae30706e80f301fd5ccfee",
        "Content-Type": "application/json;charset=utf-8"
    }
    };

    return fetch(Api + path, options).then((result) => result.json());
}

export default Data;
