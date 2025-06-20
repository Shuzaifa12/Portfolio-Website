"use client"
import React from 'react'

const Form = () => {
  async function handleSubmit(event:any) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "98c354a5-21e6-4cae-9ccc-6caa68629af6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        if(confirm ("Are you sure you want to send this invitation")){
          console.log(result);
          form.reset();
        }
    }
    else {
      alert("Form submission failed. Please try again.");
    }
}
  return (
      <div className='md:flex px-12 py-8 md:justify-between md:items-center'>
        <div className='flex justify-center py-4 md:py-0'>
          <h1 className='font-bold uppercase text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-widest'>Invitation Form</h1>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col border-2 border-[#FA6E00] rounded-md md:w-[40%] mx-auto md:mx-0 p-4 space-y-2'>
          <input type="text" name="name" placeholder='Enter Your Name' className='bg-transparent border border-white h-10 px-4' required/>
          <input type="number" name="number" placeholder='Enter Your Phone Number' className='bg-transparent border border-white h-10 px-4' required/>
          <input type="email" name="email" placeholder='Enter Your Email' className='bg-transparent border border-white h-10 px-4' required/>
          <input type="text" name="organization name" placeholder='Organization Name' className='bg-transparent border border-white h-10 px-4' required/>
          <input type="text" name="job role" placeholder='Job Role' className='bg-transparent border border-white h-10 px-4' required/>
          <input type="text" name="location" placeholder='Location' className='bg-transparent border border-white h-10 px-4' required/>
          <textarea name="message" placeholder='Offer Invitation' className='bg-transparent border border-white h-24 px-4'></textarea>
          <button type="submit" className='border border-white w-fit px-3 py-2 font-bold rounded-md text-white bg-[#FA6E00]'>Send Invite</button>
        </form>
      </div>
  )
}

export default Form;