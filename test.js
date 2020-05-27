fetch('https://api.github.com/search/users?q=type:user + ankey')
    .then((response) => response.json())
    .then((result) => console.log(result));