import React, { Component } from 'react';
import styled from 'styled-components';
import Emoji from 'react-emoji-render';

import {
  Heading,
  Text,
  Section,
  SectionHeader,
  SectionBody,
  Button,
  StyledInput,
} from './UIKit';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
`;

const ModalContainer = styled.div`
  max-width: 700px;
  flex: 1;
  box-sizing: border-box;
`;

const BigText = Text.extend`
  font-size: 3.8em;
  font-weight: bold;
  padding-bottom: 16px;
  padding-top: 8px;
`

class Modal extends Component {
  constructor(props) {
    super(props);
    let estimateInt = parseInt(this.props.rentEstimate, 10);
    this.state = {
      estimateMin: estimateInt - (estimateInt * 0.1),
      estimateMax: estimateInt + (estimateInt * 0.1),
      expected: null,
    }
  }
  onBackgroundClick = () => {
    this.props.onBackgroundClick();
  }

  saveResult = () => {
    let rawHistory = localStorage.getItem('ongbel.history');
    let history = rawHistory ? JSON.parse(rawHistory) : [];
    history.push({
      address: this.props.address,
      estimate: `$${this.state.estimateMin} to $${this.state.estimateMax}`,
      expected: this.state.expected,
    });
    localStorage.setItem('ongbel.history', JSON.stringify(history));
    this.onBackgroundClick();
  }

  handleChange = ({ target: {value} }) => { this.setState({expected: value}) };

  render() {
    const { address } = this.props;
    return(
      <ModalBackground onClick={this.onBackgroundClick}>
        {/* prevent modal content clicks from dismissing */}
        <ModalContainer onClick={(e) => {e.stopPropagation()}}>
          <Section>

            <SectionHeader>
              <Heading>Got it! <Emoji text='🎉'/></Heading>
            </SectionHeader>

            <SectionBody>
              <Text>Rent Estimate for:</Text>
              <BigText>{address}</BigText>
              <Text>Monthly Amount:</Text>
              <BigText>${this.state.estimateMin} to ${this.state.estimateMax}</BigText>
              <Text>Thinking something else? Enter your expected rent here:</Text>
              <StyledInput style={{margin: '16px 0', fontSize: '3.8em', fontWeight: 'bold'}} value={this.state.expected} onChange={this.handleChange}/>
              <Button fullWidth style={{marginBottom: 0}} onClick={this.saveResult}>Save!</Button>
            </SectionBody>

          </Section>
        </ModalContainer>
      </ModalBackground>
    )
  }
}

export default Modal;
