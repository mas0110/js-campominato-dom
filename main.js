let grigliahtml = document.querySelector(".griglia");
 
let selectLevel = document.getElementById("select")

document.getElementById("play").addEventListener("click", function() {

    grigliahtml.innerHTML = ""

    for (let i = 1; i <= select.value; i++) {

        let box = document.createElement("div");

        box.style.setProperty(
            "flex-basis", `calc(100% / ${Math.sqrt(select.value)})`
        )

        box.classList.add("box");

        grigliahtml.appendChild(box);

        box.innerText = i

        box.addEventListener("click", function(){

            this.classList.toggle("active")

            console.log(i)

        }
        )
    }


}
);
