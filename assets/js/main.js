let searchInput = document.getElementById("inputText")
let sortInput = document.getElementById("inputSort")
let buttonElectronic = document.getElementById("electronics")
let buttonJewelery = document.getElementById("jewelery")
let buttonMen = document.getElementById("men")
let buttonWomen = document.getElementById("women")
let output = document.getElementById("output")
let products = []

searchInput.addEventListener("input", () => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        let list = data
        products = []
        let value = searchInput.value
        list.forEach(element => {
        if (element.title.toLowerCase().includes(value.toLowerCase())){
            products += `<div><img src="${element.image}"><p class="title">${element.title}</p><div><p class="price">$ ${element.price}</p><button class="addCart">Add to cart</button></div></div>`}
        }
        )
        output.innerHTML = products}
        )});

buttonElectronic.addEventListener("click", () => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        let list = data
        products = []
        let value = buttonElectronic.value
        list.forEach(element => {
        if (element.category == value){
            products += `<div><img src="${element.image}"><p class="title">${element.title}</p><div><p class="price">$ ${element.price}</p><button class="addCart">Add to cart</button></div></div>`}
        }
        )
        output.innerHTML = products}
        )});

buttonJewelery.addEventListener("click", () => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        let list = data
        products = []
        let value = buttonJewelery.value
        console.log(value);
        list.forEach(element => {
        if (element.category == value){
            products += `<div><img src="${element.image}"><p class="title">${element.title}</p><div><p class="price">$ ${element.price}</p><button class="addCart">Add to cart</button></div></div>`}})
        output.innerHTML = products})})

buttonWomen.addEventListener("click", () => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        let list = data
        products = []
        let value = buttonWomen.value
        list.forEach(element => {
        if (element.category == value){
            products += `<div><img src="${element.image}"><p class="title">${element.title}</p><div><p class="price">$ ${element.price}</p><button class="addCart">Add to cart</button></div></div>`}})
        output.innerHTML = products})});

buttonMen.addEventListener("click", () => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        let list = data
        products = []
        let value = buttonMen.value
        list.forEach(element => {
        if (element.category == value){
            products += `<div><img src="${element.image}"><p class="title">${element.title}</p><div><p class="price">$ ${element.price}</p><button class="addCart">Add to cart</button></div></div>`}})
        output.innerHTML = products})});


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
                    return `<div><img src="${element.image}"><p class="title">${element.title}</p><div><p class="price">$ ${element.price}</p><button class="addCart">Add to cart</button></div></div>`});
                output.innerHTML = products
            })}





fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {

        console.log(data);
        let list = data
        
        console.log(list);
        products = list.map(element => {
            return `<div><img src="${element.image}"><p class="title">${element.title}</p><div><p class="price">$ ${element.price}</p><button class="addCart">Add to cart</button></div></div>`});
        output.innerHTML = products
        sortFunction(list)
    })



