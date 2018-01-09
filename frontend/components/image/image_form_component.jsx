import React from 'react';
import { Redirect } from 'react-router';

class ImageForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleFileChange=this.handleFileChange.bind(this);
    this.state={imageUrl: "", imageFile: null, caption:""};

  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("image[author_id]", this.props.currentUser);
    formData.append("image[image_url]", this.state.imageFile);
    formData.append("image[caption]", this.state.caption);
    this.props.postImage(formData);
  }

  handleFileChange(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () => {
      return( this.setState( {image_url: reader.result, imageFile: file} ) );
    };

    if(file){
      reader.readAsDataURL(file);
    }else{
      this.setState({image_url:"", imageFile: null});
    }

  }

  formComponent(){
    return (<form onSubmit={this.handleSubmit}>
      <input type="file" onChange={this.handleFileChange}/>
      <img src={this.state.image_url} />

      <input type="text" placeholder="Caption goes here" />
      <input type="submit" value="Submit Image" />
    </form>);
  }

  isEdit(){
    if(this.props.formType==="editImage"){
      return(<div>is edit</div>);
    }
  }


  render (){

    return(
      <div>
        {this.formComponent()}
        {this.isEdit()}
      </div>
    );

  }
}

export default ImageForm;
