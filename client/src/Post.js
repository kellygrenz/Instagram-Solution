import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '1px solid #cecece',
    width: 'calc(25% - 20px)',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: '3%',
    marginLeft: '5px',
    marginRight: '5px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    paddingBottom: '10px'
  },
  image: {
    maxWidth: '100%',
    height: 'auto'
  },
  title: {
    fontFamily: 'Pacifico',
    fontSize: '20px',
    color: 'rgba(158, 10, 173, .5)'
  },
  caption: {
    fontFamily: 'Arial',
    fontSize: '13px',
    paddingLeft: '5px'
  },
  userName: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '15px'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%'
  },
  button: {
    width: '45%',
    backgroundColor: '#ffffff',
    border: '1px solid #cecece',
    color: 'rgb(117, 117, 117)',
    padding: '15px',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: '15px',
    marginTop: '3%'
  }
}

const Post = ({post, deletePost, viewPost}) => {
  return (
    <div style={styles.container}>
      <img src={post.img} style={styles.image} />
      <p style={styles.caption}><span style={styles.userName}>{post.userName}</span> {post.caption}</p>
      <div style={styles.buttonContainer}>
        <button onClick={() => deletePost(post)} style={styles.button}>Delete Post</button>
        <button onClick={() => viewPost(post)} style={styles.button}>View Post</button>
      </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  viewPost: PropTypes.func.isRequired
}

export default Post
