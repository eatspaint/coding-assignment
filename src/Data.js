import React, { Component } from 'react';
import styled from 'styled-components';
import Emoji from 'react-emoji-render';

import ValidatedInput from './ValidatedInput';

import {
  Colors,
  Logo,
  Heading,
  Text,
  Section,
  SectionHeader,
  SectionBody,
  Button,
} from './UIKit';

class Data extends Component {

  // TODO move state for this component from App, unless I can justify leaving it in App, feels like way too many props otherwise, and too much coupling w/ App

  // TODO 1. gather user info & set parent state accordingly
  // TODO 2. perform email/phone validations here & set parent state accordingly || set error if invalid
  // TODO 3. gather user address, autocomplete w/ Google Maps || set error if invalid

  render() {
    const { firstName, lastName, phone, email, address, expectedRent } = this.props;

    return(
      <Section>

        <SectionHeader>
          <Heading>Data <Emoji text='🔍'/></Heading>
        </SectionHeader>

        <SectionBody>
          <ValidatedInput name='First Name' value={firstName} />
          <ValidatedInput name='Last Name' value={lastName} />
          <ValidatedInput name='Phone' value={phone} />
          <ValidatedInput name='Email' value={email} />
          <ValidatedInput name='Address' value={address} />
          <ValidatedInput name='Expected Rent' value={expectedRent} />
          <Button fullWidth disabled style={{marginBottom: 0}}>Find my rent estimate!</Button>
        </SectionBody>

      </Section>
    )
  }
}

export default Data;
