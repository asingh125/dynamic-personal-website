import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Composer from './Composer'

const CancelButton = styled.button`
  padding: 5px 5px;
  font-size: 1em;
  position: relative;
  left: 0;
  border: 2px solid Grey !important;
  background-color: lightsalmon !important;
  color: Grey
  text-align: center;
  &:hover {
    background-color: darksalmon !important;
  }
`

const Image = styled.img`
  max-height: 300px;
`

const EditButton = styled.button`
  padding: 5px 5px;
  font-size: 1em;
  position: relative;
  left: 0;
  border: 2px solid Grey !important;
  background-color: lightgray !important;
  color: Grey
  text-align: center;
  &:hover {
    background-color: darkgray !important;
  }
`
const Intro = styled.h3`
  font-size: 2em;
  color: palevioletred;
  font-family: Arial;
`

const Desc = styled.h4`
  font-size: 1.5em;
  color: lightpink;
  font-family: Arial;
`

const Introduction = props => {
  const { reduxItems } = props
  const [editMode, setEditMode] = useState(false)
  return (
    <>
      <Intro>INTRODUCTION: </Intro>
      <Image src={reduxItems.intro.link} />
      <Desc>{reduxItems.intro.desc}</Desc>
      {editMode ?
        (
          <>
            <Composer />
            <CancelButton onClick={() => setEditMode(false)}>Cancel</CancelButton>
          </>
        )
        : <EditButton onClick={() => setEditMode(true)}>Edit Introduction</EditButton> }
    </>
  )
}

const mapReduxStateToProps = state => ({
  reduxItems: state,
})

export default connect(mapReduxStateToProps)(Introduction)
