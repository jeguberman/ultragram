import React from 'react';

class FeedItemComponent extends React.Component{

  constructor(props){

    super(props);


  }


  renderImage(){

      return(
        <img src={this.props.image.image_url}
          className="image" />
      );

  }

  userFollowed(){
    return(
      <div className="user-followed image-index-item-user-followed"></div>
    );

  }



  header(){

    let author = this.props.author;
    return(
      <header className="author-info-container">
        <img className="user-picture feed-author-picture" src={author.profile_image_url} />
        <div className="feed-author-name">{author.username}</div>
        {this.userFollowed()}
      </header>
    );
  }

  footer(){
    return(
      <footer className="image-index-item-footer image-caption">{this.props.image.caption}</footer>
    );
  }

  render(){

    if(this.props.image){
      return(
        <div className="image-index-item grey-border">
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
