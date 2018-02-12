import React from 'react';
import { Link } from 'react-router-dom';

class UserComponent extends React.Component{
  constructor(props){

    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.followState = this.followState.bind(this);
  }

  componentWillMount(){
    this.props.fetchUser(this.props.username);
  }

  followState(){
    return this.props.currentUserFollowing.includes( this.props.user.id );
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

  followButton(){
    if(this.props.currentUserID !== this.props.user.id){
      if(this.followState()){
        return (<button className="follow-button session-button" onClick={this.handleFollow}>Following</button>);
      }else{
        return (<button className="follow-button session-button" onClick={this.handleFollow}>Follow</button>);
      }
    }
  }

  handleFollow(e){

    e.preventDefault();
    if(this.props.currentUserID !== this.props.user.id){
      if(this.followState()){
        this.props.deleteFollow(this.props.username);
      }else{
        this.props.postFollow( this.props.username);
      }
    }
  }

  userBlock(){
    return(
      <div className="user-show-userblock">
        <img className="user-picture user-show-user-picture"
          src={this.props.user.profile_image_url} />
        <div className="user-show-info">


            <div className="user-show-name">{this.props.user.username}</div>
            {this.followButton()}


            <br/>

            <div className="user-show-count"><div className="posts">{this.props.images.length}</div>&nbsp;posts</div>

            <div className="user-show-count"><div className="posts">{this.props.user.followed_by.length}</div>&nbsp;followers</div>

            <div className="user-show-count"><div className="posts">{this.props.user.following.length}</div>&nbsp;following</div>


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
