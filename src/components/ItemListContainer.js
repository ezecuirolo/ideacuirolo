import React from 'react';
const Welcome = ({ mensaje }) => {
    return (
      <section className="welcome">       
          <h4>{mensaje}</h4>
      </section>
    );
  };  
export default Welcome;