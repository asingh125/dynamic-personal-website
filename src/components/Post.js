import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PostEditor from './PostEditor'
import mapDispatchToProps from '../actions/PostActions'

const PostWrapper = styled.div`
  background-color: whitesmoke;
  border: 2px solid #cdcdcd;
  border-color: rgba(0, 0, 0, .14);
  padding: 20px 40px;
`

const ID = styled.h4`
  font-size: 1.5em;
  color: black;
  font-family: Arial;
`

const Title = styled.h4`
  font-size: 1.5em;
  color: lightpink !important;
  font-family: Arial;
`

const Content = styled.p`
  font-size: 1.1em;
  color: darkgray;
  font-family: Arial;
`
const Image = styled.img`
  max-height: 250px;
  padding: 20px 0;
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

const DeleteButton = styled.button`
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

const Post = props => {
  const {
    title,
    id,
    index,
    content,
    imgLink,
    key,
    deletePost,
  } = props

  const [editMode, setEditMode] = useState(false)

  return (
    <PostWrapper>
      {editMode
        ? (
          <>
            <PostEditor title={title} id={id} content={content} imgLink={imgLink} index={index} />
            <DeleteButton onClick={() => setEditMode(false)}>
              Cancel
            </DeleteButton>
          </>
        )
        : (
          <>
            <ID>
              Post Number
              {' '}
              {id}
              :
              {' '}
            </ID>
            <Title>
              {title}
              {' '}
            </Title>
            <Content>{content}</Content>
            <Image src={imgLink} />
            <div>
              <EditButton onClick={() => setEditMode(true)}>
                Edit Post
              </EditButton>
              <DeleteButton onClick={() => deletePost(index)}>
                Delete Post
              </DeleteButton>
            </div>
          </>
        )}
    </PostWrapper>
  )
}

export default connect(null, mapDispatchToProps)(Post)
