import cv from '../assets/cv.png' 

export default function Resume(){
  return <section className="flex">
<div className="py-5 ">
<img  className = 'w-[400px]'src={cv}/>
</div>
<div className='md:w-1/2
 flex justify-center text-white'>
<div className='flex flex-col'>
  <h1 className=' text-3xl border-b-4 border-purple-400'>Resume</h1>
<div className='pb-5'>
You can view my resume  <a className ='btn 'href='https://drive.google.com/file/d/1kWjdta1-z3CzHGC-SQu3RW9JVHYmue2u/view?usp=sharing'>Download</a>
</div>
</div>
</div>
  </section>
}