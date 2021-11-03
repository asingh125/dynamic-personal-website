const mapDispatchToProps = dispatch => ({
  deletePost: index => dispatch({
    type: 'DELETE_POST',
    index,
  }),
})

export default mapDispatchToProps
