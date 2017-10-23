import React, {Component} from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

import colors from "../../style/colors";
import {darken, invert} from "polished";


class Buttontest extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {onPress, className, text, type} = this.props;
    return(
        <button className={className} onClick={onPress.bind(this)}>
          {text}
        </button>
    );
  }
}

Buttontest.PropTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

Buttontest.defaultProps = {
  text: "Button",
  bgColor: "#FFFFFF",
  textColor: "#000000"
}

export default styled(Buttontest)`
  color: ${({textColor}) => colors[textColor]};
  background: ${({bgColor}) => colors[bgColor]};
  padding: 8px;
  border: none;
  pointer: cursor;
    &:hover{
      background: ${({bgColor}) => darken(0.2,colors[bgColor])};
    }
    &:active{
      border: none;
      color: ${({textColor}) => invert(colors[textColor])};
    }
    &:focus{
      outline: 0;
    }
`;
