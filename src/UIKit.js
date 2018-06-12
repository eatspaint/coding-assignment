import styled, { css } from 'styled-components';
import { isBrowser } from "react-device-detect";

/*********
* COLORS *
*********/

const Colors = {
  primary: '#108C78',
  white: '#eee',
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
`

const Logo = TextBase.extend`
  font-size: 2.4em;
  font-weight: 600;
  color: ${Colors.white};
`

const Heading = TextBase.extend`
  font-size: 1.6em;
  font-weight: 600;
`

const Text = TextBase.extend`
  font-size: 1.6em;
`

/*************
* CONTAINERS *
*************/

const Container = styled.div`
  margin: ${ isBrowser ? '24px 100px' : '12px 12px' };
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
`

const Row = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
`

const Section = styled.div`
  border: 1px solid ${Colors.midGrey};
  border-radius: 4px;
  padding: 0;
  margin: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const SectionHeader = styled.div`
  padding: 12px;
  background: ${Colors.lightGrey};
  border-bottom: 1px solid ${Colors.midGrey};
  border-radius: 4px 4px 0 0;
`

const SectionBody = styled.div`
  flex: 1;
  padding: 12px;
  height: 100%;
  box-sizing: border-box;
`

const CenteredSectionBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
}