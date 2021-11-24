import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '83c9c34874msha62ac7e46c852a7p1f3464jsn33b7f23e7546'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'; 

const createRequest = (url) => ({url, headers: cryptoApiHeaders})
export const cryptoApi = createApi({
     reducerPath: 'cryptoApi',
     baseQuery: fetchBaseQuery({baseUrl}),
     endpoints: (builder) => ({
         getCryptos: builder.query({
             query: (count) => createRequest(`/coins?limit=${count}`),
         }),
         getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
         getCryptoDetails: builder.query({
             query: (coinId) => createRequest(`/coin/${coinId}`),
         }),
         getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
          }),
     })
}); 

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,  useGetExchangesQuery  } = cryptoApi;
// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/stats',
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '83c9c34874msha62ac7e46c852a7p1f3464jsn33b7f23e7546'
//   }
// }; 