import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo_small from '../logo_small.png'
import { connect } from 'react-redux'

class Home extends Component {
  render(){
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Logo_small} alt="Logo_small"  height="100" width="100" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title pink-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center" >Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)