import React from 'react';
import Moment from 'react-moment';
import CommentItem from './comment_item';
import CommentForm from './comment_form';
import { Link } from 'react-router-dom';





class ImageShow extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }




  componentWillMount(){
    this.props.fetchImage(this.props.id);
  }

  render(){
    if(this.props.author){
      return(
        <div className="image-show grey-border">
          {this.renderImage()}
          {this.socialBlock()}
        </div>
      );
    }else{
      return(null);
    }
  }


  socialBlock(){
    return(
      <div className="image-show-social-block">
        {this.authorInfo()}
        {this.comments()}
        {this.likeButton()}
        {this.likesCount()}
        {this.elapsedTime()}
        <CommentForm imageID={this.props.id}/>
      </div>
    );
  }

  handleLike(e){

    e.preventDefault();
    const derlike = {user_id: this.props.currentUserID, image_id: this.props.id};
    if(this.props.liked){
      this.props.deleteLike(derlike);
    }else{
      this.props.postLike(derlike);
    }
  }

  likeButton(){
    if(this.props.liked){
      return(<button className="dislike-button like-button" onClick={this.handleLike}></button>);
    }else{
      return(<button className="like-button" onClick={this.handleLike}></button>);
    }
  }

  likesCount(){
    var likes = this.props.likes.length;
    return(
      <div className="image-show-likes like-block">
        <div className="image-show-view-count view-count author-name comment-count">{likes} {likes === 1 ? "like" : "likes"}</div>
      </div>
    );
  }

  authorInfo(){
    let author = this.props.author;
    return(
      <header className="image-show-author-info author-info-container comment-item">
        <img className="user-picture image-show-author-picture" src={author.profile_image_url} />
        <Link to={`/${author.username}`}  className="author-name">{author.username}</Link>
                {this.userFollowed()}
                {this.deleteButton()}

      </header>
    );
  }

  deleteButton(){

    if(this.props.currentUserID === this.props.author.id){
      return(
        <input type="button" className="image-show-delete session-button" value="Delete This Image" onClick={this.handleDelete.bind(this)}/>
      );
    }
  }

  updateButton(){

    if(this.props.currentUserID === this.props.author.id){
      return(
        <input type="button" className="image-show-delete session-button"
           value="Make this my profile picture"
           onClick={this.updateImage.bind(this)}/>
      );
    }
  }

  updateImage(e){
    e.preventDefault();
    let userTemp = this.props.author;
    userTemp.profile_image_url = this.props.image.image_url;
    this.props.updateUser(userTemp);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteImage(this.props.id);
    this.props.history.push("/");
  }

  comments(){
    return(
      <div className="comment-block">
        {this.imageCaption()}
        {this.commentList()}
      </div>
    );
  }

  imageCaption(){
    if(this.props.image.caption){
    return(
      <div className="image-caption-container">
        <div className="comment-item">
          <Link to={`/${this.props.author.username}`}  className="author-name">{this.props.author.username}</Link>&nbsp;
          {this.props.image.caption}
        </div>
      </div>
    );
    }else{
      return null;
    }
  }

  commentList(){
    if(this.props.comments){
      return(
        <ul className="comment-list image-show-comment-list">
          {this.props.comments.map( (comment) => {
            return (
              <CommentItem key={comment.id} comment={comment}/>
            );
          })}
        </ul>
      );
    }else{
      return null;
    }
  }

  renderImage(){
    return(
        <img src={this.props.image.image_url}
          className="image image-show-image" />
    );
  }

  badges(){
    return(
      <div className="image-show-badges">badges
       </div>
     );
   }



  elapsedTime(){
    return(
      <Moment className="elapsed-time comment-item" fromNow>{this.props.image.created_at}</Moment>
    );
  }

  userFollowed(){
    return(null);
  }

}


export default ImageShow;
