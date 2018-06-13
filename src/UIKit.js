import styled, { css } from 'styled-components';
import { isBrowser } from 'react-device-detect';

/*********
* COLORS *
*********/

const Colors = {
  primary: '#108c78',
  accent: '#3c0bff',
  error: '#d43f3f',
  white: '#fff',
  lightGrey: '#f2f2f2',
  midGrey: '#e2e2e2',
  darkGrey: '#333',
}

/*******
* TEXT *
*******/

// document base font size @ 1em == 10px
const TextBase = styled.p`
  line-height: 1.3em;
  color: ${Colors.darkGrey};
  margin: 0;
  padding: 0;
  ${props => props.link && css`
    text-decoration: underline;
    cursor: pointer;
  `}
  ${props => props.color && css`
    color: ${Colors[props.color]};
  `}
  ${props => props.upcase && css`
    text-transform: uppercase;
  `}
  ${props => props.paddingBottom && css`
    padding-bottom: ${props.paddingBottom} !important;
  `}
`;

const Logo = TextBase.extend`
  font-size: 2.4em;
  font-weight: bold;
  color: ${Colors.darkGrey};
`;

const Heading = TextBase.extend`
  font-size: 1.6em;
  font-weight: 600;
`;

const Text = TextBase.extend`
  font-size: 1.6em;
`;

/*************
* CONTAINERS *
*************/

const Container = styled.div`
  margin: ${ isBrowser ? '24px 100px' : '12px 12px' };
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
`;

const Row = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
`;

const Section = styled.div`
  border: 3px solid ${Colors.darkGrey};
  padding: 0;
  margin: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  padding: 12px;
  background: ${Colors.lightGrey};
  border-bottom: 3px solid ${Colors.darkGrey};
`;

const SectionBody = styled.div`
  flex: 1;
  padding: 12px;
  height: 100%;
  box-sizing: border-box;
  background: ${Colors.white};
`;

const CenteredSectionBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/*********
* BUTTON *
*********/

const Button = styled.button`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1.6em;
  background: ${Colors.accent};
  border: 3px solid ${Colors.darkGrey};
  padding: 8px 16px;
  margin: 4px 0;
  color: ${Colors.white};
  box-sizing: border-box;
  cursor: pointer;
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  ${props => props.disabled && css`
    background: ${Colors.midGrey};
    cursor: arrow;
  `}
`

/********
* FORMS *
********/

const StyledLabel = Text.withComponent('label').extend`
  font-size: 1.6em;
  display: inline-block;
`;

const StyledInput = styled.input`
  font-size: 1.6em;
  font-family: 'IBM Plex Mono', monospace;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${Colors.midGrey};
  border-radius: 4px;
  ${props => props.error && css`
    border: 1px solid ${Colors.error};
  `}
`;

const ErrorMessage = Text.extend`
  display: inline-block;
  font-size: 1.6em;
  color: ${Colors.error};
`;

export {
  Colors,
  Logo,
  Heading,
  Text,
  Container,
  Row,
  Section,
  SectionHeader,
  SectionBody,
  CenteredSectionBody,
  Button,
  StyledLabel,
  StyledInput,
  ErrorMessage,
};