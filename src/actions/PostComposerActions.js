const mapDispatchToProps = dispatch => ({
  addPost: (title, content, imgLink) => dispatch({
    type: 'ADD_POST',
    title,
    content,
    imgLink,
  }),
})

export default mapDispatchToProps
