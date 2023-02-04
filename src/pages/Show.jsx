import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Show() {
  const store = showStore()
  const params = useParams()

  useEffect(() => {
    store.fetchData(params.id)
  }, [])

  if (!store) return <></>

  return (
    <div>
      <header>
         <img src={store.imageLarge} alt="" />
        <h2>{store.name} ({store.symbol})</h2>
      </header>
      <AreaChart
          width={500}
          height={400}
          data={store.graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <div>
          <h3>Market Cap</h3>
          <p>{store.market_Cap_rank}</p>
        </div>
        <div>
          <h3>24h high</h3>
          <p>${store.high24h}</p>
        </div>
        <div>
          <h3>24h low</h3>
          <p>${store.low24h}</p>
        </div>
        <div>
          <h3>Circulating supply</h3>
          <p>${store.circulatingSupply}</p>
        </div>
        <div>
          <h3>Current Price</h3>
          <p>${store.currentPrice}</p>
        </div>
        <div>
          <h3>1y change</h3>
          <p>${store.priceChangePercentage}%</p>
        </div>
    </div>
  )
}

export default Show
