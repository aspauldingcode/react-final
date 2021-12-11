// // Not working yet, was planning to split "Post User" Button functionality off of CrudAPI.js Component..




// import React from "react";

// export default class CreateCrud {
//     return (
//         postData() = {
//             const data = {
//                 name: this.state.Name,
//                 username: this.state.Username
//             };
//             console.log(data);
//             console.log(this.props.CrudRESTENDPOINT);
//             (async () => {
//                 const rawResponse = await fetch(this.props.CrudRESTENDPOINT + '/username', {
//                     method: 'POST',
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(data)
//                 });
//                 const content = await rawResponse.json();
    
//                 console.log(content);
//                 this.fetchData();
//             })()
//         }
//     );
// }
