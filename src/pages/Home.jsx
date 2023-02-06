import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import homeStore  from '../stores/homeStore'
import Header from '../components/Header'

function Home() {
    const store = homeStore()
    useEffect(() => {
        store.fetchCoins()
    }, [])
  return (
    <div>
      <Header />
      <div className='banner bg-gray-200'>
        <div className="text-center py-8 || content custom-maxWidth">
          <h1 className='text-2xl mb-2 lg:text-5xl text-center'>
            Drive your crypto investments to success<br/> with our  real-time tracking app.
          </h1>
          <p className='mb-6'>
            Track crypto prices in real-time with our user-friendly app. 
            Get market insights, set alerts, and stay informed on latest developments.<br/>  
            Take control of your investments and achieve financial goals.
          </p>
          <div className='search'>
          <span className='block text-gray-700 font-bold mb-2'>Search crypto: </span>
            <input className='bg-gray-100 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 max-w-lg' type="text" value={store.query} onChange={store.setQuery} />
          </div>
        </div>
      </div>
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
