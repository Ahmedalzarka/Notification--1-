const btn = document.getElementById('btn');
const container = document.getElementById("container");

btn.addEventListener('click',() => {
    createNotification()
})

function createNotification(){
    const notification = document.createElement("div")
    notification.classList.add('notification')

    container.appendChild(notification)
    
}