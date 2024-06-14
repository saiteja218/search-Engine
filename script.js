import algoliasearch from "algoliasearch";

const client = algoliasearch("J755TTVDL1", "01bfeb3c35071ce3e812b9c3de70f2ff");
const index = client.initIndex("search");

let data=[];


// index
//   .search("Men")
//   .then(({ hits }) => {
//     console.log(hits);
//   })
//   .catch(err => {
//     console.log(err);
//   });



// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>{
//                 data=json;
//                 console.log(data)
//             })


document.getElementById('input').addEventListener('keyup',()=>{
    var inp=document.getElementById('input').value;
    // console.log(inp);
    // var searched=[];
    // searched=data.filter(product=>{
    //     if(product.title.includes(String(inp))){

    //         return product;
    //     }
    // })
    if(String(inp).trim().length>0){
        index.search(inp).then(response=>{
            // console.log(response)
            renderProducts(response.hits)
    // renderProducts(searched);
        })
        

        
    }
    else{
       removeElements();
    }
})



function renderProducts(products){
    removeElements();

    products.forEach(product=>{
        renderSingleProduct(product)
    })
    
}

function removeElements(){
    document.querySelectorAll(".result").forEach(Product => {
        Product.remove();
    });
}

parent=document.querySelector(".results");

function renderSingleProduct(product){
    let divv=document.createElement('div')
    divv.className="result" 
    var imgg=document.createElement('img')
    var pname=document.createElement('h5')
    var amt=document.createElement('p')
    var btn=document.createElement('button')

    imgg.src=product.image;
    imgg.style.height="100px"
    imgg.style.width="80x"
    pname.innerText=product.title;
    amt.innerText="price "+product.price;
    btn.innerText="purchase";
    
    divv.append(imgg)
    divv.append(pname)
    divv.append(amt)
    divv.append(btn)
    
    parent.appendChild(divv)

}