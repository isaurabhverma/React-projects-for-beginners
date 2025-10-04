import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../data/products'
import { addToCart, selectCartItems } from '../store/cartSlice'

export default function Products() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const grouped = useMemo(() => {
    const map = {}
    for (const p of products) {
      if (!map[p.category]) map[p.category] = []
      map[p.category].push(p)
    }
    return map
  }, [])

  return (
    <div className="container">
      <h2>Houseplants</h2>
      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="category-section">
          <h3>{category}</h3>
          <div className="grid">
            {items.map((plant) => {
              const inCart = Boolean(cartItems[plant.id])
              return (
                <div key={plant.id} className="card">
                  <img src={plant.image} alt={plant.name} className="thumb" />
                  <div className="card-body">
                    <div className="title-row">
                      <h4>{plant.name}</h4>
                      <span className="price">${plant.price.toFixed(2)}</span>
                    </div>
                    <button
                      className="btn"
                      disabled={inCart}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {inCart ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}


