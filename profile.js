//icon click karne par div list aayega start
function toggleText(){
    let text = document.getElementById("text-content");

    text.style.display = text.style.display === "none" || text.style.display=== "" ? "block": "none";
}
//icon click karne par div list aayega end


//user name par click karne par dusri file me vahi user name or image aaye gi start
        const users = {
            jayram: { name: "jayram dhangar", details: "software devloper" },
            laxmi: { name: "laxmi didi", details: "graphics designer" },
            pranay: { name: "pranay rawal", details: "app devloper" },
            gajendra: { name: "gajendra singh", details: "software devloper" },
            ayan: { name: "ayan khan", details: "graphics designer" },
            dhiraj: { name: "dhiraj", details: "web devloper" },
            krishna: { name: "krishna prajapati", details: "software devloper" },
            aryan: { name: "aaryan yadav", details: "graphics designer" },
            purvesh: { name: "purvesh", details: "web devloper" },
            raju: { name: "raju verma", details: "software devloper" },
            vinit: { name: "vinit pansare", details: "graphics designer" },
            lakki: { name: "lakki bavaniya", details: "web devloper" },
            sagar: { name: "sagar pathak", details: "software devloper" },
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


        window.onload = function () {
            const imgSrc = localStorage.getItem("selectedProfileImg");
            if (imgSrc) {
                document.getElementById("profileDetailImg").src = imgSrc;
            }
        };

//user name par click karne par dusri file me vahi user name or image aaye gi end

//input or send button par click karne par ek div banega jisme message dikhega start

document.getElementById("sendButton").addEventListener("click", function() {
    const mainContainer = document.getElementById("mainContainer");
    const messageInput = document.getElementById("messageInput");

    const messageText = messageInput.value.trim();
    
    if(messageText !== "") {
        const newChatContainer = document.createElement("div");
        newChatContainer.classList.add("chatContainer");

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.textContent = messageText;

        newChatContainer.appendChild(messageDiv);

        mainContainer.appendChild(newChatContainer);

        mainContainer.scrollTop = mainContainer.scrollHeight;

        messageInput.value = "";
    }
});
document.getElementById("messageInput").addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        document.getElementById("sendButton").click();
    }
});
//input or send button par click karne par ek div banega jisme message dikhega end


//input or send button par click karne par yah kam karega start
const messageInput = document.getElementById('messageInput');
        const sendButton = document.getElementById('sendButton');
        const messageDisplay = document.getElementById('message-display');

        sendButton.addEventListener('click', function(){
            const message = messageInput.value;
            localStorage.setItem('savedMessage',message);
            messageDisplay.textContent = message;
        });

        window.onload = function(){
            const savedMessage = localStorage.getItem('savedMessage');
            if(savedMessage) {
                messageDisplay.textContent = savedMessage;
            }
        };
//input or send button par click karne par yah kam karega end
