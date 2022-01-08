import React from "react";
import listImage from "../image/listImage.svg";

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = "style-btn";
    if (this.props.exClass) {
      let tempClass = this.props.exClass;
      className += " ";
      className += tempClass;
    }
    // if(this.props.label === 'H3'){
    //   this.props.label = <h3>{this.props.label}</h3>;
    // }
    if (this.props.active) {
      className += " style-btn-active";
    }

    if (this.props.label === "UL") {
      return (
        <button className={className} onMouseDown={this.onToggle}>
          <img className='change-my-color' src={listImage} alt='UL' srcset='' />
        </button>
      );
    } else {
      return (
        <button className={className} onMouseDown={this.onToggle}>
          {this.props.label}
        </button>
      );
    }
  }
}

export default StyleButton;
