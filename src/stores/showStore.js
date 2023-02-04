import axios from 'axios'
import { create } from 'zustand'

const showStore = create((set) => ({
    graphData: [],

    fetchData: async (id) => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=121`)

        const graphData = res.data.prices.map((price) => {
            const [timestamp, p] = price;
            const date = new Date(timestamp).toLocaleDateString("en-us")
            return {
                Date: date,
                Price: p,
            }
        })

        set({ graphData })
    }

}));

export default showStore