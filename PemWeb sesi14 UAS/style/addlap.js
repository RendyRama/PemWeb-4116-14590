const product = [
    {
        id: 0,
        image: 'image/mac1.png',
        title: 'Macbook M1',
        price: 1000,
    },
    {
        id: 1,
        image: 'image/mac2.jpeg',
        title: 'Macbook Pro M1',
        price: 870,
    },
    {
        id: 2,
        image: 'image/tuf1.png',
        title: 'Asus TUF Gx1650 GT',
        price: 950,
    },
    {
        id: 3,
        image: 'image/tuf2.png',
        title: 'Asus TUF A15',
        price: 399,
    },
    {
        id: 4,
        image: 'image/len1.png',
        title: 'Lenovo Ultrabook',
        price: 499,
    },
    {
        id: 5,
        image: 'image/legi.png',
        title: 'Legion Slim 7',
        price: 899,
    }

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<main class='box'>
        <main class='img-box'>
        <img class='images' src=${image}></img>
        </main>
        <main class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Tambah ke Keranjang</button>"+
        `</main>
        </main>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
let j = 0, total=0;
document.getElementById("count").innerHTML=cart.length;

if (cart.length==0){
    document.getElementById('cartItem').innerHTML = "Keranjangmu kosong";
    document.getElementById("total").innerHTML = "$ "+0+".00";
}
else{
    document.getElementById("cartItem").innerHTML = cart.map((items)=>
    {
        var {image, title, price} = items;
        total=total+price;
        document.getElementById("total").innerHTML = "$ "+total+".00";
        return(
            `<main class='cart-item'>
            <main class='row-img'>
                <img class='rowimg' src=${image}>
            </main>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></main>"
            );
        }).join('');
    }
}
