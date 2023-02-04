import axios from 'axios'
import { create } from 'zustand'

const homeStore = create((set) => ({
  coins: [],

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