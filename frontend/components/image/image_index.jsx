import React from 'react';

class ImageIndex extends React.Component{
  construcotr(props){
    super(props);
    this.state = props.images;
  }


render(){
  return (<div>image index</div>);
}

}
