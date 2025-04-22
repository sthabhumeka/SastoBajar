// import {useEffect, useState} from "react";
// import axios from "axios";
// function fetchData() {
    

// //   axios automatically need to download
// useEffect(() => {
//     axios.get("https:/datausa.io/api/data?drilldowns=Nation&measures=Population")
//     .then((response) => console.log(response))
//     .then((data) => console.log(data))
//     .catch(error=>console.log(error))
// })
// // fecth manaually 

// const [data, setData] = useState(null);
//  useEffect(() => {
//      fetch("https:/datausa.io/api/data?drilldowns=Nation&measures=Population")
//     .then((response) => response.json())
//     .then((data) => setData(data.data))
//     .catch(error=>console.log(error))
// },[])
// console.log("data",data)
// const result=data.data[0]
// console.log("result",result)
// return(
//     <div>
//         <h1>{data}</h1>
//         <h2>{result.Nation}</h2>
//         <h2>{result.Population}</h2>
//         <h2>{result.Year}</h2>
//         <table>
//             <thead>
//                 <tr>
//                     <th style={style.th}>Year</th>
//                     <th style={style.th}>Population</th>
//                     <th style={style.th}>Nation</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {data.map((item, index) => (
//                 <tr key={index}>
//                     <td>{item.Year}</td>
//                     <td>{item.Population}</td>
//                     <td>{item.Nation}</td>)}
//                 </tr>              
//             </tbody>
//         </table>
//     </div>
// )
// }
// export default fetchData


