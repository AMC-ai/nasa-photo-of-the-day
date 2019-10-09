// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import PhotoCard from "../NASAPhoto/PhotoCard";


// export default function qouteData() {
//     const [qData, setQData] = useState({});

//     useEffect(() => {
//         axios
//             .get(`http://quotes.rest/qod.json`)
//             .then(response => {
//                 console.log(response);
//                 setQData(response);
//             })
//             .catch(error => {
//                 console.log("the data was not return", error);
//             });
//     }, []);
//     return (
//         <div className="qouteOfTheDay">
//             {
//                 <PhotoCard
//                     qdata={qData}
//                 />
//             }
//         </div>
//     );
// }
