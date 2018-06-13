import React from 'react';
import Emoji from 'react-emoji-render';

import {
  Heading,
  Text,
  Section,
  SectionHeader,
  SectionBody,
  CenteredSectionBody,
} from './UIKit';

const Progress = ( {completion, total} ) => {

  let progress = Array(total).fill().map( (_, i) => {
    if (completion === total)
      return <Emoji text='🔥' key={i}/>
    else if (i + 1 <= completion)
      return <Emoji text='💰' key={i}/>
    else
      return <Emoji text='...' key={i}/>
  } );

  return(
    <Section>

      <SectionHeader>
        <Heading>Progress <Emoji text='💬'/></Heading>
      </SectionHeader>

      <SectionBody>
        <CenteredSectionBody>
          <Text style={{fontSize: '3.6em'}}>{ progress }</Text>
        </CenteredSectionBody>
      </SectionBody>

    </Section>
  )
}

export default Progress;
