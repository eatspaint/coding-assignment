import React, { Component } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import Emoji from 'react-emoji-render';

import {
  Colors,
  Logo,
  Heading,
  Text,
  Section,
  SectionHeader,
  SectionBody,
  CenteredSectionBody,
  Button,
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

class Modal extends Component {

  onBackgroundClick = () => {
    this.props.onBackgroundClick();
  }

  render() {
    return(
      <ModalBackground onClick={this.onBackgroundClick}>
        <ModalContainer>
          <Section>

            <SectionHeader>
              <Heading>Got it! <Emoji text='🎉'/></Heading>
            </SectionHeader>

            <SectionBody>
              <Text>User Data</Text>
              <Text>Results</Text>
              <Text>Expected Rent</Text>
              <Button fullWidth style={{marginBottom: 0}}>Save!</Button>
            </SectionBody>

          </Section>
        </ModalContainer>
      </ModalBackground>
    )
  }
}

export default Modal;
