let searchInput = document.getElementById("inputText")
let sortInput = document.getElementById("inputSort")
let buttonElectronic = document.getElementById("electronics")
let buttonJewelery = document.getElementById("jewelery")
let buttonMen = document.getElementById("men")
let buttonWomen = document.getElementById("women")
let output = document.getElementById("output")
let products = []


let refresh = (list) =>{

    products = list.map(element => {
        return `<div><img src="${element.image}"><p class="title">${element.title}</p><div><p class="price">$ ${element.price}</p><button class="addCart">Add to cart</button></div></div>`});
    output.innerHTML = products
}


// searchInput.addEventListener("input", () => {
//     fetch('https://fakestoreapi.com/products')
//     .then((response) => response.json())
//     .then((data) => {
//         let list = data
//         products = []
//         let value = searchInput.value
//         list.forEach(element => {
//         if (element.title.toLowerCase().includes(value.toLowerCase())){
//             products += `<div><img src="${element.image}"><p class="title">${element.title}</p><div><p class="price">$ ${element.price}</p><button class="addCart">Add to cart</button></div></div>`}
//         }
//         )
//         output.innerHTML = products}
//         )});


let search = (list) => {
    searchInput.addEventListener("input", () => {
        products = []

        let value = searchInput.value
    list.forEach(element => {
        if (element.title.toLowerCase().includes(value.toLowerCase())){
            products += `<div><img src="${element.image}"><p class="title">${element.title}</p><div><p class="price">$ ${element.price}</p><button class="addCart">Add to cart</button></div></div>`}
        }
        )
        output.innerHTML = products}
    )}


const buttonfunction = (category) =>{
    category.addEventListener("click", () => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
            let list = data
            products = []
            let value = category.value
            list.forEach(element => {
            if (element.category == value){
                products += `<div class ="produktbox">
                <div class="imgTitle">
                    <img src="${element.image}">
                    <p class="title">${element.title}</p>
                </div>
                <div class = "priceBuy">
                    <p class="price">$ ${element.price}</p>
                    <button class="addCart">Add to cart</button>
                </div>
            </div>`}})
            output.innerHTML = products
            
        
        })});
}
buttonfunction(buttonMen)
buttonfunction(buttonWomen)
buttonfunction(buttonElectronic)
buttonfunction(buttonJewelery)




const sortFunction = (list) => {
    sortInput.addEventListener("change", () => {
        output.innerHTML = ""
                value = sortInput.value
                switch(value){
                    case "0":
                        list.sort((a, b) => a.price - b.price)
                        break
                    case "1":
                        list.sort((a, b) => b.price - a.price)
                        break
                }
                products = list.map(element => {
                    return `<div class ="produktbox">
                    <div class="imgTitle">
                        <img src="${element.image}">
                        <p class="title">${element.title}</p>
                    </div>
                    <div class = "priceBuy">
                        <p class="price">$ ${element.price}</p>
                        <button class="addCart">Add to cart</button>
                    </div>
                </div>`});
                output.innerHTML = products
            })}





fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let list = data
        sortFunction(list)
        search(list)
        products = list.map(element => {
            return `<div class ="produktbox">
            <div class="imgTitle">
                <img src="${element.image}">
                <p class="title">${element.title}</p>
            </div>
            <div class = "priceBuy">
                <p class="price">$ ${element.price}</p>
                <button class="addCart">Add to cart</button>
            </div>
        </div>`});
        output.innerHTML = products
        
    })



