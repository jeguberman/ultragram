import React from 'react';

class UserComponent extends React.Component{

  componentWillMount(){
    this.props.fetchUser(this.props.username);
  }

  imageList(){
    return(
      this.props.images.map(
        (image)=> {
          return (
            <li key={image.id}>
              <img src={image.image_url} />
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



  render(){
    return(<div className="user-show">
    here
    {this.imageListContainer()}
    </div>);
  }

  componentDidMount(){

  }

}
export default UserComponent;
