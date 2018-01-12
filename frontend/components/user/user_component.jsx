import React from 'react';
import { Link } from 'react-router-dom';

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





  imageList(){
    let i =1;
    return(
      this.state.images.reverse().map(
        (image)=> {
          return (
            <Link key={image.id} to={`/images/${image.id}`}>
              <img className="user-show-image"
                src={image.image_url} />
            </Link>
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
        <div className="user-show-info">

          <div className="user-show-name">{this.state.user.username}</div>

          <div className="user-show-post-count"><div className="posts">{this.state.images.length}</div>&nbsp;posts</div>


          <div className="author-name"> {this.state.user.fullname} </div>
&nbsp;
          <div className="user-show-personal comment-item">
            {this.state.user.personal_statement}
          </div>

        </div>
      </div>
    );
  }



  render(){

    if(this.props.user){
      return(<div className="user-show">

      {this.userBlock()}
      {this.imageListContainer()}
      </div>);
    }else{
      return (null);
    }
  }


}
export default UserComponent;
