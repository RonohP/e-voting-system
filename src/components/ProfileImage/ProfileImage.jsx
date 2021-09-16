import React from 'react';
import { Avatar, Button, Box, Slider } from "@material-ui/core";
import { useState } from "react";
import AvatarEditor from "react-avatar-editor";

const ProfileImage = () => {
  var editor = "";
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 2,
    croppedImg:
      "https://thumbs.dreamstime.com/b/happy-black-woman-showing-ok-gesture-smiling-looking-camera-satisfied-hand-cheerful-african-female-customer-student-138434650.jpg"
  });

  const handleSlider = (event, value) => {
    setPicture({
      ...picture,
      zoom: value
    });
  };

  const handleCancel = () => {
    setPicture({
      ...picture,
      cropperOpen: false
    });
  };

  const setEditorRef = (ed) => {
    editor = ed;
  };

  const handleSave = (e) => {
    if (setEditorRef) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();

      setPicture({
        ...picture,
        img: null,
        cropperOpen: false,
        croppedImg: croppedImg
      });
    }
  };

  const handleFileChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    console.log(url);
    setPicture({
      ...picture,
      img: url,
      cropperOpen: true
    });
  };

  return (
    <div>
      <Box display="flex">
      <div className=' p-5 my-10 '
            style={{display: 'flex', }}> 
              
                    <button className='profile-btn relative w-16 h-16   font-bold inline-block'>
                    <span>
                    <Avatar
                    src={picture.croppedImg}
                    className='absolute w-16 h-16'
                    style={{ width: "100%", height: "100%", padding: "5" }}
                    />
                    </span>
                    </button>
                    <input type="file" name='upload' id='upload-photo'
                      style={{ opacity: '0', position: 'absolute', zIndex: '-1' }}
                  accept="image/*" onChange={handleFileChange} /> 
                  
                    <label for='upload-photo' style={{cursor: 'pointer'}} >
                    <button 
                    variant='contained'
                    className='contact-btn border rounded-full py-2 mx-20 align-center px-8 border-solid  my-2 font-bold'
                    style={{ background: '#93278F', color:'#FFFF', borderRadius:'8px'}}>
                     
                      Upload
                      </button>
                      </label> 
                     
                    
                 
                  </div>
                  {picture.cropperOpen && (
                      <Box display="block">
                          <AvatarEditor
                          ref={setEditorRef}
                          image={picture.img}
                          width={200}
                          height={200}
                          border={50}
                           color={[255, 255, 255, 0.6]} // RGBA
                          rotate={0}
                            scale={picture.zoom}
                            />
                          <Slider
                          aria-label="raceSlider"
                          value={picture.zoom}
                          min={1}
                          max={10}
                          step={0.1}
                          onChange={handleSlider}
                           ></Slider>
                      <Box>
                      <Button 
                      className='contact-btn border rounded-full py-2 mx-20 align-center px-8 border-solid  my-2 font-bold'
                      style={{ background: '#93278F', color:'#FFFF', borderRadius:'8px'}}
                      onClick={handleSave}>Save</Button>
                      <Button variant="contained"
                          className='contact-btn border rounded-full py-2 mx-20 align-center px-8 border-solid  my-2 m-8 font-bold'
                          style={{ background: '#FFFF', color:'#CA1C1C', borderRadius:'8px'}}
                          onClick={handleCancel}>
                          Remove
                        </Button>
                  
                </Box>
          </Box>
        )}
              </Box>
               
      
    </div>
  );
};

export default ProfileImage;
