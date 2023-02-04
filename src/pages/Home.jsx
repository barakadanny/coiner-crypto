import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import homeStore  from '../stores/homeStore'

function Home() {
    const store = homeStore()
    useEffect(() => {
        store.fetchCoins()
    }, [])
  return (
    <div>
        <input type="text" value={store.query} onChange={store.setQuery} />
      {store.coins.map(coin => {
        return (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>
                <h1>{coin.name}</h1>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Home
