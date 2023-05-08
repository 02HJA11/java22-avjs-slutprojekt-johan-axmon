export default function Product({img, name, price, stock}){
    return(
        <>
        <div className="product-card">
<img src={img}></img>
<h2>{name}</h2>
<h4>{price} :-</h4>
<p>In stock: {stock}</p>
<button>Lägg i varukorg</button>
        </div>
        </>
    )
}