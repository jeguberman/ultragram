import React from 'react';
import { connect } from 'react-redux';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { body:"", image_id: props.imageID };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }



  update(e){
    this.setState({body:e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.postComment(this.state);
  }



  render(){
    return(
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <textarea className="comment-input"
          type="text"
          value={this.state.body}
          onChange={this.update}
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
