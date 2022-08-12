// User sidebar

const toggleBtn = document.querySelector('.toggle-btn');
const userSidebar = document.querySelector('.User-sidebar');
const usersideOverlay = document.querySelector('.Userside-overlay');
const UserSidebarCross = document.querySelector('.User-sidebar__cross');



function showOverlayAndFilter() {
    userSidebar.classList.toggle('show');
    usersideOverlay.style.display = "block";
}

function hideOverlayAndFilter() {
    userSidebar.classList.toggle('show');
    usersideOverlay.style.display = "none";
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', showOverlayAndFilter);
}

if (usersideOverlay) {
    usersideOverlay.addEventListener('click', hideOverlayAndFilter);
}
if (UserSidebarCross) {
    UserSidebarCross.addEventListener('click', hideOverlayAndFilter);
}

// search box open

const openSearchboxBtn = document.querySelector('.search-icon')
const searchBox = document.querySelector('.search-box');
const searchBoxOverlay = document.querySelector('.searchbox-overlay');

function openSearchBox() {
    searchBox.classList.toggle('show-box');
    searchBoxOverlay.style.display = "block";
}

function hideOverlay() {
    searchBox.classList.toggle('show-box');
    searchBoxOverlay.style.display = "none";
}
if (openSearchboxBtn) {
    openSearchboxBtn.addEventListener('click', openSearchBox);
}
if (searchBoxOverlay) {
    searchBoxOverlay.addEventListener('click', hideOverlay);
}