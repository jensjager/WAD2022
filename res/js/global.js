function toggleDropdown() {
    let dropdown = document.getElementById("dropdown-content");

    if (dropdown.style.display === "flex")
        dropdown.style.display = "none";
    else
        dropdown.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
    var dropdownHTML = `
    <div class="dropdown">
        <img onclick="toggleDropdown()" src="https://i.ibb.co/8DY3YCm/user-avatar.png" alt="User avatar">
        <div id="dropdown-content">
            <a href="#">John Doe</a>
            <a href="#">john.doe@ut.ee</a>
            <a href="../login-page/login.html">logout</a>
        </div>
    </div>
`
document.querySelector('#dropdown-insert-here').insertAdjacentHTML("afterend", dropdownHTML);
});
