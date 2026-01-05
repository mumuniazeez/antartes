import { Facebook02Icon, InstagramIcon, Linkedin02Icon, NewTwitterIcon, X } from '@hugeicons/core-free-icons';
import {HugeiconsIcon, } from  '@hugeicons/react';


export default function Footer() {
    return (
        <footer className="w-full h-[470px] bg-[#7FFBAE] flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-[90%] border-b border-gray-500 pb-10">
           <div className="flex w-full items-center justify-between">
           <div>
            <h2 className="text-[20px] font-bold text-[#5B5B5B]">
            Antartes
           </h2>
           <p className="text-[#5B5B5B] font-normal text-[15px] mt-5">We build custom software solutions that <br /> bring your ideas to life</p>

            <div className="flex space-x-4 mt-10">
                <HugeiconsIcon icon={Linkedin02Icon} />
                <HugeiconsIcon icon={Facebook02Icon} />
                <HugeiconsIcon icon={NewTwitterIcon} />
                <HugeiconsIcon icon={InstagramIcon} />
            </div>
           </div>
            
            <div className="flex flex-col">
                <h3 className='text-[20px] font-bold'>Home</h3>
                <ul className='flex flex-col mt-5'>
                    <li>About</li>
                    <li>Case Studies</li>
                    <li>Our Projects</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <h3 className='text-[20px] font-bold'>About</h3>
                <ul className='flex flex-col mt-5'>
                    <li>About</li>
                    <li>Case Studies</li>
                    <li>Our Projects</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <h3 className='text-[20px] font-bold'>Services</h3>
                <ul className='flex flex-col mt-5'>
                    <li>SEO</li>
                    <li>Project Manager</li>
                    <li>Social Media</li>
                    <li>See All</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <h3 className='text-[20px] font-bold'>For Companies</h3>
                <ul className='flex flex-col mt-5'>
                    <li className='text-[#5B5B5B] font-normal text-[20px]'>Work with us</li>
                    <li>Contact us</li>
                    <li>Contact us</li>
                    <li>Contact us</li>
                
                </ul>
            </div>

           </div>
        </div>

            

        <p className="text-[#5B5B5B] font-normal text-[15px] mt-10">© 2024 Antartes. All rights reserved.</p>
        </footer>
    )
}