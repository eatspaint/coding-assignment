import React, { Component } from 'react';
import Emoji from 'react-emoji-render';
import PlacesAutocomplete from 'react-places-autocomplete';

import ValidatedInput from './ValidatedInput';

import {
  Heading,
  Text,
  Section,
  SectionHeader,
  SectionBody,
  Button,
  StyledInput,
  StyledLabel,
  ErrorMessage,
} from './UIKit';

class Data extends Component {

  renderValidatedInputs = () => (
    this.props.userData.map( data => {
      if (data.name === 'address') {
        let isValid = data.isValid || data.isValid === null;
        return(
          <PlacesAutocomplete
            key={data.name}
            value={data.value}
            onChange={data.onChange}
            debounce={500}
            searchOptions={{types: ['address']}}
            shouldFetchSuggestions={data.value.length >= 3}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <div style={{paddingBottom: '12px'}}>

                <div style={{paddingBottom: '4px'}}>
                  <StyledLabel color={ isValid ? 'darkGrey' : 'error'}>{data.title}</StyledLabel>
                  { !isValid && <ErrorMessage>&nbsp;({data.errorMsg})</ErrorMessage> }
                </div>

                {/* if Places API is active, getInputProps() returns spreadable props to apply to input */}
                <StyledInput {...getInputProps()} />

                <div>
                  {suggestions.map(suggestion => (
                    // if Places API is active, getSuggestionItemProps() returns spreadable props for a suggestion item
                    // EXAMPLE of Suggestion item data
                    // {
                    //   active: false,
                    //   description: "San Francisco, CA, USA",
                    //   formattedSuggestion: { mainText: "San Francisco", secondaryText: "CA, USA" },
                    //   id: "1b9ea3c094d3ac23c9a3afa8cd4d8a41f05de50a",
                    //   index: 0,
                    //   matchedSubstrings: [ {length: 8, offset: 0} ],
                    //   placeId: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                    //   terms: [
                    //     { offset: 0, value: "San Francisco" },
                    //     { offset: 15, value: "CA" },
                    //     { offset: 19, value: "USA" }
                    //   ],
                    //   types: ["locality", "political", "geocode"]
                    // }
                    <div {...getSuggestionItemProps(suggestion)}>
                      <Text>{suggestion.description}</Text>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </PlacesAutocomplete>
        )
      } else {
        return(
          <ValidatedInput
            key={data.name}
            name={data.name}
            value={data.value}
            title={data.title}
            onChange={data.onChange}
            isValid={data.isValid}
            errorMsg={data.errorMsg}
          />
        )
      }
    })
  )

  render() {
    const { submitEnabled, calculateEstimate } = this.props;

    return(
      <Section>

        <SectionHeader>
          <Heading>Data <Emoji text='🔍'/></Heading>
        </SectionHeader>

        <SectionBody>
          {this.renderValidatedInputs()}
          {/* <ValidatedInput name='Expected Rent' value={expectedRent} /> */}
          <Button fullWidth disabled={!submitEnabled} style={{marginBottom: 0}} onClick={calculateEstimate}>Find my rent estimate!</Button>
        </SectionBody>

      </Section>
    )
  }
}

export default Data;
