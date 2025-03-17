import { useState } from "react"

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ]

  const [addedProducts, setAddedProducts] = useState([])

  function addToCart(product) {
    const addedProduct = addedProducts.find(p => p.name === product.name)
    if (addedProduct) {
      updateProductQuantity(addedProduct.name, addedProduct.quantity + 1)
    } else {
      setAddedProducts(curr => [...curr, { ...product, quantity: 1 }])
    }
  }

  function removeFromCart(product) {
    setAddedProducts(curr => curr.filter(p => p.name !== product.name))
  }

  function updateProductQuantity(name, quantity) {
    setAddedProducts(curr => curr.map(p => p.name === name ? { ...p, quantity } : p))
  }

  const totalPrice = addedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0)

  return (
    <>
      <section className="products-list">
        <h1>Lista Prodotti</h1>
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
      </section>

      {addedProducts.length > 0 && (
        <section className="cart">
          <h1>Carrello</h1>
          <ul>
            {addedProducts.map((p, i) => (
              <li key={i}>
                <div className="list-body">
                  <h4>{p.name}</h4>
                  <p>{p.price.toFixed(2)}€</p>
                  <p>Quantità: {p.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(p)}>Rimuovi</button>
              </li>
            ))}
          </ul>
          <h3>Totale da pagare: {totalPrice.toFixed(2)}€</h3>
        </section>
      )}
    </>
  )
}

export default App