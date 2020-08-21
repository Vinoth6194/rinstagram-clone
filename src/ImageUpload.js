import React,{useState} from 'react';
import { Button } from "@material-ui/core";





function ImageUpload() {
    const [caption, setCaption] = useState('');
const [progress, setProgress] = useState(0);
const [image,setImage] = useState(null);

const handleChange = (event) =>{
    if(event.target.files[0]){
        setImage(event.target.files[0]);
    }
}
const  captionHandler =(event) =>{
    setCaption(event.target.value);
}
const handleUpload = () =>{

}

    return (
        <div>
            <input type = "text" placeholder = "What's on your mind" value = {caption} onChange ={captionHandler}></input>
            <input type = "file" onChange = {handleChange}></input>
            <Button onClick = {handleUpload}>
                Upload
            </Button >
        </div>
    )
}

export default ImageUpload;
