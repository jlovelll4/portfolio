import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="header">
        <h2>CONTACT ME</h2>
        <div className="div--divider" />
        <br />

        <div style={{width: "20vw", height: "20vh", border: "solid 2px olive"}}>
          <form action="">
            <input type="text" placeholder="name" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
