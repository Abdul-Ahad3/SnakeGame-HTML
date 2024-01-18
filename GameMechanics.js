let s = document.getElementById("snake");
let x = 0, y = 0;

window.addEventListener("keydown", event => {
    switch(event.key){
        case "ArrowDown":
            console.log(event.key);
            y+=5;
            s.style.top = y + "px";
            console.log("done");
            break;
        
        case "ArrowUp":
            console.log(event.key);
            y-=5;
            s.style.top = y + "px";
            console.log("done");
            break;

        case "ArrowRight":
            console.log(event.key);
            x+=5;
            s.style.left = x + "px";
            console.log("done");
            break;

        case "ArrowLeft":
            console.log(event.key);
            x-=5;
            s.style.left = x + "px";
            console.log("done");
            break;
    }
})