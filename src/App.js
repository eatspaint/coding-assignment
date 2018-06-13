import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Emoji from 'react-emoji-render';
import validator from 'validator';

import Instructions from './Instructions';
import History from './History';
import Data from './Data';
import Progress from './Progress';
import Modal from './Modal';

import {
  Colors,
  Logo,
  Text,
  Container,
  Row,
} from './UIKit';

// Component specific styles
const Nav = styled.div`
  ${'' /* background: ${Colors.primary}; */}
  padding: 16px;
  border-bottom: 3px solid ${Colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // form data
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
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
      // modal state
      modalIsOpen: false,
      // zestimate
      rentEstimate: '3980'
    }
    this.validators = {
      firstName: this.validateNotBlank,
      lastName: this.validateNotBlank,
      phone: this.validatePhone,
      email: this.validateEmail,
      address: this.validateNotBlank,
    }
    this.onValidatedInputChange = this.onValidatedInputChange.bind(this);
  }

  // TODO 3. gather user address, autocomplete w/ Google Maps || set error if invalid
  // TODO 4. Zillow API to calc Rent Zestimate
  // TODO 6. send information in email to user, along w/ IP address

  closeModal = () => { this.setState({ modalIsOpen: false }) };

  onValidatedInputChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value, [`${name}IsValid`]: this.validators[name](value) });
  }
  onAddressInputChange = (value) => {
    this.setState({ address: value, addressIsValid: this.validators.address(value) });
  }

  // VALIDATORS
  validateNotBlank = (value) => { return value !== null && value.length > 0 };
  validateEmail = (value) => { return value !== null && validator.isEmail(value) };
  validatePhone = (value) => { return value !== null && validator.isMobilePhone(validator.blacklist(value, '\\.\\-\\(\\)'), 'en-US') };

  // ESTIMATE
  calculateEstimate = () => {
    this.setState({modalIsOpen: true});
  }

  render() {
    const {
      firstName, lastName, phone, email, address, // data
      firstNameIsValid, lastNameIsValid, emailIsValid, phoneIsValid, addressIsValid, // validations
      // loadingGoogleMaps, loadingRentZestimate, sendingEmail, // loading
      modalIsOpen, // modal
      rentEstimate, // zestimate
    } = this.state;

    const userData = [
      { name: 'firstName', title: 'First Name', value: firstName, isValid: firstNameIsValid, onChange: this.onValidatedInputChange, errorMsg: 'Cannot be blank'},
      { name: 'lastName', title: 'Last Name', value: lastName, isValid: lastNameIsValid, onChange: this.onValidatedInputChange, errorMsg: 'Cannot be blank'},
      { name: 'phone', title: 'Phone', value: phone, isValid: phoneIsValid, onChange: this.onValidatedInputChange, errorMsg: 'Please enter a valid US phone number'},
      { name: 'email', title: 'Email', value: email, isValid: emailIsValid, onChange: this.onValidatedInputChange, errorMsg: 'Please enter a valid email address'},
      { name: 'address', title: 'Address', value: address, isValid: addressIsValid, onChange: this.onAddressInputChange, errorMsg: 'Please enter a valid address'},
    ]

    const validations = [firstNameIsValid, lastNameIsValid, emailIsValid, phoneIsValid, addressIsValid];
    const total = validations.length;
    const completion = validations.filter( validation => (validation === true) ).length;

    return (
      <div>

        <Nav>
          <Logo>Ongbel <Emoji text='🏘️'/></Logo>
          { isBrowser && <Text color='primary' link>I've updated my privacy policy, please stop following me.</Text> }
        </Nav>

        <BrowserView device={isBrowser}>
          <Container>
            <Row>
              <Instructions/>
              <History/>
            </Row>
            <Row>
              <Data userData={userData} submitEnabled={total === completion} calculateEstimate={this.calculateEstimate}/>
              <Progress total={total} completion={completion}/>
            </Row>
          </Container>
        </BrowserView>

        <MobileView device={isMobile}>
          <Container>
            <Progress total={total} completion={completion}/>
            <Data userData={userData} submitEnabled={total === completion} calculateEstimate={this.calculateEstimate}/>
            <History/>
            <Instructions/>
          </Container>
        </MobileView>

        { modalIsOpen &&
          <Modal onBackgroundClick={this.closeModal} address={address} rentEstimate={rentEstimate}/>
        }

      </div>
    );
  }
}

export default App;
