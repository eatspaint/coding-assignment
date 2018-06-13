import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import Emoji from 'react-emoji-render';

import {
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

  componentDidMount = () => {
    let rawHistory = localStorage.getItem('ongbel.history');
    if (rawHistory)
      this.setState({ history: JSON.parse(rawHistory) });
  }

  renderHistory = () => {
    if (this.state.history.length === 0) {
      return(
        <CenteredSectionBody>
          <Text>No history yet, fill out the form { isMobile ? 'above' : 'below' } to get started</Text>
        </CenteredSectionBody>
      )
    } else {
      return this.state.history.map( data => (
        <Text key={data.address} paddingBottom='8px'>{data.address}: {data.estimate} (expected ${data.expected})</Text>
      ))
    }
  }

  render() {
    return(
      <Section>

        <SectionHeader>
          <Heading>History <Emoji text='📓'/></Heading>
        </SectionHeader>

        <SectionBody>
          {this.renderHistory()}
        </SectionBody>

      </Section>
    )
  }
}

export default History;
