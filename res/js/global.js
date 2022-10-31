function toggleDropdown() {
    let dropdown = document.getElementById("dropdown-content");

    if (dropdown.style.display === "flex")
        dropdown.style.display = "none";
    else
        dropdown.style.display = "flex";
}