import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

// export default About;
// import React from 'react'
// import logo from "../assets/logo.js"

// const About = ({image = logo, about }) => {
//   return (
//     <aside>
//         <img src={image} alt="logo" />
//         <p>{about}</p>
//     </aside>
//   );
// }

// export default About;

// import React from 'react';

// const About = ({ image = "https://via.placeholder.com/215", about }) => {
//   return (
//     <aside>
//         <img src={image} alt="logo" />
//         <p>{about}</p>
//     </aside>
//   );
// }

export default About;