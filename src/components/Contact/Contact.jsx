import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
    const [state, handleSubmit] = useForm("xkgwnvwk");
  if (state.succeeded) {
  alert('form submit successful')
}

    return (
        <div>
      <div className=' my-9'>
       <div className='mb-3 py-4'>
       <h2 className='text-4xl font-bold text-center py-3' id='contact'>Contact</h2>
        <p className='text-center  text-xl'> Email: <span className='text-orange-400'>zannatulferdous0162@gmail.com</span></p>
       </div>
        <div className=' shadow-lg rounded-lg shadow-slate-400 mx-auto lg:w-1/2 p-4 w-11/12 '>
        <form onSubmit={handleSubmit} className='mt-6'>
 <div className="grid grid-cols-1 gap-4">
     <div className=' grid lg:grid-cols-2 gap-6'>
      {/* Name Field */}
     <div>
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500 bg-[#ebeaea]"
          placeholder="Enter your name" required
          
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500 bg-[#ebeaea]"
          placeholder="Enter your email" required
        />
      </div>
     </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500 bg-[#ebeaea]"
          placeholder="Enter your message" required
        ></textarea>
      </div>
      <button type='submit' className="btn btn-block bg-orange-400 hover:bg-orange-400 text-white font-bold">Submit</button>
    </div>
        </form>
        </div>
      </div>
        </div>
    );
};

export default Contact;