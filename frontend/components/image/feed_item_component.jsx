import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

class FeedItemComponent extends React.Component{

  constructor(props){
    super(props);
  }


  renderImage(){
    return(
      <Link to={`/images/${this.props.image.id}`}>
        <img src={this.props.image.image_url}
          className="image feed-image" />
      </Link>
    );
  }

  userFollowed(){
    return(
      <div className="user-followed feed-item-user-followed"></div>
    );
  }



  header(){
    let author = this.props.author;
    if (author){
      return(
        <header className="author-info-container comment-item">
          <img className="user-picture feed-author-picture" src={author.profile_image_url} />
          <Link to={`/${author.username}`}  className="author-name">{author.username}</Link>
          {this.userFollowed()}
        </header>
      );
    }else{
      return null;
    }
  }

  footer(){
    return(
      <footer className="feed-item-footer">
        {this.commentCount()}
        {this.imageCaption()}
        <Moment className="elapsed-time comment-item" fromNow>{this.props.image.created_at}</Moment>

      </footer>
    );
  }

  commentCount(){
    if(this.props.image.comments.length>1){
      return(
        <div className="comment-count author-name">{this.props.image.comments.length}&nbsp;comments</div>
      );
    }else if (this.props.image.comments.length === 1){
      return(
        <div className="comment-count author-name">{this.props.image.comments.length}&nbsp;comment</div>
      );
    }else{
      return null;
    }
  }

  imageCaption(){
    if(this.props.image.caption){
    return(
      <div className="image-caption-container">
        <div className="comment-item">
          <Link to={`/${this.props.author.username}`}  className="author-name">{this.props.author.username}</Link>   &nbsp;
          {this.props.image.caption}
        </div>
      </div>
    );
    }else{
      return null;
    }
  }

  render(){
    if(this.props.image){
      return(
        <div className="feed-item grey-border">
          {this.header()}
          {this.renderImage()}
          {this.footer()}
        </div>
      );
    }else{
      return(<div></div>);
    }
  }



}

export default FeedItemComponent;
