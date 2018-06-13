import React, { Component } from 'react';

import {
  StyledLabel,
  StyledInput,
  ErrorMessage,
} from './UIKit';

class ValidatedInput extends Component {
  render() {
    const { name, title, value, onChange, errorMsg } = this.props;
    const isValid = this.props.isValid || this.props.isValid === null; // initial state is null, avoids loading with errors prematurely

    return(
      <div style={{paddingBottom: '12px'}}>
        <div style={{paddingBottom: '4px'}}>
          <StyledLabel color={ isValid ? 'darkGrey' : 'error'}>{title}</StyledLabel>
          { !isValid && <ErrorMessage>&nbsp;({errorMsg})</ErrorMessage> }
        </div>
        <StyledInput name={name} value={value} onChange={onChange} error={!isValid}/>
      </div>
    )
  }
}

export default ValidatedInput;
