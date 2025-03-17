import { useState } from "react"

function ProductsList() {

    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ]

    const [addedProducts, setAddedProducts] = useState([])

    function addToCart(product) {
        const existingProduct = addedProducts.some(p => p.name === product.name)
        if (existingProduct) {
            return
        } else {
            setAddedProducts(curr => [...curr, { ...product, quantity: 1 }])
        }
    }

    return (
        <>
            <ul>
                {products.map((p, i) => (
                    <li key={i}>
                        <div className="list-body">
                            <h3>{p.name}</h3>
                            <p>{p.price.toFixed(2)}€</p>
                        </div>
                        <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
                    </li>
                ))}
            </ul>

            {addedProducts.length > 0 && (
                <>
                    <h1>Carrello</h1>
                    <ul>
                        {addedProducts.map((p, i) => (
                            <li key={i}>
                                <div className="list-body">
                                    <h4>{p.name}</h4>
                                    <p>{p.price.toFixed(2)}€</p>
                                    <p>Quantità: {p.quantity}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}

export default ProductsList