import {Component} from 'react'
// import Loader from 'react-loader-spinner'
import './index.css'
import BlogList from '../BlogList'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// import BlogItem from '../BlogItem'

// import {Loader } from 'react-react-loader-spinner'
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
        />
        <h1>Wade Warren</h1>
        <p>Software Developer at UK</p>

        <BlogList />
      </div>
    )
  }
}

export default Home
