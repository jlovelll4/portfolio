import React from "react";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <header className="header">
      <h2> Hello.</h2>
      <h2>I am </h2>
      <h2>James</h2>
      <h4>Lovell.</h4>
      <h2>I am a full-stack web developer | GIS developer.</h2>
      <div >
        <Link className="page-link" to='/projects'>View my work &rarr;</Link>
      </div>
    </header>
  );
}

export default Home;
