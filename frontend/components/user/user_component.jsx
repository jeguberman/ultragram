import React from 'react';

class UserComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={images:[], user:this.props.user};
  }

  componentWillMount(){
    this.props.fetchUser(this.props.username);

  }

  componentWillReceiveProps(nextProps){
    const nextImages = nextProps.images.filter(
      (image) => image.author_id === nextProps.user.id
    );
    this.setState({images: nextImages, user: nextProps.user});
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   // super();
  //   debugger
  // }



  imageList(){
    return(
      this.state.images.map(
        (image)=> {
          return (
            <li key={image.id} className="user-show-image">
              <img className="user-show-image" src={image.image_url} />
            </li>
          );
        }
      )
    );
  }

  imageListContainer(){
    return(
      <ol className="image-list">{this.imageList()}</ol>
    );
  }

  userBlock(){

    return(
      <div className="user-show-userblock">
        <img className="user-picture user-show-user-picture"
          src={this.state.user.profile_image_url} />
        <div className="user-show-user-block">
          <div className="user-show-name">{this.state.user.username}</div>
          <div className="user-show-personal">{this.state.user.personal_statement}</div>
        </div>
      </div>
    );
  }



  render(){

    if(this.props.user){
      return(<div className="user-show grey-border">

      {this.userBlock()}
      {this.imageListContainer()}
      </div>);
    }else{
      return (null);
    }
  }


}
export default UserComponent;
