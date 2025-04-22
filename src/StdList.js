// import React, { useState } from 'react';
// function StdList(){
   
//     const [arr, setArr] =  useState([]);
//     const [name, setName] = useState('');

//     const arr_set = () => {
//         setArr([...arr, name]);
//         setName('');
//     }
//     return(
//         <div>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
//             <button onClick={arr_set}>Add</button>
//             <ul>
//                 {arr.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// };

// export default StdList;

import React, { useEffect, useState } from "react";

function StdList() { 
    const names = ["yoena", "kim", "cookie","hari"]; // Array of names 
    const [selectedName, setSelectedName] = useState("");

    useEffect(() => { 
        if (selectedName === "yeona") { 
            console.log("yeona"); 
        } 
    }, [selectedName]); // Effect only runs when 'selectedName' is "Swastika"

    return ( 
        <div> 
            <h1>Select a Name</h1> 
            <ul> 
                {names.map((name, index) => ( 
                    <li key={index} onClick={() => setSelectedName(name)}> 
                    {name} 
                    </li> 
                ))} 
            </ul> 
            <p>Selected Name: {selectedName}</p> 
        </div> 
    ); 
}

export default StdList;