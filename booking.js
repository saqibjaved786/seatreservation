
const Allseats = document.querySelectorAll(".div1:not(.occupied)")

const counter = document.querySelector(".counter")
const Tprice = document.querySelector(".T-price")

const selectMovie = document.querySelector("select")

let ticketprice = selectMovie.value

selectMovie.addEventListener("change", (e) => {
    ticketprice = e.target.value
    counterupdate()
})



Allseats.forEach((objt, indax) => {

    objt.addEventListener("click", (e) => {
        arr = [objt]
        console.log(e.target);
        if (!e.target.classList.contains("selectSeat")) {
            e.target.classList.add("selectSeat")
            
            var obj = { seatindax: `${indax}`, seatNbr: `${indax + 1}`}

            localStorage.setItem(`${indax}`, JSON.stringify([obj]))
            counterupdate()

        //     if(selectMovie.value === '10'){
        //         console.log("movie-1");
        //     let movie1 = localStorage.getItem("movie-1")?JSON.parse(localStorage.getItem("movie-1")):[]
        //     movie1.push(obj)
        //     localStorage.setItem("movie-1",JSON.stringify(movie1))
            

        //     } 
        //    else if (selectMovie.value === "20"){

        //     console.log("movie-2");
        //     let movie2 = localStorage.getItem("movie-2")?JSON.parse(localStorage.getItem("movie-2")):[]
        //     movie2.push(obj)
        //     localStorage.setItem("movie-2",JSON.stringify(movie2))
           

        //     } else if (selectMovie.value === "18"){
        //         console.log("movie-3");
        //         let movie3 = localStorage.getItem("movie-3")?JSON.parse(localStorage.getItem("movie-3")):[]
        //         movie3.push(obj)
        //         localStorage.setItem("movie-3",JSON.stringify(movie3))

        //     }
        //     else if(selectMovie.value === "15"){
        //         console.log("movie-4");
        //     let movie4 = localStorage.getItem("movie-4")?JSON.parse(localStorage.getItem("movie-4")):[]
        //     movie4.push(obj)
        //     localStorage.setItem("movie-4",JSON.stringify(movie4))

        //     }
            

        }
        else {
            e.target.classList.remove("selectSeat")
            localStorage.removeItem(indax)

            counterupdate()
        }

    })
})


function counterupdate() {
    var arr = []
    var L_length = localStorage.length
    for (i = 0; i < L_length; i++) {
        let x=localStorage.key(i)
        arr.push(x)
    }
    Allseats.forEach((items, ind) => {
        arr.filter((obj) => {
            if (obj == ind) {
                items.classList.add('selectSeat')
            }
        })
    })
    // console.log( arr.length)
    // var selectSeat = document.querySelectorAll(".selectSeat");
    // let selectSeatlength = selectSeat.length

    let xyz = localStorage.length
    // console.log(xyz);
    counter.innerHTML = xyz
    Tprice.textContent = ticketprice * xyz
}

counterupdate()