import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import mapDispatchToProps from '../actions/ComposerActions'

const GridContainer = styled.div`
    display: grid;
    width: 40vw;
    grid-template-rows: auto 1fr;
`

const Label = styled.div`
    grid-row: 1 / 1;
    grid-column: 1 / 2;
    padding: 0;
    font-size: 1em;
    position: relative;
    color: Grey !important;
    padding: 25px 25px;
    border-radius: 10px;
    font-family: Arial;
    text-align: right;
`

const InputContainer = styled.div`
    grid-row: 1 / 1;
    grid-column: 2 / 2;
    padding: 0;
    font-size: 1.5em;
    position: relative;
    color: Grey !important;
    padding: 25px 25px;
    border-radius: 10px;
    font-family: Arial;
`

const SaveButton = styled.button`
  padding: 5px 5px;
  font-size: 1em;
  position: relative;
  left: 0;
  border: 2px solid Grey !important;
  background-color: lightgreen !important;
  color: Grey
  font-size: 16px;
  text-align: center;
  &:hover {
    background-color: darkseagreen !important;
  }
`

const Composer = props => {
  const { reduxItems, updateIntro } = props
  const [imgLink, setImgLink] = useState(reduxItems.intro.link)
  const [description, setDescription] = useState(reduxItems.intro.desc)

  return (
    <>
      <GridContainer>
        <Label>Image Link</Label>
        <InputContainer>
          <input value={imgLink} onChange={e => setImgLink(e.target.value)} type="text" />
        </InputContainer>
      </GridContainer>

      <GridContainer>
        <Label>Description</Label>
        <InputContainer>
          <input value={description} onChange={e => setDescription(e.target.value)} type="text" />
        </InputContainer>
      </GridContainer>

      <SaveButton onClick={() => updateIntro(imgLink, description)}>Save Intro Changes</SaveButton>
    </>
  )
}

const mapReduxStateToProps = state => ({
  reduxItems: state,
})

export default connect(mapReduxStateToProps, mapDispatchToProps)(Composer)
