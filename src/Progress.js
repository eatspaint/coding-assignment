import React from 'react';
import styled from 'styled-components';

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

const Progress = ( {validators} ) => {

  // TODO calc percentage of completion based on validators prop

  const total = validators.length;
  const completion = validators.filter( validator => (validator === true) ).length;

  return(
    <Section>

      <SectionHeader>
        <Heading>Progress</Heading>
      </SectionHeader>

      <SectionBody>
        <CenteredSectionBody>
          <Text>{completion} of {total}</Text>
        </CenteredSectionBody>
      </SectionBody>

    </Section>
  )
}

export default Progress;
