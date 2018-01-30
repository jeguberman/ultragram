import React from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { body:"", image_id: props.imageID };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  update(e){
    this.setState({body:e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.postComment(this.state);
    this.setState({ body:""});
  }

  handleKeyPress(e){
    if(e.key=='Enter'){
      this.handleSubmit(e);
    }
  }

  render(){
    return(
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <TextareaAutosize className="comment-input"
          type="text"
          value={this.state.body}
          onChange={this.update}
          onKeyPress={this.handleKeyPress}
          placeholder="Add a comment..."/>
      </form>
    );
  }
}



const mapDispatchToProps = (dispatch, ownProps)=>{
  return({
    postComment: (comment)=>dispatch(postComment(comment))
  });
};

export default connect(null,mapDispatchToProps)(CommentForm);
