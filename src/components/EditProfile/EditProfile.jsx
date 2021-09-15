import React from 'react';
// import {useState} from 'react';

function EditProfile() {
//    const [selectedImage, setSelectedImage] = useState();
//    const imageChange = (e) => {
//        if (e.target.files && e.target.files.length > 0  )
//        {
//            setSelectedImage(e.target.files[0]);
//        }
//    };
//    const removeSelectedImage = () =>{
//     setSelectedImage();
//    };

    return (
        <div>
             <section className='relative h-full w-full'>
                <h1 className='text-5xl font-bold mt-20 mb-10
                mx-6'>
                 Account
                </h1>
                <p className='mx-6  align-center'>Make changes to your account</p>
                <div className=' p-5 my-10 '
            style={{display: 'flex', }}> 
                    <button className='profile-btn relative w-16 h-16   font-bold inline-block'>
                    <span>
                    <img
                    src='https://thumbs.dreamstime.com/b/happy-black-woman-showing-ok-gesture-smiling-looking-camera-satisfied-hand-cheerful-african-female-customer-student-138434650.jpg'
                    alt='profile'
                    className='absolute w-16 h-16'
                    />
                    </span>
                    </button>
                    <button
                    type='submit'
                    className='contact-btn border rounded-full py-2 mx-20 align-center px-8 border-solid  my-2 font-bold'
                    style={{ background: '#93278F', color:'#FFFF', borderRadius:'8px'}}
                    >Upload</button>
                     <button 
                    type='submit'

                    className='contact-btn border rounded-full py-2 align-center m-4 px-8 border-solid my-2 font-bold'
                    style={{ background: '#FFFF', color:'#CA1C1C', borderRadius:'8px'}}>
                    Remove
                    </button>
                </div>
                <div className="p-2">
                    <form onSubmit={(e) => e.preventDefault()} className="p-2 mx-2">
                        <label htmlFor="std-id" className=" my-2 p-1 text-base">Display Name</label>
                        <input
                        type="text"
                        name="display Name"
                        placeholder="Jane Doe"
                        id="display-name"
                        className=" rounded-full py-3 px-6 border border-solid resize-y my-2 block"
                            style={{ borderColor: "#93278F" , borderRadius:'8px',  width: '40%' }}
                        />
                        <p className='font-bold mt-20'>Reset Password</p>
                        <label
                        htmlFor=" Current password"
                        className="mx-2 my-2 p-1 text-base"
                        ></label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder=" Current Password"
                        
                        className=" rounded-full py-3 px-6 border border-solid resize-y my-2 block"
                        style={{ borderColor: "#93278F", borderRadius:'8px',  width: '40%'  }}
                        />
                        <label
                        htmlFor=" Confirm password"
                        className="mx-2 my-2 p-1 text-base"
                        ></label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder=" Confirm Password"
                        
                        className=" rounded-full py-3 px-6 border border-solid resize-y my-2 mt-3 block"
                        style={{ borderColor: "#93278F",  borderRadius:'8px',  width: '40%'   }}
                        />
                
                        <button
                        type="submit"
                  
                        className="contact-btn border rounded-full py-2 px-8 border-solid  my-2 font-bold block mt-6"
                        style={{ background: "#93278F", color: "#FFFF",  borderRadius:'8px'}}
                         >
                        Save Changes 
                        </button>
                    </form>
               </div>
                </section>
             
        </div>
    )
}

export default EditProfile
