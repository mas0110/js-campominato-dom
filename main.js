let grigliahtml = document.querySelector(".griglia");
 
let selectLevel = document.getElementById("select")

document.getElementById("play").addEventListener("click", function play() {

    punteggio = 0

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
            
            console.log(i);

            punteggio = punteggio + 1
            
            if (arraybombe.includes(i)) {
                this.classList.add("bomb");
                setTimeout(function() {
                    alert("Hai calpestato una bomba... GAME OVER")
                }, 500); 

                setTimeout(function() {
                    alert("Il tuo punteggio è di: " + punteggio)
                }, 600); 

                setTimeout(function() {
                    grigliahtml.innerHTML = ""
                }, 700);

            }else {
                this.classList.toggle("active");
            }

        });
        
        let arraybombe = [ ]

        for (let x = 0; x < 16; x++){

            let numerirandom = Math.floor(Math.random() * 100);

            arraybombe.push(numerirandom)

            if (!arraybombe.includes(numerirandom)) {
                arraybombe.push(numerirandom);
            }
            
        }
        
    }
    

}
);