import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
    alert('Feedback submitted successfully!');
    // Here you can integrate the email sending logic, such as using an email API service.
  };

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Background image wrapper with blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg"
        style={{ backgroundImage: `url('https://www.jbmusictherapy.com/wp-content/uploads/2015/08/iStock_000062358630_Large.jpg')` }}
      />

      <div className="py-8 relative z-10">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input 
                type="text" 
                className={`w-full p-2 border-b ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
                {...register('name')} 
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input 
                type="email" 
                className={`w-full p-2 border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
                {...register('email')} 
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea 
                className={`w-full p-2 border-b ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
                rows="4"
                {...register('message')} 
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
