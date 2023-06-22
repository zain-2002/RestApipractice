getPorducts()
const searchBar=document.getElementById('srchbar')
const searchbtn=document.getElementById('srch_btn')
searchbtn.addEventListener('click',async function (){
    const productsResponse = await fetch('https://dummyjson.com/products/search?q='+searchBar.value)
    .then(res => res.json())

let products = productsResponse.products
printallitems(products)
})
function printallitems(arr){
    container.innerHTML=''
    arr.forEach((data) => {
        //desctructuring
        const { thumbnail, title, price } = data
        const card = `<div class='card' >
        <img src =${thumbnail} />
        <h4>${title} </h4>
        <h4>${price} </h4>
        </div>`
        container.innerHTML += card
    })

}
async function getPorducts() {
    const productsResponse = await fetch('https://dummyjson.com/products')
        .then(res => res.json())
    let products = productsResponse.products
   printallitems(products)
    //map
    var categories = []
    products.map((obj) => {
        if (!categories.includes(obj.category)) {
            categories.push(obj.category)
        }
    })
    
    categories.forEach((cat) => {
        const chip = `<div class = 'chip' id = 'chip' > <span > ${cat}</span> </div>`
        tags.innerHTML += chip     
    })
    
    const chipElements = document.getElementsByClassName('chip');
    Array.from(chipElements).forEach((chipElement) => {
      chipElement.addEventListener('click', function (event) {
        const spanHTML = event.currentTarget.querySelector('span').innerHTML;

    let desiredProducts=products.filter(each=> (spanHTML.trim().toLowerCase()==='All'.trim().toLowerCase()) ?   products :each.category.trim().toLowerCase() === spanHTML.trim().toLowerCase())

    printallitems(desiredProducts)
    
    
    })})

    // filter
    // const smartphones = products.filter((data) => data.category == 'laptops')
    // console.log('smartphones->', smartphones)

    // //find
    // const iphone = products.find((data) => data.title == 'iPhone X')
    // console.log('iphone->', iphone)

}








//for each
//map
//filter
//find
//findbyindex
//reduce
//sort


// function getProducts(callback) {
//     fetch('https://dummyjson.com/products')
//         .then(res => res.json())
//         .then(() => {
//             callback(res.products)
//         });
// }

// function renderDateToHtml(arr) {
//     arr.forEach((data, i) => {
//         const card = `<div class='card' >
//         <img src =${data.thumbnail} />
//         <h4>${data.title} </h4>
//         <h4>${data.price} </h4>
//         </div>`
//         container.innerHTML += card
//     })
// }

// getProducts(renderDateToHtml)


// const products = [{ name: 'abc', price: 120 },
// { name: 'abc', price: 120 },]

// callback function was in another function
// function getProduct(callBack) {
//     setTimeout(() => {
//         callBack(products)
//     }, 1000);
// }

// async function getProduct() {
//     const products = await fetch('https://ddasdsadsadummyjson.com/products')
//         .then(res => res.json())
//     return products
// }

// function renderHtml(arr) {
//     arr.forEach(element => {
//         const card = `<div class='card' >
//         <h4>${element.name} </h4>
//         <h4>${element.price} </h4>
//        </div>`
//         container.innerHTML += card
//     });
// }

// getProduct()
//     .then((data) => {
//         console.log('data from async->', data)
//     }).catch((err) => {
//         console.log('err from async->', err)
//     })


// ternary operator
// condition ? true : false
// function isEven(num) {
//     let isEven = num % 2 == 0 ? true : false

//     // if (num % 2 == 0) {
//     //     isEven = true
//     // }
//     return isEven
// }


// var version = document.getElementById('version').value

// // spread operator
// let obj = {
//     name: 'Moto',
//     price: 120
// }

// let obj1 = {
//     ...obj,
//     isNew: false,
//     version
// }
// console.log('obj=>', obj)
// console.log('obj1=>', obj1)







