import React, { Component } from 'react';
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

import {
  Colors,
  Logo,
  Heading,
  Text,
  Section,
  SectionHeader,
  SectionBody,
  CenteredSectionBody,
} from './UIKit';

class History extends Component {
  state = {
    history: [],
  };

  // TODO load localstore data into history

  renderHistory = () => {
    if (this.state.history.length === 0) {
      return(
        <CenteredSectionBody>
          <Text>No history yet, fill out the form { isMobile ? 'above' : 'below' } to get started</Text>
        </CenteredSectionBody>
      )
    } else {
      return <Text>TODO: Build history</Text>
    }
  }

  render() {
    return(
      <Section>

        <SectionHeader>
          <Heading>History</Heading>
        </SectionHeader>

        <SectionBody>
          {this.renderHistory()}
        </SectionBody>

      </Section>
    )
  }
}

export default History;
