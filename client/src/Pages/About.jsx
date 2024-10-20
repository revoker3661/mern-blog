import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
          About TECH MANTRA
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to TECH MANTRA—your go-to destination for the latest insights, tips, and tutorials on cutting-edge web development technologies. Whether you’re a seasoned developer or just starting your coding journey, our blog is designed to provide valuable content on everything from React and JavaScript to Next.js and beyond.
            </p>
            <p>
            At TECH MANTRA, we believe in the power of learning and sharing knowledge. Our mission is to simplify complex concepts, helping you build faster, smarter, and more efficient web applications. From hands-on guides and best practices to exploring new trends and techniques, our blogs cover a wide range of topics that keep you ahead in the ever-evolving world of web development.
            </p>
            <p>
            Stay tuned for weekly updates, tutorials, and expert advice that will empower you to master the latest tech stacks. Let TECH MANTRA be your companion in your development journey, helping you elevate your skills and transform your ideas into reality.
          </p>
          <p>
          Join us as we explore the mantra of technology, one blog at a time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
