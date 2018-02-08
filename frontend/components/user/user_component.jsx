import React from 'react';
import { Link } from 'react-router-dom';

class UserComponent extends React.Component{
  constructor(props){

    super(props);
    // this.state={images:[], user:this.props.user};
  }

  componentWillMount(){
    this.props.fetchUser(this.props.username);
  }

  componentWillReceiveProps(nextProps){
    //
    // const nextImages = nextProps.images.filter(
    //   (image) => image.author_id === nextProps.user.id
    // );
    // this.setState({images: nextImages, user: nextProps.user});
  }





  imageList(){

    return(
      this.props.images.reverse().map(
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
    if(this.props.images.length === 0){
      return(<div className="no-posts grey-border">No posts yet.</div>);
    }else{
      return(
        <ol className="image-list">{this.imageList()}</ol>
      );
  }
  }

  userBlock(){

    return(
      <div className="user-show-userblock">
        <img className="user-picture user-show-user-picture"
          src={this.props.user.profile_image_url} />
        <div className="user-show-info">

          <div className="user-show-name">{this.props.user.username}</div>

          <div className="user-show-count"><div className="posts">{this.props.images.length}</div>&nbsp;posts</div>

          <div className="user-show-count"><div className="posts">{this.props.images.length}</div>&nbsp;followers</div>

          <div className="user-show-count"><div className="posts">{this.props.images.length}</div>&nbsp;following</div>

        <br/>

          <div className="author-name user-show-personal"> {this.props.user.fullname} </div>
&nbsp;
          <div className="user-show-personal comment-item">
            {this.props.user.personal_statement}
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
