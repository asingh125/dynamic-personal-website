const mapDispatchToProps = dispatch => ({
  updateIntro: (link, desc) => dispatch({ type: 'UPDATE_INTRO', link, desc }),
})

export default mapDispatchToProps
