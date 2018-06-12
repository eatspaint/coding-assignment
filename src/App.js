import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import Instructions from './Instructions';
import History from './History';
import Data from './Data';
import Progress from './Progress';

import {
  Colors,
  Logo,
  Text,
  Container,
  Row,
} from './UIKit';

// Component specific styles
const Nav = styled.div`
  background: ${Colors.primary};
  padding: 16px;
  border-bottom: 1px solid ${Colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

class App extends Component {
  state = {
    // form data
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    expectedRent: '',
    // validation state
    firstNameIsValid: null,
    lastNameIsValid: null,
    emailIsValid: null,
    phoneIsValid: null,
    addressIsValid: null,
    // loader states
    loadingGoogleMaps: false,
    loadingRentZestimate: false,
    sendingEmail: false,
  };

  // TODO 4. Zillow API to calc Rent Zestimate, load into modal or something
  // TODO 5. user can enter expected rent, if varied from Zestimate
  // TODO 6. send information in email to user, along w/ IP address
  // TODO 7. localstore data

  render() {
    const {
      firstName, lastName, phone, email, address, expectedRent, // data
      firstNameIsValid, lastNameIsValid, emailIsValid, phoneIsValid, addressIsValid, // validations
      loadingGoogleMaps, loacingRentZestimate, sendingEmail // loading
    } = this.state;

    return (
      <div>

        <Nav>
          <Logo>Coding Assignment</Logo>
          <Text color='white' link>I've updated my privacy policy, please stop following me.</Text>
        </Nav>

        <BrowserView device={isBrowser}>
          <Container>
            <Row>
              <Instructions/>
              <History/>
            </Row>
            <Row>
              <Data
                firstName={firstName}
                lastName={lastName}
                phone={phone}
                email={email}
                address={address}
                expectedRent={expectedRent}
              />
              <Progress
                validators={[firstNameIsValid, lastNameIsValid, emailIsValid, phoneIsValid, addressIsValid]}
              />
            </Row>
          </Container>
        </BrowserView>

        <MobileView device={isMobile}>
          <Container>
            <Progress/>
            <Data/>
            <History/>
            <Instructions/>
          </Container>
        </MobileView>

      </div>
    );
  }
}

export default App;
