import { v4 as uuidv4 } from 'uuid'

const defaultIntro = { link: 'https://www.seas.upenn.edu/~cis120/21fa/images/headshots/aarushis.jpeg', desc: 'My name is Aarushi, and I am a CIS student!' }
const defaultPosts = [{
  id: 1, title: 'University of Pennsylvania', content: 'This is the school I go to.', imgLink: 'https://snworksceo.imgix.net/dpn/b6249451-68f7-42d5-9b61-5c1c95dcb20f.sized-1000x1000.jpg?w=1000', key: `post-${uuidv4()}`,
}]
const defaultState = { intro: defaultIntro, posts: defaultPosts, lastId: 1 }

const Reducer = (state = defaultState, action) => {
  const newState = { intro: { link: state.intro.link, desc: state.intro.desc }, posts: state.posts.slice(), lastId: state.lastId }
  switch (action.type) {
    case 'UPDATE_INTRO': {
      const { link, desc } = action
      newState.intro.link = link
      newState.intro.desc = desc
      break
    }
    case 'DELETE_POST': {
      const { index } = action
      newState.posts.splice(index, 1)
      break
    }
    case 'ADD_POST': {
      const { title, content, imgLink } = action
      const key = `post-${uuidv4()}`
      newState.posts.push({
        id: state.lastId + 1, title, content, imgLink, key,
      })
      newState.lastId = state.lastId + 1
      break
    }
    case 'EDIT_POST': {
      const {
        title, content, imgLink, id, index, key,
      } = action
      newState.posts[index] = {
        id, title, content, imgLink, key,
      }
      break
    }
    default: {
      break
    }
  }
  return newState
}

export default Reducer
