import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="bg-dark text-white text-center page-footer">
          <span className="text-light font-weight-bolder">
            &copy; Nibble Computer Society
          </span>
        </footer>
      </div>
    );
  }
}

export default Footer;
