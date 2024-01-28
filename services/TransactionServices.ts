import { Transactions } from "@/pages/api/transactions";

const api = "https://jsonplaceholder.typicode.com/";

const axios = require('axios');
// type Post = {
//   userId: number;
//   id:number;
//   title: string;
//   body: string;
// }

type Response ={
  data: Transactions[]
}

export const getTransactions = async () =>
 axios.post(`/api/transactions`)
   .then(({data}:Response) => 
    data
   )
   .catch( (error:any) =>{
     console.log(error);
   })

// export const getTransactions = async () =>
//  axios.get(`${api}/posts`)
//    .then(({data}:Response) => 
//     data
//    )
//    .catch( (error:any) =>{
//      console.log(error);
//    })
