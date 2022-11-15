function toggleDropdown() {
    let dropdown = document.getElementById("dropdown-content");

    if (dropdown.style.display === "flex")
        dropdown.style.display = "none";
    else
        dropdown.style.display = "flex";
}

window.addEventListener("load", function () {
    let img = document.createElement("img");
    img.src = "https://i.ibb.co/8DY3YCm/user-avatar.png";
    img.alt = "User avatar";
    img.addEventListener("click", toggleDropdown);

    let div = document.createElement("div");
    div.id = "dropdown-content"

    let a1 = document.createElement("a")
    a1.href = "#";
    a1.innerHTML = "John Doe";

    let a2 = document.createElement("a")
    a2.href = "#";
    a2.innerHTML = "john.doe@ut.ee";

    let a3 = document.createElement("a");
    a3.href = "../login-page/login.html"
    if (window.location.pathname.split("/").pop() === "index.html")
        a3.href = "./login-page/login.html";
    a3.innerHTML = "logout";

    div.append(a1, a2, a3);
    document.querySelector("#dropdown").append(img, div);
});