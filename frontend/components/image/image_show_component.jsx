import React from 'react';
import Moment from 'react-moment';

class ImageShow extends React.Component{



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


  // socialBlock(){
  //   return(
  //     <div className="image-show-social-block">
  //       {this.authorInfo()}
  //       {this.comments()}
  //
  //       {this.badges()}
  //       {this.likes()}
  //       {this.elapsedTime()}
  //       <input type="text" className="comment-input" placeholder="Add a comment..."/>
  //     </div>
  //   );
  // }

  socialBlock(){
    return(
      <div className="image-show-social-block">
        {this.authorInfo()}
        {this.comments()}


        {this.elapsedTime()}
        <div className="comment-input"></div>
      </div>
    );
  }

  authorInfo(){
  let author = this.props.author;
  return(
    <header className="image-show-author-info author-info-container comment-item">
      <img className="user-picture image-show-author-picture" src={author.profile_image_url} />
      <div className="author-name">{author.username}</div>
              {this.userFollowed()}
    </header>
  );
    }

  comments(){
    return(

      <div className="comment-block">
        {this.imageCaption()}

      </div>

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

  likes(){
    return(
      <div className="image-show-likes like-block">
        <div className="image-show-view-count view-count">like block</div>
      </div>
    );
  }

  elapsedTime(){
    return(
      <Moment className="elapsed-time feed-item-comment" fromNow>{this.props.image.created_at}</Moment>
    );
  }

  userFollowed(){
    return(null);
  }

}


export default ImageShow;
