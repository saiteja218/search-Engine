let data=[];

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                data=json;
                console.log(data)
            })


document.getElementById('input').addEventListener('keyup',()=>{
    inp=document.getElementById('input').value;
    console.log(inp);
    searched=[];
    searched=data.filter((prod)=>{
        if(String(prod.title).includes(inp)){
          return String( prod.title);
        //   return String( prod.title);
        
        }
    })
    // console.log(searched);
    renderProducts(searched);
})

function renderProducts(products){
    document.querySelectorAll(".result").forEach(Product => {
        Product.remove();
    });

    products.forEach(product=>{
        renderSingleProduct(product)
    })
    
}

parent=document.querySelector(".results");

function renderSingleProduct(product){
    let divv=document.createElement('div')
    divv.className="result" 
    img=document.createElement('img')
    pname=document.createElement('h5')
    amt=document.createElement('p')
    btn=document.createElement('button')

    img.src=product.image;
    img.style.height="100px"
    img.style.width="80x"
    pname.innerText=product.title;
    amt.innerText="price "+product.price;
    btn.innerText="purchase";
    
    divv.append(img)
    divv.append(pname)
    divv.append(amt)
    divv.append(btn)
    
    parent.appendChild(divv)

}