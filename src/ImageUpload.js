import React,{useState} from 'react';
import { Button } from "@material-ui/core";
import {db, storage} from './Firebase';

import firebase from "firebase";
import "./ImageUpload.css"

function ImageUpload({username}) {
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
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) =>{
                //*Progress Function
                const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) *100
                );
                setProgress(progress);
            },
            (error) =>{
                //*Error function
                console.log(error);
                alert(error.message);
            },
            () =>{
                //*Complet function...
                storage.ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url =>{
                    //*Post the image and other data
                    db.collection('posts').add({
                        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                        caption:caption,
                        imageUrl:url,
                        username:username
                    })
                            setProgress(0);
                            setCaption("");
                            setImage(null);
                })
            }
        )
}

    return (
        <div className = "imageupload">
            <progress className="imageProgressBar" value ={progress} max = "100"></progress>
            <input type = "text" placeholder = "What's on your mind" value = {caption} onChange ={captionHandler}></input>
            <input type = "file" onChange = {handleChange}></input>
            <Button onClick = {handleUpload}>
                Upload
            </Button >
        </div>
    )
}

export default ImageUpload;
