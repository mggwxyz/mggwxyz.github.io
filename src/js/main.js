import 'whatwg-fetch';

const baseURL = 'https://api.github.com';

fetch(baseURL + '/mggwxyz/repos', {
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    },
}).then(res => {
    return res.text()
});

