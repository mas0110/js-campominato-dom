let grigliahtml = document.querySelector(".griglia");
 
let selectLevel = document.getElementById("select")

document.getElementById("play").addEventListener("click", function play() {

    grigliahtml.innerHTML = ""

    for (let i = 1; i <= select.value; i++) {

        let box = document.createElement("div");

        box.style.setProperty(
            "flex-basis", `calc(100% / ${Math.sqrt(select.value)})`
        )

        box.classList.add("box");

        grigliahtml.appendChild(box);

        box.innerText = i

        box.addEventListener("click", function() {
            
            this.classList.toggle("active");
            
            console.log(i);
            
            if (arraybombe.includes(i)) {
                this.classList.add("bomb");
                setTimeout(function() {
                    alert("Hai beccato una bomba... GAME OVER")
                }, 500); 
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
        });
        
        let arraybombe = [ ]

        for (let x = 0; x < 16; x++){

            let numerirandom = Math.floor(Math.random() * 100);
            
            arraybombe.push(numerirandom)

            console.log(arraybombe)

            if (!arraybombe.includes(numerirandom)) {
                arraybombe.push(numerirandom);
            }
            
        }
        
    }
    

}
);