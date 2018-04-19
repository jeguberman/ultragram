import React from 'react';
import {Link} from 'react-router-dom'
import FeedItemContainer from './feed_item_container';

class ImageIndex extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.fetchImages();
  }

  imageList(){

    return (
      this.props.images.reverse().map(
        (image) => {

          return (<li key={image.id}>
            <FeedItemContainer image={image}/>
          </li>);
        }
      )
    );

  }




  render(){
    if(this.props.images.length > 0){
      return (<ul className="feed-list">{this.imageList()}</ul>);
    }else{
      return(<div className="no-posts grey-border">This is where your feed would be, but there are no pictures here because you aren't following anybody yet.
      </div>);
    }
  }

}

export default ImageIndex;
