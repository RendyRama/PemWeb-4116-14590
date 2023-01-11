const product = [
    {
        id: 0,
        image: 'image/ip14.jpg',
        title: 'Iphone 14 Pro',
        price: 1000,
    },
    {
        id: 1,
        image: 'image/ip13mini.png',
        title: 'Iphone 13 Mini',
        price: 870,
    },
    {
        id: 2,
        image: 'image/sams1.jpg',
        title: 'Samsung S21',
        price: 699,
    },
    {
        id: 3,
        image: 'image/sams2.webp',
        title: 'Samsung S21 Ultra',
        price: 800,
    },
    {
        id: 4,
        image: 'image/poco1.png',
        title: 'Poco F4 GT',
        price: 500,
    },
    {
        id: 5,
        image: 'image/poci2.png',
        title: 'Poco F4',
        price: 479,
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
