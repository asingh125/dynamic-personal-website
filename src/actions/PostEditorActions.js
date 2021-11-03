const mapDispatchToProps = dispatch => ({
  editPost: (title, content, imgLink, id, index, key) => dispatch({
    type: 'EDIT_POST',
    title,
    content,
    imgLink,
    id,
    index,
    key,
  }),
})

export default mapDispatchToProps
