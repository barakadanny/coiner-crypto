import axios from 'axios'
import { create } from 'zustand'

const homeStore = create((set) => ({
  coins: [],
  query: '',

  setQuery: (e) => {
    set({query: e.target.value})
    homeStore.getState().searchCoins()
  },

  searchCoins: async () => {
    const { query } = homeStore.getState()
    const res = await axios.get('https://api.coingecko.com/api/v3/search?query=${query}')
    // const res = await axios.get('https://api.coingecko.com/api/v3/search?query=${query}&per_page=100&page=1&sparkline=false')
    console.log(res)
    // const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(query.toLowerCase()))
    // set({coins: filteredCoins})
  },

  fetchCoins: async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')

    const coins = res.data.coins.map(coins => {
        return {
            name: coins.item.name,
            image: coins.item.large,
            id: coins.item.id,
            princeBtc: coins.item.price_btc
        }
    })
    set({coins})
  }
}))

export default homeStore