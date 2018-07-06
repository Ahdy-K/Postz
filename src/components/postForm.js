import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPost} from '../actions/postActions'
 class PostForm extends Component {
     constructor(props){
         super(props)
         this.state ={
             title:'',
             body:''
         }
         this.onChange = this.onChange.bind(this)
         this.onSubmit = this.onSubmit.bind(this)
     }
     onChange(e){
         this.setState({[e.target.name]: e.target.value})
     }
     onSubmit(e){
         e.preventDefault()
         const post ={
             title: this.state.title,
             body: this.state.body
         }
         this.props.createPost(post)
         
     }

  render() {
    return (
      <div>
        <h1 className="addPostTitle">Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label >Title</label>
                <input name="title" type="text" 
                onChange={this.onChange} value={this.state.title} />
            </div>
            <br/>
            <div>
                <label >Body</label>
                <textarea name="body" type="textarea"
                onChange={this.onChange} value={this.state.body}/>
            </div>
            <br/>
            <button className="btn waves-effect waves-light" type="submit" name="submit">Submit
             </button>
        </form>
      </div>
    )
  }
}
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, {createPost})(PostForm)
