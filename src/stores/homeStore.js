import axios from 'axios'
import { create } from 'zustand'

const homeStore = create((set) => ({
  fetchCoins: async () => {
    const res = axios.get('https://api.coingecko.com/api/v3/search/trending')
    console.log(res)
  }
}))

export default homeStore