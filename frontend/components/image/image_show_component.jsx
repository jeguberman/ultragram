import React from 'react';

class ImageShowComponent extends React.Component{

  constructor(props){

    super(props);

    this.state = {id: props.id} ;
  }

  componentWillMount(){
    this.props.fetchImage(this.state.id);
  }

  componentDidMount(){
    // debugger
  }

  renderImage(){

      return(
        <img src={this.props.image.image_url}
          className="image" />
      );

  }

  userFollowed(){
    return(
      <div className="user-followed image-show-user-followed"></div>
    );

  }



  header(){
    return(
      <header className="author-info-container">
        <img className="user-picture " src={window.staticImages.alexGrey} />
        <div className="image-view-auth"></div>
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
    debugger
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

export default ImageShowComponent;
