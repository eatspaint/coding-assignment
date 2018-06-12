import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Colors,
  Text,
} from './UIKit';

const StyledLabel = Text.withComponent('label').extend`
  display: block;
`;

const StyledInput = styled.input`
  font-size: 1.6em;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${Colors.midGrey};
  border-radius: 4px;
`;

class ValidatedInput extends Component {

  // TODO run validator from props

  render() {
    const { name, value } = this.props;
    return(
      <div style={{padding: '4px 0'}}>
        <StyledLabel paddingBottom='4px'>{name}</StyledLabel>
        <StyledInput value={value} />
      </div>
    )
  }
}

export default ValidatedInput;
