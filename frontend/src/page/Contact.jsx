import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const SendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vm11d4j', 'template_skzqm0u', form.current, 'PJjUIOsZmvVi6sE_B')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
  
     <div className="bg-gray-700 text-white py-4 text-center">
       <div className="container mx-auto px-4">
         <h1 className="text-2xl font-bold">Fresh-Bite Contact </h1>
       </div>
     </div>

     <div className="container mx-auto px-4 py-8">
       <div>
         <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
         <p className="mb-4 text-center">We would love to hear from you! Please provide your information below:</p>
        
         <form ref={form} onSubmit={SendMail} className="max-w-md mx-auto">
           <div className="mb-4">
             <label for="from_name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
             <input type="text" id="from_name" name="from_name" placeholder="Enter your name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
           </div>
           <div className="mb-4">
             <label for="email_id" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
             <input type="email" id="email_id" name="email_id" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
           </div>
           <div className="mb-4">
             <label for="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
             <textarea id="message" name="message" placeholder="Enter your message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
           </div>
           <div className="flex justify-center">
             <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
               Submit
             </button>
           </div>
         </form>
       </div>
     </div>
<br/>
<br/>
     <footer className="bg-gray-700 text-white py-6 ">
       <div className="container mx-auto px-4">
         <p className="text-center">© 2023 Fresh-Bite Store. All rights reserved.</p>
       </div>
     </footer>
       </>
  )
}

export default Contact
 
