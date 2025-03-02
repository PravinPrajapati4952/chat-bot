// search bar code start
function searchDivs() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let allDivs = document.querySelectorAll(".box, .sub-box");

    allDivs.forEach(div => {
        let text = div.textContent.toLowerCase();
        if (text.includes(input)) {
            div.classList.remove("hidden");
            

            let parent = div.closest(".box");
            if (parent) parent.classList.remove("hidden");
        } else {
            div.classList.add("hidden");
        }
    });

    document.querySelectorAll(".box").forEach(parent => {
        let anyChildVisible = parent.querySelector(".sub-box:not(.hidden)");
        if (anyChildVisible) {
            parent.classList.remove("hidden");
        }
    });
}

// search bar code end

//icon click karne par div open code start
function toggleText(){
    let text = document.getElementById("text-content");

    text.style.display = text.style.display === "none" || text.style.display=== "" ? "block": "none";
}
//icon click karne par div open code end

// name par click karne par page open hoga new start
function openProfile(userId) {
    window.open(`profile.html?user=${userId}`, "_blank");
}

const users = {
    jayram: { name: "jayram dhangar", details: "graphics designer" },
    laxmi : { name: "laxmi didi", details: "software devloper" },
    pranay: { name: "pranay rawal", details: "app devloper" },
    gajendra: { name: "gajendra singh", details: "tally specialist" },
    ayan: { name: "ayan khan", details: "klub-fox manager" },
    dhiraj: { name: "dhiraj", details: "web devloper" },
    krishna: { name: "krishna prajapati", details: "BA specialist computer operater" },
    aryan: { name: "aryan yadav", details: "bike shorum manager" },
    purvesh: { name: "purvesh", details: "game  devloper" },
    raju: { name: "raju verma", details: "software devloper" },
    vinit: { name: "vinit pansre", details: "graphics designer" },
    lakki: { name: "lakki bavaniya", details: "web devloper" },
    sagar: { name: "sagar phatak", details: "software devloper" },
    kunal: { name: "kunal sathe", details: "graphics designer" },
    kanha: { name: "kanha badnaware", details: "web devloper" },
    ritik: { name: "ritik verma", details: "web devloper" }
};

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const userId = getQueryParam('user');

if(userId && users[userId]) {
    document.getElementById("userName").innerText = users[userId].name;
    document.getElementById("userDetails").innerText = users[userId].details;
} else{
    document.getElementById("userName").innerText = "user not found";
    document.getElementById("userDetails").innerText = "invalid user selected";
}
// name par click karne par page open hoga new end

function setProfileImage(imgSrc) {
    localStorage.setItem("selectedProfileImg", imgSrc);
}
//hvfbkjb
