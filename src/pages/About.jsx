import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
<img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>Welcome to Enchant where fashion meets passion. Founded in 2024, we set out with a simple yet powerful vision: to create clothing that inspires confidence, empowers individuality, and celebrates every unique style. What started as a small collection has grown into a diverse range of fashion-forward pieces, loved by customers around the world.</p>
<p>When you shop with Enchant, you’re not just buying clothes—you’re joining a community of fashion lovers who value style, quality, and authenticity.</p>
<b className='text-gray-800'>Our Mission</b>
<p>At Enchant, we believe that clothing is more than just fabric—it’s a form of self-expression. Our mission is to provide high-quality, stylish apparel that allows you to showcase your personality and embrace your true self. We are committed to creating pieces that are not only trendy and timeless but also comfortable and accessible for everyone.</p>
</div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Design with Purpose:</b>
         <p className='text-gray-600'>Every piece in our collection is thoughtfully designed with attention to detail, ensuring that it meets the highest standards of quality and style. We combine classic silhouettes with contemporary trends, creating clothing that stands the test of time.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Sustainable Fashion:</b>
         <p className='text-gray-600'>We care about the environment and are committed to making a positive impact. That’s why we prioritize sustainable practices, from sourcing eco-friendly materials to minimizing waste in our production process. We believe in fashion that’s both beautiful and responsible.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Customer-Centric Approach:</b>
         <p className='text-gray-600'> Our customers are at the heart of everything we do. From the moment you visit our website to the time your order arrives at your door, we strive to provide an exceptional shopping experience. Your satisfaction is our top priority, and we’re here to make sure you love every purchase.</p>
       </div>
      </div>


      <NewsletterBox/>
    </div>
  )
}

export default About
