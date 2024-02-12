import Link from 'next/link';
import React , {useContext, useState} from 'react';

import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    BellIcon,
    ArrowRightOnRectangleIcon,
    UserPlusIcon,
  } from "@heroicons/react/24/solid";
// context
import { dashboardHandler } from '../../context/dashboardReducer';
// import image from '../public/images/logogreen.svg'
// import image from '../images/dashboard.svg'
// import image from '../images/logowhite.svg'

const dashboardSidebar = () => {
    const [show , setShow] = useState('true')
    const { page , setPage} = useContext(dashboardHandler)


    return (
        <>
        {
        show ? 
        <div className='px-2 lg:hidden flex justify-between items-center '>
    
             <div onClick={() => setShow(!show)} className='px-2 mt-3 lg:hidden'>
             <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
             </svg>
            </div>
            <Link href='/'><img src='../images/Etok.png' className='h-10 w-16' alt="" /></Link>
        </div> : ''}
        {show ? '' : 
                <div onClick={() => setShow(!show)} className='px-2 flex justify-end mt-4 h-4 lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                </div> 
        }
     
        
        <div className={show ?
        'hidden  fixed overflow-y-scroll lg:overflow-y-hidden mt-2 hidescroll sideContanier  lg:block bg-navbarBt   top-0 text-white text-sm font-semibold rounded-lg px-3  lg:my-2   w-56  lg:w-56'
         :
         'block  sideContanier   overflow-y-scroll lg:overflow-y-hidden hidescroll  h-full  mt-2 bg-navbarBt fixed  top-0 text-white text-sm font-semibold rounded-lg px-3  lg:my-2  lg:block w-56  lg:w-56'
          } 
        //   className='bg-navbarBt absolute top-0 text-white text-sm font-semibold rounded-lg px-3  lg:mt-2  lg:block w-56  lg:w-56  '
          >
            <div className='flex items-center  justify-center mt-4 sm:mt-0'>
                <Link href='/'><img src="../images/Etok.png" alt="" className='lg:mt-6 mb-12 h-14 w-20' /></Link>
            </div>
            
            <div className='pb-20 '>
                    <ul className='text-white'>
                    <Link href='#'  className={page.userinfo ? "text-navbarBt hover:text-navbarBt bg-white flex a2" : "flex a2"} onClick={() => setPage({type : 'SET-INFO' })}>
                        <HomeIcon className='h-6 w-6 ml-3 mr-2' />
                            <span>اطلاعات کاربری</span>
                        </Link>
                        <Link href='#' className={page.dailiHabit ? "text-navbarBt hover:text-navbarBt bg-white flex a2" : "flex a2"}   onClick={() => setPage({type : 'SET-DAILI-HABIT' })}>
                        <HomeIcon className='h-6 w-6 ml-3 mr-2 ' />
                            <span>جدول ها</span>
                        </Link>
                        <Link href='#' className={page.workReport ? "text-navbarBt hover:text-navbarBt bg-white flex a2" : "flex a2"}   onClick={() => setPage({type : 'SET-WORK-REPORT' })}>
                        <HomeIcon className='h-6 w-6 ml-3 mr-2' />
                            <span>پروفایل</span>
                        </Link>
          
                        
                
                        <Link href='#' className={page.addPost ? "text-navbarBt hover:text-navbarBt bg-white flex a2" : "flex a2"}      onClick={() => setPage({type : 'SET-ADDPOST' })}>
                        <HomeIcon className='h-6 w-6 ml-3 mr-2' />
                            <span>افزودن پست</span>
                        </Link>
                        <Link href='#' className={page.editPost ? "text-navbarBt hover:text-navbarBt bg-white flex a2" : "flex a2"} onClick={() => setPage({type : "SET-EDITPOST" })}>
                        <HomeIcon className='h-6 w-6 ml-3 mr-2' />
                            <span>مدیریت پست ها</span>
                        </Link>

                      
                        
                     
          
                        <Link href='#' className={page.redirecter ? "focus:text-navbarBt focus:hover:text-navbarBt focus:bg-white flex a2" : "flex a2"}>
                        <HomeIcon className='h-6 w-6 ml-3 mr-2' />
                            <span>خروج</span>
                        </Link>
                    </ul>
            </div>
        </div>
        
        </>
    );
};

export default dashboardSidebar;