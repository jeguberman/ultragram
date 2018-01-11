import React from 'react';
import { connect } from 'react-redux';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { body:"", image_id:props.image_id};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(){
    return( (e) => {
      this.setState({body:e.target.value});
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.postComment(this.state);
  }

  commentForm(){
    return(
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input className="comment-input"
          type="text"
          value={this.state.body}
          onChange={this.update}/>
      </form>
    );
  }

  render(){
    return(<div className="comment-input">comment input</div>);
  }
}



const mapDispatchToProps = (dispatch, ownProps)=>{
  return({
    postComment: (comment)=>dispatch(postComment(comment))
  });
};

export default connect(null,mapDispatchToProps)(CommentForm);
