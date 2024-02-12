import React, { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
  } from "@material-tailwind/react";
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  import { authorsTableData, projectsTableData } from "@/data";
import axios from 'axios';
import EditPostModal from './EditPostModal';

const EditPosts = () => {
    const [AllBlogsData , setallBlogsData] = useState([])
    const [selectedBlog , setSelectedBlog] = useState<any>({})
    const [blogData , setBlogData] = useState<any>([])
    const [showModal , setShowModal] = useState<any>(false)
    const [openmodal, setopenmodal] = useState<boolean>(false);
    const [modalIsOpen, setIsOpen] = useState<any>(false);
  



    const [open, setOpen] = React.useState(false);
    // const [open, setOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
     useEffect(() => {
          const getAllBlogs = async ()=> {
            const AllBlogs = await axios.get('https://api.etokco.com/Blog/GetAllBlog')
            .then(Response => {
                console.log(Response.data.dataList)
                setallBlogsData(Response.data.dataList)
            })
          } 
          getAllBlogs()
     } , [])

     const selectedItem = async (id:any) => {
      setShowModal(true)
      console.log(showModal);
        // handleOpen()
        // const getOneBlog = await axios.get(`https://api.etokco.com/Blog/GetBlogById?Id=${id}`)
        // .then(Response => {
        //     console.log(Response.data.data)
        //     setBlogData(Response.data.data)
        // })
            setBlogData(id)

     }
    return (
        <div className='mt-10'>
              <Card>
        <CardHeader variant="gradient" color="purple" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            جدول پست ها
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead className=''>
              <tr  className='' >
                {["عنوان","نوع وبلاگ","نویسنده", "نمایش دادن","تاریخ ",  ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5   text-right"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {AllBlogsData.map(
                ({  title, image, id, author, date , blogType , status }, key) => {
                  const className = `py-3 px-5 ${
                    key === AllBlogsData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={id}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={image} alt={id} size="sm" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {/* {name} */}
                              {/* John Michael */}
                              {title}
                            </Typography>
                            {/* <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography> */}
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
            
                          {blogType}
                        </Typography>

                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {/* {job[0]} */}
                          {/* Programator */}
                          {author}
                        </Typography>
                        {/* <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography> */}
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                        //   color={"green"}
                        //   value={"online"}
                          color={status ? "green" : "blue-gray"}
                          value={status ? "نمایش دادن" : "مخفی شده"}
                          className="py-0.5 px-2 text-[11px] font-medium"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {/* {date} */}
        
                          11/01/19
                        </Typography>
                      </td>
                      <td className={className}
                      onClick={() => {
                       setopenmodal(true);
                       selectedItem(id)}
                      }
                       >
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          ویرایش
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <div >
        {openmodal ? (
        <EditPostModal
        setopenmodal={setopenmodal}
        AllBlogsData={AllBlogsData} 
         setallBlogsData={setallBlogsData}
        // handleClose={handleClose} 
        // handleOpen={handleOpen}
        // open={open}
        // setOpen={setOpen}
        blogData={blogData}
          /> 
        ) : null}

      </div>
        </div>
    );
};

export default EditPosts;