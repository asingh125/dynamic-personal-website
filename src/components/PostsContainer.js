import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PostComposer from './PostComposer'
import Post from './Post'

const Posts = styled.h3`
  font-size: 2em;
  color: palevioletred;
  font-family: Arial;
`
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

const PostsContainer = props => {
  const { reduxItems } = props
  const [createPostMode, setCreatePostMode] = useState(false)
  return (
    <>
      <Posts>POSTS: </Posts>
      {createPostMode
        ? (
          <>
            <PostComposer />
            <CancelButton onClick={() => setCreatePostMode(false)}>Cancel</CancelButton>
          </>
        )
        : <EditButton onClick={() => setCreatePostMode(true)}>Write New Post</EditButton>}
      <ul>
        {
                reduxItems.posts.map((item, index) => <Post title={item.title} id={item.id} index={index} content={item.content} imgLink={item.imgLink} key={item.key} />)
            }
      </ul>
    </>
  )
}

const mapReduxStateToProps = state => ({
  reduxItems: state,
})

export default connect(mapReduxStateToProps)(PostsContainer)
