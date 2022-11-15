function createHeader(json) {
    // Create header div
    let header = document.createElement("div");
    header.className = "post-header";

    // Create clickable user profile picture
    let a = document.createElement("a");
    a.href = "#";

    let userAvatar = document.createElement("img");
    userAvatar.src = json.userAvatar;
    userAvatar.alt = "User avatar";
    a.appendChild(userAvatar);

    // Create date
    let date = document.createElement("h3");
    date.innerHTML = json.date;

    header.append(a, date);
    return header;
}

function createBody(json) {
    // Create body div
    let body = document.createElement("div");
    body.className = "post-body";

    // Create post image
    let postImage = document.createElement("img");
    postImage.src = json.image;
    postImage.alt = "Post picture";

    // Create post body paragraph
    let p = document.createElement("p");
    p.innerHTML = json.body;

    body.append(postImage, p);
    return body;
}

window.onload = () => {
    // JSON online edit link: https://www.npoint.io/docs/412ac316aca5e1b1fe5a

    //fetch("https://api.npoint.io/412ac316aca5e1b1fe5a") // Fetch from online JSON hosting site
    fetch("./res/json/data.json")
        .then((response) => response.json())
        .then(json => {
            let posts = document.getElementsByClassName("content")[0];

            for (const jsonElement of json) {
                let articleElement = document.createElement("article");

                // Create post header
                let header = createHeader(jsonElement);

                // Create post body
                let body = createBody(jsonElement);

                // Add like button and append post
                let input = document.createElement("input");
                input.type = "image";
                input.src = "./res/images/like.png";
                input.alt = "Like button";

                articleElement.append(header, body, input);
                posts.appendChild(articleElement);
            }
        })
        // In case something goes wrong, display info
        .catch(() => {
            console.log("An error has occured")
            let posts = document.getElementsByClassName("content")[0];
            let articleElement = document.createElement("article");

            let body = document.createElement("div");
            body.className = "post-body";
            let p = document.createElement("p");
            p.innerHTML = "An error has occured";
            body.append(p);

            articleElement.appendChild(body);
            posts.appendChild(articleElement);
        })
}