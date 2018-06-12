import React from 'react';
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
} from './UIKit';

const StyledLi = Text.withComponent('li').extend`
  padding: 4px 0;
`;

const Instructions = () => (
  <Section>

    <SectionHeader>
      <Heading>Instructions <Emoji text='🤓'/></Heading>
    </SectionHeader>

    <SectionBody>
      <ol style={{margin: 0, paddingLeft: '32px'}}>
        <StyledLi>Enter your information in the form { isMobile ? 'above' : 'below' }.</StyledLi>
        <StyledLi>Retrieve your estimate and add your own expected rent.</StyledLi>
        <StyledLi>Save your results.</StyledLi>
        <StyledLi>Repeat as often as you like! Data is only stored in your browser and never on our servers.</StyledLi>
      </ol>
    </SectionBody>

  </Section>
)

export default Instructions;
