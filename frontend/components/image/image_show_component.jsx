import React from 'react';
import Moment from 'react-moment';

class ImageShow extends React.Component{



  componentWillMount(){
    this.props.fetchImage(this.props.id);
  }

  renderImage(){
    return(
        <img src={this.props.image.image_url}
          className="image image-show-image" />
    );
  }

  footer(){
    return(
      <footer className="item-show-footer">
        {this.imageCaption()}
        <Moment className="elapsed-time feed-item-comment" fromNow>{this.props.image.created_at}</Moment>

      </footer>
    );
  }

  imageCaption(){
    if(this.props.image.caption){
    return(
      <div className="image-caption-container">
        <div className="feed-item-comment">
          <div className="author-name">{this.props.author.username}</div>   &nbsp;
          {this.props.image.caption}
        </div>
      </div>
    );
    }else{
      return null;
    }
  }



  header(){
    let author = this.props.author;
    return(
      <header className="author-info-container comment-item">
        <img className="user-picture feed-author-picture" src={author.profile_image_url} />
        <div className="author-name">{author.username}</div>
        {this.userFollowed()}
      </header>
    );
  }

  userFollowed(){
    return(null);
  }

  socialBlock(){
    return(
      <div className="image-show-social-block">
        {this.header()}
        {this.body()}
        {this.footer()}
      </div>
    );
  }

  body(){
    return(
      <div className="image-show-body image-body">
        <div className="comment-block"></div>
        <div className="like-block"></div>
      </div>
    );
  }





  render(){
    if(this.props.author){
      return(
        <div className="image-show">
          {this.renderImage()}
          {this.socialBlock()}
        </div>
      );
    }else{
      return(null);
    }
  }
}

export default ImageShow;
