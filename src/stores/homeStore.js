import axios from 'axios'
import { create } from 'zustand'
import debounce from '../helpers/debounce'

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: '',

  setQuery: (e) => {
    set({query: e.target.value})
    homeStore.getState().searchCoins()
  },

  searchCoins: debounce( async () => {
    const { query, trending } = homeStore.getState()
    if (query.length > 2 ) {
        const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
        const coins = res.data.coins.map(coins => {
            return {
                name: coins.name,
                image: coins.large,
                id: coins.id,
            }
        })
        set({coins});
    } else {
        set({coins: trending})
    }

  }, 500),

  fetchCoins: async () => {
    const [res, btcRes] = await Promise.all([
      axios.get(`https://api.coingecko.com/api/v3/search/trending`),
      axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`)
    ])


    const coins = res.data.coins.map(coins => {
        return {
            name: coins.item.name,
            image: coins.item.large,
            id: coins.item.id,
            princeBtc: coins.item.price_btc
        }
    })
    set({coins, trending: coins})
  }
}))

export default homeStore