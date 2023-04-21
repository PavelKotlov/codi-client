import {Input } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function ImageUpload() {
  const { image, setImage } = useState(null);

  const handleCapture = ({ target }) => {
    const fileReader = new FileReader();
   
    fileReader.readAsDataURL(target.files[0]);
    console.log(target.files[0])
    fileReader.onload = (e) => {
      
      setImage(e.target.files[0]);
    };
  };

  return (
    <Input
      accept="image/*"
      type="file"
      onChange={handleCapture}
    />
  );
}
