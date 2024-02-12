import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import { TextField } from '@mui/material';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { Radio } from "@material-tailwind/react";

const AddPost = () => {
    const [editActived , setEditActived] = useState<any>(false)
    const [editText , setEditText] = useState<any>('')

    const [showImage , setShowImage] = useState(false)
    const [showTextFiled , setShowTextFiled] = useState(false)
    const [blogTypes , setBlogTypes]  = useState([])
    const [typeBlog , setTypeBlog] = useState<any>('')
    const [showBlogTypes , setShowBlogTypes] = useState(false)
    const [idForDetail , setIdForDetail] = useState<any>('')

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageDetails, setSelectedImageDetails] = useState(null);
    const [allBLogDetails , setAllBlogDetails] = useState([])

    const [idForImg , setIdForImg] = useState<any>(false)

    const [blogDetailsEdit , setBlogDetailsEdit] = useState()
    const notify = () => toast.success('با موفقیت ثبت شد',{
      duration: 2000,
      position: 'top-left',
    });
    const notifyError = () => toast.error('همه مقادیر رابه درستی وارد کنید',{
      duration: 2000,
      position: 'top-left',
    });
    

   
    const [hidden , setisHidden] = useState<any>(1)
    const [data , setData] = useState<any>({
      title : null,
      author : null,
      description : null,
      blogTypeId : null,
      addText : null

    })
    console.log(typeBlog);
    console.log(showBlogTypes);
    
    
    

    const changeHandler = (event:any) => {
      setData({ ...data , [event.target.name] : event.target.value})
      console.log(data);
     }
     const changeHandler2 = (event:any) => {
      setEditText(event.target.value)
 console.log(editText);
 
     }  
     const sendData =  async() => {
      if(selectedImage){
       axios.post('https://api.etokco.com/Blog/AddBlog',{
          author: data.author,
          description: data.description,
          title:  data.title,
          blogTypeId: data.blogTypeId,
          isHidden : hidden
       })
       .then(Response => {
        console.log(Response)
        console.log(Response.data.data.id)
        setIdForDetail(Response.data.data.id)
        // notify()
        // sendImgMain()
  
       })
       .catch(error => {
        console.log(error);
        notifyError()
      })
    } else{
      notifyError()
    }
     }

     let formDataMain = new FormData();
     formDataMain.append("file", selectedImage);

     useEffect(() => {
      if(idForDetail) {
        axios.post(`https://api.etokco.com/Image/uploadImage?blogId=${idForDetail}`,formDataMain,{
        })
        .then(Response => {
         console.log(Response);
         // setSelectedImage(null)
         notify()
        })
        .catch(error => {
         console.log(error);
         notifyError()
       })
        
      }
    } , [idForDetail])

     const getDetails  = async () => {
      const AllDetails = await axios.get(`https://api.etokco.com/BlogDetail/GetBlogDetailByBlogId?BlogId=${idForDetail}`)
      .then(Response => {
       console.log(Response);
      //  console.log(AllDetails);
       setAllBlogDetails(Response.data.dataList)
      })
    }
    console.log(allBLogDetails);
    

     const sendDetails = async() => {
      axios.post('https://api.etokco.com/BlogDetail/AddBlogDetail',{
        isImage: false,
        detailContent: data.addText,
        blogId:  idForDetail,
      })
      .then(Response => {
        console.log(Response);
        console.log(Response.data.data.id);
        setData({...data , addText : ''})
        notify()
        getDetails()

      })
      .catch(error => {
        console.log(error);
        notifyError()
      })
     }

     let formData = new FormData();
     formData.append("file", selectedImageDetails);


     useEffect(() => {
      console.log(idForImg);
      
         if(idForImg) {
          axios.post(`https://api.etokco.com/Image/uploadImage?blogDetailId=${idForImg}`,formData,{
          })
          .then(Response => {
            console.log(Response); 
            notify()
            getDetails()          
          })
          .catch(error => {
            console.log(error);
            notifyError()
          })
         }
     } , [idForImg])
     const sendImgDetail = async() => {
      axios.post('https://api.etokco.com/BlogDetail/AddBlogDetail',{
        isImage: true,
        detailContent: '',
        blogId:  idForDetail,
      })
      .then(Response => {
        console.log(Response);
        console.log(Response.data.data.id);
        setIdForImg(Response.data.data.id)
      })
      .catch(error => {
        console.log(error);
        notifyError()
      })


    //  axios.post(`https://api.etokco.com/Image/uploadImage?blogDetailId=${}`,formData)
    //  .then(Response => {
    //   console.log(Response);
    //   setSelectedImageDetails(null)
    //   notify()

    //  })
    //  .catch(error => {
    //   console.log(error);
    //   notifyError()
    // })
     }

    //  useEffect(() => {
    //   sendImgDetail()
    //  } , [idForDetail])

   
     
  //    const sendImgMain = async() => {
  //     if(idForDetail>0){
  //    axios.post(`https://api.etokco.com/Image/uploadImage?blogId=${idForDetail}`,formDataMain,{
  //    })
  //    .then(Response => {
  //     console.log(Response);
  //     // setSelectedImage(null)
  //     notify()
  //    })
  //    .catch(error => {
  //     console.log(error);
  //     notifyError()
  //   })
  // }
  //    }
  //    useEffect(() => {
  //     sendImgMain()
  //    } , [idForDetail])
     

     
   console.log(idForDetail); 
    useEffect(() => {
   const getBlogtypes = async () => {
     const blogTypes = await axios.get('https://api.etokco.com/BlogType/GetBlogType')
     console.log(blogTypes.data.dataList);
     setBlogTypes(blogTypes.data.dataList)
   } 
    
   getBlogtypes()
    } , [])
   useEffect(() => {

     const showBlogItems = async () => {
      if(idForDetail){
        const blogItem = await axios.get(`https://api.etokco.com/BlogDetail/GetBlogDetailByBlogId?BlogId=${idForDetail}`)
        console.log(blogItem);
     }
     showBlogItems()
    }
   } ,)

   const sendToEdit =  (details:any) => {
   axios.post('https://api.etokco.com/BlogDetail/EditBlogDetail', {
      id: details.id,
      isImage: details.isImage,
      detailContent: editText,
      blogId: details.blogId,
      productId: details.productId
   })
   .then(Response => {
    console.log(Response);
    getDetails()
    notify()
   })
  console.log(details);
   }


   const deleteDetails =  (details:any) => {
    axios.get(`https://api.etokco.com/BlogDetail/DeleteBlogDetail?Id=${details.id}`)
    .then(Response => {
     console.log(Response);
     getDetails()
     notify()
    })
   console.log(details);
    }

    


    return (
        <div className='text-black text-base text-right px-10 sm:mt-6 pb-10 '>
          <h2 className='text-xl mb-6'>افزودن پست</h2>  
      <div>

        
{ typeBlog ? 
  <button onClick={() => setShowBlogTypes(!showBlogTypes)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-4" type="button">{typeBlog.typeName}<svg className="w-4 h-4 mr-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
 :
  <button onClick={() => setShowBlogTypes(!showBlogTypes)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-4" type="button">نوع بلاگ<svg className="w-4 h-4 mr-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
}
<div  id="dropdown" className={showBlogTypes ? "z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" :
"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"}>
    <ul className="py-2 text-sm  text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      {blogTypes && blogTypes.map((type:any) => (
        <li onClick={() =>{ 
          setShowBlogTypes(!showBlogTypes)
          setTypeBlog(type)
          setData({...data , blogTypeId : type.id})
        }}key={type.id}  className="block px-4   py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" 
        >{type.typeName}</li>  
      ))}
    </ul>
</div>

<form>
  <div className='flex justify-between'>
  <div className="mb-6 w-2/3">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عنوان پست</label>
    <input name='title' value={data.title} onChange={changeHandler} type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="عنوان پست را وارد کنید" required/>
  </div>
  <div className="mb-8 w-1/3 mr-10">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام نویسنده</label>
    <input  name='author' value={data.author} onChange={changeHandler}
    type="text" placeholder='نام نویسنده را وارد کنید' id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  </div>


  <div className="mb-8">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">توضیحات</label>
    <input  name='description' value={data.description} onChange={changeHandler}
    type="text" placeholder='توضیحات' id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  <div className="flex gap-10">
      <Radio id="html"  onClick={() => setisHidden(1)} name="type" label="نمایش " defaultChecked />
      <Radio id="react" onClick={() => setisHidden(0)} name="type" label="پنهان"  />
    </div>
  

  <div className="mb-1 w-full flex items-center justify-center">  
   <div className="flex mb-10 mt-8 ml-10  h-20 items-center justify-start bg-grey-lighter">
    <label className="w-64 flex flex-col items-center  py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white transition-all ease-in 0.2s">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal"> انتخاب تصویر اصلی </span>
        <input
        type="file"
        name="myImage"
        id='imagesFiles'
        className='hidden'
        onChange={(event:any) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </label>
</div>
{selectedImage &&
  <div className=''>
    <img
            alt="not found"
            width={"160px"}
            className={'h-[70px]'}
            src={URL.createObjectURL(selectedImage)}
          />
       
          <button  className='text-blue-600 mt-2 text-[13px]' onClick={() => setSelectedImage(null)}>حذف عکس</button>
        </div> }
        <div>
  {/* {selectedImage&&<button type="button" onClick={sendImgMain} className=" mr-20 text-blue-700 bg-white hover:text-blue-900 hover-border-blue-900 focus:ring-4 focus:outline-none border-blue-700 border focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6 w-40">ثبت عکس</button>
} */}
  </div>
        
  </div >

  <button type="button" onClick={sendData} className="text-white w-48 mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-9 mb-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ثبت پست </button>


  {idForDetail ? <ul className="grid  w-full gap-6 md:grid-cols-2  mb-6">
    <li className='mb-10' onClick={() =>{ 
        setShowImage(true)
        setShowTextFiled(false)
        
    }}>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required/>
        <label  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div className="block">
                <div className="w-full text-lg font-semibold">افزودن عکس</div>
            </div>
            <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>

    </li>
    <li onClick={() => {
        setShowTextFiled(true)
        
        setShowImage(false)
        }}>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer"/>
        <label  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
                <div className="w-full text-lg font-semibold">افزودن متن</div>
            </div>
            <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

        </label>  
    </li>
</ul>  : ''}

<div>
    
 {showImage &&
 <div className="">
   <div className="mb-5 w-full flex items-center">  
   <div className="flex mb-10 mt-8 ml-10  h-20 items-center justify-start bg-grey-lighter">
    <label className="w-64 flex flex-col items-center  py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white transition-all ease-in 0.2s">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal"> انتخاب تصویر مقاله </span>
        <input
        type="file"
        name="myImage"
        id='imagesFiles'
        className='hidden'
        onChange={(event:any) => {
          console.log(event.target.files[0]);
          setSelectedImageDetails(event.target.files[0]);
        }}
      />
    </label>
</div>
{selectedImageDetails &&
  <div className=''>
    <img
            alt="not found"
            width={"120px"}
            className={'h-[70px]'}
            src={URL.createObjectURL(selectedImageDetails)}
          />
       
          <button className='text-blue-600 mt-2 text-[13px]' onClick={() => setSelectedImageDetails(null)}>حذف عکس</button>
        </div> }
  </div >
  <button type="button" onClick={sendImgDetail} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6 w-32"
  >ثبت عکس</button>

</div>
 }

</div>
 {showTextFiled &&
  <div className='mb-6'>
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">متن مقاله   </label>
<textarea name="addText" value={data.addText} onChange={changeHandler}  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="متن مقاله را وارد کنید"></textarea>
{/* <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6 w-32 mt-6">ثبت متن</button> */}
<button type="button" onClick={sendDetails} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6 mt-5 w-32">ثبت متن</button>

    </div> }

    <div>
     {allBLogDetails&& <h1 className='text-[30px] my-10'>  محتوای مقاله :</h1>}
      {allBLogDetails && allBLogDetails.map((details:any) => (
        <div key={details.id}>
          {details.isImage &&
          <div className='flex  my-2 '>
         <h3 onClick={() => deleteDetails(details)} className='cursor-pointer ml-10'>حذف</h3>
            <img
            alt="not found"
            width={"120px"}
            className={'h-[70px]'}
            src={details.detailContent}
          />
          </div>
           }
           {details.isImage ? '' :
           <div className='border-2 border-gray-100 py-3 w-full px-6 rounded-md mb-8'>
        <div className='flex justify-start my-2 ' >
           <h3 onClick={() => deleteDetails(details)} className='cursor-pointer ml-10'>حذف</h3>
           <h3 onClick={() => {
            setEditActived(details.id)
            setEditText(details.detailContent)
            }}
            className='ml-10 cursor-pointer'>ویرایش</h3>
      
        </div>
        <div  className='break-words w-[700px]' >
        {details.detailContent}
        </div>
        <div className='my-3'>
        {editActived  == details.id && <div className='flex justify-between'>
        <textarea name="editText" value={editText} onChange={changeHandler2}  rows="3" class="block  p-2.5 w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="متن مقاله را وارد کنید"></textarea>
        <h3  onClick={() => sendToEdit(details)} 
        className=" text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6 w-32 mt-6"
        >ثبت</h3>
        </div>
}
        </div>
        </div> }
      
        </div>

      ))}
    </div>
</form>
      <Toaster />
      </div>               
        </div>
    );
};

export default AddPost;