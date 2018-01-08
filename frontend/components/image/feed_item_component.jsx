import React from 'react';
import Moment from 'react-moment';

class FeedItemComponent extends React.Component{

  constructor(props){
    super(props);
  }


  renderImage(){
      return(
        <img src={this.props.image.image_url}
          className="image feed-image" />
      );
  }

  userFollowed(){
    return(
      <div className="user-followed feed-item-user-followed"></div>
    );
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

  footer(){
    return(
      <footer className="feed-item-footer">
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
