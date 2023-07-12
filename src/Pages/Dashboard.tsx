import React, { useState } from 'react';

const Dashboard=()=>{
  const [selectedImage, setSelectedImage] = useState<any>();
  console.log("selectedImage::::",selectedImage)
  const handleImageUpload = (event:any) => {
    console.log("event.target.files:::", event.target.files)
    setSelectedImage(event.target.files[0]);
  
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log("===>",Object.prototype.toString.call(selectedImage))
    // Create a FormData object
    const formData = new FormData();
    // formData.append('images', selectedImage);
    formData.append('images2', selectedImage);
    formData.append('product', JSON.stringify({name:"Shirt", decription:"This is style 2023"}));
   
    for (const [key, value] of formData as any) {
      console.log({value})
    }
    // Send the image data to the server
    fetch('http://localhost:3009/test-upload', {

      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Image uploaded successfully:', data);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageUpload} />
      <button type="submit">Upload Image</button>
    </form>
  );
}

export default Dashboard;
