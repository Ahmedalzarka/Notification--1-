const btn = document.getElementById('btn');
const container = document.getElementById("container");

btn.addEventListener('click',() => {
    createNotification()
})

function createNotification(){
    const notification = document.createElement("div")
    notification.classList.add('notification')
    notification.innerHTML = `
        <div class="logo-info">
            <img src="facebook.png" alt="facebook">
            <h2>Facebook</h2>
            <h3>9m ago</h3>
        </div>
        <h1>friend request!</h1>
        <h3><span>Ahmed</span> sent you a friend request!
        Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        `
    container.appendChild(notification)

    setTimeout(() => {
        notification.remove();
    },4000)
}