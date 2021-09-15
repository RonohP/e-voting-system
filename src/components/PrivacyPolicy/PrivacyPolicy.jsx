import React from 'react';
import {Link} from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
import Logo from '../../images/WTLOGO.png';
import '../NavBar/NavBar.css';


export default function PrivacyPolicy() {
    return (
        <div>
            <section className='relative h-full w-full'>
                    <nav className='navbar flex justify-between item- center mb-10 h-16 w-full sm:pl-2 md:pl-10 lg:pl-12 md:w-full '>
                        <Link to='/' className='flex flex-row pt-6'>
                            <img src={Logo} alt='WTLogo' className='w-12 h-11' />
                                <p className='logo-text inline-block pt-6 pl-1 font-sans font-bold'>
                            echsters University
                             </p>
                         </Link>
                    </nav>
                    <h1 className='text-5xl font-bold terms text-center mt-20 mx-52'>
                    Privacy Policy 
                    </h1>
                <div className='mx-10 p-5'>
                    <p className='head'>Privacy Policy</p>
                </div>
                <div className='mx-10 p-5'>
                    <p className=''>  The privacy policy applies to the schools voting platform,
                     owned and operated by the school. The privacy policy describes how we collect, receive, use store, 
                     share, and transfer and process your personal information as well as rights in determining 
                     what we do with the information we collect or hold about you. The personal information
                      relate to the voters and the applicants. 
                     By using the website you are accepting the practices described in this privacy policy document Recommendations</p>
                    <p> 
                    Please read carefully and abide to this privacy policy and terms of service before submitting any personally identifiable information on the platform. Keep your equipment fitted with duly updated antivirus software against malicious software and spyware applications which may jeopardize your internet navigation and the information hosted on your equipment.
                    </p>
                </div >
                <div className='mx-10 p-5'>
                    <p className='head'>Update and changes in our privacy policy </p>
                    <p>The school reserves the right to make amendments in this privacy policy. 
                        Said changes will be communicated to the users through notices posted on the website or
                         by any other means which may be appropriate. You are encouraged to review the privacy policy
                          whenever you make you make use of our website to make sure that you understand how any personal
                           information you provide will be used. The privacy practices in this privacy policy are for the website. Other links you follow to other websites, the information you enter is governed by their privacy policy. Please make sure you read their privacy policy and their terms of service. If you have unresolved privacy or data use concern not addressed in this document, 
                        please contact us by sending an email to <span style={{color: 'blue'}}> Complains.alphateam@gmail.com</span></p>
                </div>
                
                <div className='mx-10 p-5'>
                    <p className='head'>Collection of information </p>
                    <p> We collect personal information like name, email address, school id, registration number 
                        which you submit when creating an account for the purpose of online voting events.
                         The personal information is only used during voting events . 
                         The students are allowed to cancel, update or modify on the platform where necessary 
                         their data before or after the election event and NOT on the voting day. Or by contacting us for any changes. We will retain your information as long as your account is active. We will use your information as necessary to comply with the schools legal obligation, to resolve disputes, if any and enforce our agreements.</p>
                </div>
                <div className='mx-10 p-5'>
                    <p className='head'>Access and retention of data </p>
                    <p> The school acknowledges that you have the right to access your personal information. You are entitled to:</p>
                    <p>i. Erasure your data before or after 30 days after the election event but NOT on the Election Day.</p>
                    <p>ii. Update of your data before or after 30 days after the election event.</p>
                    <p> Furthermore, users will have the right not to be subject of decisions based solely on automated data processing. If users consider that their personal data have not been processed in accordance with applicable regulations and/or if they have been prevented from exercising any of their rights, the schools authority receiving the claim shall inform the student of the situation and result of the same regarding their rights.</p>
                </div>
                <div className='mx-10 p-5'>
                    <p className='head'>  Tracking technology</p>
                    <p>There is no tracking, phishing links or advertising on our website. This ensures that the data you enter in this website is protected. </p>
                </div>
                <div className='mx-10 p-5'>
                    <p className='head'>Distribution of information  </p>
                    <p>We do not sell, trade or transfer to outside third parties your information. In certain situations, the school may be required to disclose personal data in response to lawful requests by participants of the election or an interested party in order to meet the schools law election enforcement requirements. We may also release your information when we believe release is appropriate to comply with the schools voting law, enforce our policies and when we also believe in good faith that disclosure is necessary to protect the schools , or others rights or safety.</p>
                </div>
                <div className='mx-10 p-5'>
                    <p className='head'> Commitment to data security </p>
                    <p> Your personally identifiable information is kept secure. Only authorized employees (who have agreed to keep information secure and confidential) have access to this information. All information submitted to the website is encrypted. The information database is only accessible by those authorized with special access rights to the systems, and they are required to keep the information confidential. No method of transmission over the internet, or method of electronic storage, is 100% secure, however. Therefore we cannot guarantee its absolute security. But we will make sure we secure your data and encrypt your data or any information entered on the website. That include we will not share your data without your consent unless otherwise stated by the school law.</p>
                </div>
                <div className='mx-10 p-5'>
                    <p className='head'> We take privacy seriously .</p>
                    <p> We pledge to make an effort to bring our privacy policy in line with the schools data protection laws, law of the land and other privacy laws and initiatives. This include; General Data Protection Regulation.</p>
                    <p>The student as the owner of the personal data declares to have complied with the provisions and guarantees provided by the General Data Protection Regulation and for this purpose declares that the database owned by the school complies with the regulatory provisions and that the personal data has been collected with the consent of the users, fulfilling the duty of information and security measures provided for this purpose.</p>
                    <p> We will not apply or use the data for purposes other than set out in our obligation, nor will we make this data available to third parties without the prior written consent of the student. We will continue to make changes to our policies and practices to protect your privacy and ensure continued compliance with any data regulation. </p>
                </div>
                <div className='mx-10 p-5'>
                    <p className='head'>Terms of service </p>
                    <p>Please also refer to the <Link
                  className='  font-bold'
                  to='/terms'
                >TERMS AND CONDITIONS </Link>establishing the conditions, disclaimers and limitations governing the use of the voting platform.</p>
                    <p>Privacy contact information</p>
                    <p>If you have any questions, concerns, or comments about our privacy policy you may contact us using the information below: </p>
                </div>
                <div className='mx-10 p-5'>
                    <p className='font-bold'> Email Address: <span style={{color: 'blue'}}> Complains.alphateam@gmail.com</span> </p>
                    <p></p>
                </div>

                <div className='mx-10 p-5 align-center '
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <button 
                    type='submit'
                    className='contact-btn border rounded-full py-2 align-center m-8 px-8 border-solid my-2 font-bold'
                    style={{ background: '#FFFF', color:'#CA1C1C', borderRadius:'8px'}}>
                    Decline
                    </button>
                    
                    <button
                    type='submit'
                    className='contact-btn border rounded-full py-2 align-center px-8 border-solid  my-2 font-bold'
                    style={{ background: '#93278F', color:'#FFFF', borderRadius:'8px'}}
                    >Accept</button>
                </div>
                <div  className= 'mx-10 p-5 align-center'
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button
                className='back-btn border rounded-full py-2 px-10 border-solid w-auto mt-8 inline-block'
                style={{ color: '#FFFF', background: '#93278F', borderRadius:'8px'}}
              >
                <Link
                  className=' flex flex-row justify-evenly font-bold'
                  to='/home'
                >
                  <BiArrowBack className='p-1 text-3xl font-bold' /> Go Back
                </Link>
              </button>
                </div>
          </section>

        </div>
    )
}
