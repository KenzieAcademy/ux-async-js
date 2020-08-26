window.onload = function () { // Run this once the page has loaded.
    // search
    document.querySelector("#searchButton").addEventListener("click", searchGithub);
    function searchGithub() {
        const url = "https://api.github.com/search/users?q="
        const searchUserText = document.querySelector("#searchUser").value;

        // Obtain a list of users from the Github API that match searchUserText
        //  The final result will contain an array under the key 'items'
        // Pass this array to `renderUserList`

        fetch(url + searchUserText)
            .then((resp) => resp.json())
            .then(function(data) {
                console.log(data);
                let users = data.items;
                return renderUserList(users);
            })
            .catch(function(error) {
                return console.log(error);
            });
    }

    function renderUserList(githubUsers) {
        let html = "";
        html += "<ul>";
        for (let i = 0; i < githubUsers.length; i++) {
            let githubUser = githubUsers[i];
            html += "<li>";
            html += `<img src="${githubUser.avatar_url}">`;
            html += `<strong>${githubUser.login}</strong>`;
            html += `<a target="_blank" href="${githubUser.html_url}">`;
            html += "</li>";
        }
        html += "</ul>";

        document.querySelector("#resultsContainer").innerHTML = html;
    }
}
