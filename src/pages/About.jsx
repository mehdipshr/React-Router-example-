import React from 'react';
import { useParams } from 'react-router-dom';

export default function About() {
  let shit = useParams();
  console.log(shit);
  return (
    <div>hello {shit.username} your id is {shit.id} and you are living in {shit.address}</div>
  )
}

// import React, {useState} from 'react'

// export default function Hooks() {
//     const [userName, insertUserName] = useState('mehdi');

//     const changeUser = () => {
//         insertUserName('sam');
//     };
//     return (
//         <div>
//             hooks say hello {userName}
//             <div>
//                 <button onClick={changeUser}>Click</button>
//             </div>
//         </div>
//     )
// }
