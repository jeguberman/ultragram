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


  authorInfo(){
    let author = this.props.author;
    return(
      <header className="author-info-container comment-item">
        <img className="user-picture image-show-author-picture" src={author.profile_image_url} />
        <div className="author-name">{author.username}</div>
                {this.userFollowed()}
      </header>
    );
  }

  userFollowed(){
    return(null);
  }


  elapsedTime(){
    return(
      <Moment className="elapsed-time feed-item-comment" fromNow>{this.props.image.created_at}</Moment>
    );
  }

  likes(){
    return(
      <div className="image-show-likes like-block">
        <div className="image-show-view-count view-count">like block</div>
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

  badges(){
    return(
      <div className="image-show-badges">badges
       </div>
     );
  }



  socialBlock(){
    return(
      <div className="image-show-social-block">
        {this.authorInfo()}
        {this.comments()}

        {this.badges()}
        {this.likes()}
        {this.elapsedTime()}
        <input type="text" className="comment-input" placeholder="Add a comment..."/>
      </div>
    );
  }

  comments(){
    return(

      <div className="comment-block">
        {this.imageCaption()}
        <div className="comment">
          <div className="author-name">
            {this.props.author.username}
          </div>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec semper neque, id lacinia est. Nunc fringilla arcu massa. Nullam quis lacus lacinia, malesuada risus sed, scelerisque leo. Donec nec tellus vitae eros vestibulum semper. Curabitur sodales imperdiet nulla, in aliquet eros volutpat ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dictum volutpat sapien et varius. Sed nec placerat eros. Mauris dapibus molestie enim vitae suscipit. Nunc eleifend pellentesque justo sit amet iaculis. Suspendisse nec arcu varius, convallis elit in, fermentum quam.

        </div>

        <div className="comment">
          <div className="author-name">
            {this.props.author.username}
          </div>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec semper neque, id lacinia est. Nunc fringilla arcu massa. Nullam quis lacus lacinia, malesuada risus sed, scelerisque leo. Donec nec tellus vitae eros vestibulum semper. Curabitur sodales imperdiet nulla, in aliquet eros volutpat ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur dictum volutpat sapien et varius. Sed nec placerat eros. Mauris dapibus molestie enim vitae suscipit. Nunc eleifend pellentesque justo sit amet iaculis. Suspendisse nec arcu varius, convallis elit in, fermentum quam.

        </div>
        
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
