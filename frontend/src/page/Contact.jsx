import React from 'react'

const Contact = () => {
  return (
    <>
  
     <div class="bg-gray-700 text-white py-4 text-center">
       <div class="container mx-auto px-4">
         <h1 class="text-2xl font-bold">Fresh-Bite Contact </h1>
       </div>
     </div>

     <div class="container mx-auto px-4 py-8">
       <div>
         <h2 class="text-3xl font-bold mb-4 text-center">Contact Us</h2>
         <p class="mb-4 text-center">We would love to hear from you! Please provide your information below:</p>
        
         <form class="max-w-md mx-auto">
           <div class="mb-4">
             <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
             <input type="text" id="name" name="name" placeholder="Enter your name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
           </div>
           <div class="mb-4">
             <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
             <input type="email" id="email" name="email" placeholder="Enter your email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
           </div>
           <div class="mb-4">
             <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message:</label>
             <textarea id="message" name="message" placeholder="Enter your message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
           </div>
           <div class="flex justify-center">
             <button type="submit" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
               Submit
             </button>
           </div>
         </form>
       </div>
     </div>
<br/>
<br/>
     <footer class="bg-gray-700 text-white py-6 ">
       <div class="container mx-auto px-4">
         <p class="text-center">© 2023 Fresh-Bite Store. All rights reserved.</p>
       </div>
     </footer>
       </>
  )
}

export default Contact
 
