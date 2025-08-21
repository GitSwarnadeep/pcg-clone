import React from 'react'
import BannerImg from "/assets/career/banner_img.png";
import WorkBg from "/assets/career/why_workbg.png";
import WhyworkIcon1 from "/assets/career/why_workicon1.png";
import WhyworkIcon2 from "/assets/career/why_workicon2.png";
import WhyworkIcon3 from "/assets/career/why_workicon3.png";
import ResumeImg from "/assets/career/resume_img.png";
import OurMission from "/assets/career/our_mission.png";
import OurVision from "/assets/career/our_vision.png";
import ProductManagerImg from "/assets/career/product_managerimg.png";
import ProductManagerImg1 from "/assets/career/product_managerimg1.png";
import ProductManagerImg2 from "/assets/career/product_managerimg2.png";
import YoutubeIcon from "/assets/career/youtube_icon.png";
import GalleryImg1 from "/assets/career/empowered_galleryimg1.png";
import GalleryImg2 from "/assets/career/empowered_galleryimg2.png";
import GalleryImg3 from "/assets/career/empowered_galleryimg3.png";
import GalleryImg4 from "/assets/career/empowered_galleryimg4.png";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Career = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // show 3 items at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet and below
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <>
      <Navbar/>
      <section className='bg-white lg:py-20 md:py-5'>
        <div className='container mx-auto px-4 lg:px-24 py-2 flex justify-between items-center'>
            <div className='grid grid-cols-12 gap-4'>
                  <div className='col-span-12 md:col-span-5'>
                     <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold pt-10 lg:mb-4 text-primary" style={{color:"#1E3A8A"}}>
                        Build your future with us
                     </h1>
                     <p className='my-6'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                     </p>
                     <a href='#' className='flex items-center' style={{color:"#1E3A8A"}}>
                      Explore Open Roles <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                      </a>
                  </div>
                  <div className='col-span-12 md:col-span-7'>
                      <img src={BannerImg} alt='banner img' className="w-full h-auto"/>
                  </div>
            </div>
        </div>
      </section>
      <section className="relative bg-cover bg-center p-6 py-5 pb-14" style={{ backgroundImage: `url(${WorkBg})` } }>
          <div className='container mx-auto px-4 lg:px-24 py-2 flex justify-between items-center'>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 md:col-span-12'>
                  <div className='text-center lg:px-36 mb-16'>
                     <h2 className='text-white font-bold my-3 text-3xl sm:text-3xl md:text-4xl lg:text-4xl'>Why work at PCIN</h2>
                     <p className='text-white font-normal my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                  </div>
                  <Slider {...settings}>
                    <div>
                      <div className='bg-white rounded-[10px] p-10 text-center mx-2'>
                        <img src={WhyworkIcon1} className='m-auto'/>
                        <h3 className='text-black my-3 font-semibold text-3xl sm:text-2xl md:text-2xl lg:text-2xl' style={{color:"#3D3D3D"}}>Annual Bonus</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing typesetting.</p>
                      </div>
                    </div>
                    <div>
                      <div className='bg-white rounded-[10px] p-10 text-center mx-2'>
                        <img src={WhyworkIcon2} className='m-auto'/>
                        <h3 className='text-black my-3 font-semibold text-3xl sm:text-2xl md:text-2xl lg:text-2xl' style={{color:"#3D3D3D"}}>Annual adjustment</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing typesetting.</p>
                      </div>
                    </div>
                    <div>
                      <div className='bg-white rounded-[10px] p-10 text-center mx-2'>
                        <img src={WhyworkIcon3} className='m-auto'/>
                        <h3 className='text-black my-3 font-semibold text-3xl sm:text-2xl md:text-2xl lg:text-2xl' style={{color:"#3D3D3D"}}>Employee grants</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing typesetting.</p>
                      </div>
                    </div>
                    <div>
                      <div className='bg-white rounded-[10px] p-10 text-center mx-2'>
                        <img src={WhyworkIcon1} className='m-auto'/>
                        <h3 className='text-black my-3 font-semibold text-3xl sm:text-2xl md:text-2xl lg:text-3xl' style={{color:"#3D3D3D"}}>Annual Bonus</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing typesetting.</p>
                      </div>
                    </div>
                    <div>
                      <div className='bg-white rounded-[10px] p-10 text-center mx-2'>
                        <img src={WhyworkIcon2} className='m-auto'/>
                        <h3 className='text-black my-3 font-semibold text-3xl sm:text-2xl md:text-2xl lg:text-3xl' style={{color:"#3D3D3D"}}>Annual adjustment</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing typesetting.</p>
                      </div>
                    </div>
                  </Slider>
              </div>
            </div>
          </div>  
      </section>
      <section className='bg-white lg:py-10 md:py-5'>
        <div className='container mx-auto px-4 lg:px-24 py-2 flex justify-between items-center'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-12'>
                  <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl lg:mb-4 font-bold' style={{color:"#1E3A8A"}}>Open Positions</h2>
                </div>
                <div className='col-span-12 md:col-span-12'>
                  <Slider {...settings}>
                     <div>
                        <div className='rounded-[10px] p-10 mx-2' style={{background:"#F8F8F8" , border:"1px solid #CECECE"}}>
                           <h6 className='bg-white p-2 text-center rounded-[10px]' style={{border:" 0.4px solid #CECECE" , display:"inline"}}>Marketing</h6>
                           <h3 style={{color:"#3D3D3D"}} className='text-1xl sm:text-1xl md:text-2xl lg:text-2xl mb-3 font-semibold pt-5'>Social Media Intern</h3>
                           <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           </p>
                           <a href='#' style={{border:" 2px solid #1E3A8A" , color:"#1E3A8A" , display:"block"}} className='font-semibold mt-10 mb-3 p-3 text-center rounded-[5px] lg:text-1xl'>Apply Now</a>
                           <a href='#' className='w-100 lg:text-1xl text-center' style={{display:"block"}}>View Details</a>
                        </div>
                     </div>
                     <div>
                        <div className='rounded-[10px] p-10 mx-2' style={{background:"#F8F8F8" , border:"1px solid #CECECE"}}>
                           <h6 className='bg-white p-2 text-center rounded-[10px]' style={{border:" 0.4px solid #CECECE" , display:"inline"}}>management</h6>
                           <h3 style={{color:"#3D3D3D"}} className='text-1xl sm:text-1xl md:text-2xl lg:text-2xl mb-3 font-semibold pt-5'>Talent Acquisition</h3>
                           <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           </p>
                           <a href='#' style={{border:" 2px solid #1E3A8A" , color:"#1E3A8A" , display:"block"}} className='font-semibold mt-10 mb-3 p-3 text-center rounded-[5px] lg:text-1xl'>Apply Now</a>
                           <a href='#' className='w-100 lg:text-1xl text-center' style={{display:"block"}}>View Details</a>
                        </div>
                     </div>
                     <div>
                        <div className='rounded-[10px] p-10 mx-2' style={{background:"#F8F8F8" , border:"1px solid #CECECE"}}>
                           <h6 className='bg-white p-2 text-center rounded-[10px]' style={{border:" 0.4px solid #CECECE" , display:"inline"}}>Accounts</h6>
                           <h3 style={{color:"#3D3D3D"}} className='text-1xl sm:text-1xl md:text-2xl lg:text-2xl mb-3 font-semibold pt-5'>Senior Accountant</h3>
                           <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           </p>
                           <a href='#' style={{border:" 2px solid #1E3A8A" , color:"#1E3A8A" , display:"block"}} className='font-semibold mt-10 mb-3 p-3 text-center rounded-[5px] lg:text-1xl'>Apply Now</a>
                           <a href='#' className='w-100 lg:text-1xl text-center' style={{display:"block"}}>View Details</a>
                        </div>
                     </div>
                     <div>
                        <div className='rounded-[10px] p-10 mx-2' style={{background:"#F8F8F8" , border:"1px solid #CECECE"}}>
                           <h6 className='bg-white p-2 text-center rounded-[10px]' style={{border:" 0.4px solid #CECECE" , display:"inline"}}>Marketing</h6>
                           <h3 style={{color:"#3D3D3D"}} className='text-1xl sm:text-1xl md:text-2xl lg:text-2xl mb-3 font-semibold pt-5'>Social Media Intern</h3>
                           <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           </p>
                           <a href='#' style={{border:" 2px solid #1E3A8A" , color:"#1E3A8A" , display:"block"}} className='font-semibold mt-10 mb-3 p-3 text-center rounded-[5px] lg:text-1xl'>Apply Now</a>
                           <a href='#' className='w-100 lg:text-1xl text-center' style={{display:"block"}}>View Details</a>
                        </div>
                     </div>
                     
                    
                  </Slider>
                </div>
            </div>
        </div>
      </section> 
      <section className='bg-white lg:py-10 md:py-5'>
        <div className='container mx-auto px-4 lg:px-24 py-2 flex justify-between items-center'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-5'>
                    <img src={ResumeImg} style={{width:"100%"}}/>
                </div>  
                <div className='col-span-12 md:col-span-7 lg:pl-10'>
                   <h2 style={{color:"#1E3A8A"}} className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl lg:pr-[168px] font-bold mb-6'>Didn't Find a Role? Upload Your Resume</h2>
                   <p className='mb-8'>We're always hiring great talent. Send us your CV.</p>
                   <form className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 md:col-span-6'>
                            <label style={{color:"#3D3D3D", width:"100%"}}>Full Name</label>
                            <input type='text' className='mt-3 p-3' placeholder='Enter your full name ' style={{background:"#F8F8F8",border:"1px solid #CECECE",borderRadius:"6px", height:"40px", width:"100%", outline:"none"}}/>
                        </div> 
                        <div className='col-span-12 md:col-span-6 mb-3'>
                            <label style={{color:"#3D3D3D", width:"100%"}}>Email Address</label>
                            <input type='text' className='mt-3 p-3' placeholder='Enter your Email ' style={{background:"#F8F8F8",border:"1px solid #CECECE",borderRadius:"6px", height:"40px", width:"100%", outline:"none"}}/>
                        </div> 
                        <div className='col-span-12 md:col-span-12'>
                          <label style={{color:"#3D3D3D", width:"100%"}} className=''>Upload Resume</label>
                          <div className="flex items-center justify-center w-full mt-3">
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
                                </svg>
                                <p className="mb-1 text-sm text-gray-500">
                                  <span className="font-medium text-blue-700">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-400">PDF or DOCX (max. 5MB)</p>
                              </div>
                              <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                          </div>
                          <div className='col-span-12 md:col-span-12'>
                            <button style={{background:"#002F5F", width:"100%", borderRadius:"5px"}} className='p-2 mt-10 text-center text-white'>Send Application</button>
                          </div>
                        </div>
                   </form>
                </div>  
            </div>
        </div>
      </section>  
      <section className='bg-white lg:py-10 md:py-5'>
        <div className='container mx-auto px-4 lg:px-24 py-2 flex justify-between items-center'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-6'>
                  <div className="flex justify-center" style={{flexDirection:"column", height:"100%"}}>
                    <h2 style={{color:"#1E3A8A"}} className='text-3xl sm:text-3xl md:text-3xl lg:text-4xl pr-10 font-bold mb-5'>Our Mission</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                  </div>  
                </div>
                <div className='col-span-12 md:col-span-6'>
                   <img src={OurMission} style={{width:"100%"}}/>
                </div>
                <div className='col-span-12 md:col-span-6'>
                   <img src={OurVision} style={{width:"100%"}}/>
                </div>
                <div className='col-span-12 md:col-span-6'>
                  <div className="flex justify-center pl-10" style={{flexDirection:"column", height:"100%"}}>
                    <h2 style={{color:"#1E3A8A"}} className='text-3xl sm:text-3xl md:text-3xl lg:text-4xl pr-10 font-bold mb-5'>Our Mission</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                  </div>  
                </div>
            </div>  
        </div>
      </section> 
      <section className='bg-white lg:py-10 md:py-5'>
        <div className='container mx-auto px-4 lg:px-24 py-2 flex justify-between items-center'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-12'>
                  <h2 style={{color:"#1E3A8A"}} className='text-3xl sm:text-3xl md:text-3xl lg:text-4xl pr-10 font-bold mb-5'>People are what matters</h2>
                </div>
                <div className='col-span-12 md:col-span-4'>
                  <div style={{border: "1px solid #CECECE", background:"#F8F8F8", borderRadius:"15px"}} className='p-5'>
                    <div style={{position:"relative"}}>
                      <img src={ProductManagerImg} alt='img' style={{width:"100%"}}/>
                      <button command="show-modal" commandfor="dialog">
                        <div class="absolute top-1/2 left-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 transform">
                            <img src={YoutubeIcon} alt='img' style={{width:"100%"}}/>
                        </div>
                      </button>
                    </div>
                    <div>
                       <h3 className='text-2xl sm:text-1xl md:text-2xl lg:text-2xl text-center font-bold pt-0 mb-2' style={{color:"#3D3D3D"}}>Jane Doe</h3>
                       <h5 className='text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-center font-medium' style={{color:"#555555"}}>Product Manager</h5>
                    </div>
                  </div>
                </div>
                <div className='col-span-12 md:col-span-4'>
                  <div style={{border: "1px solid #CECECE", background:"#F8F8F8", borderRadius:"15px"}} className='p-5'>
                    <div style={{position:"relative"}}>
                      <img src={ProductManagerImg1} alt='img' style={{width:"100%"}}/>
                      <button command="show-modal" commandfor="dialog">
                        <div class="absolute top-1/2 left-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 transform">
                            <img src={YoutubeIcon} alt='img' style={{width:"100%"}}/>
                        </div>
                      </button>
                    </div>
                    <div>
                       <h3 className='text-2xl sm:text-1xl md:text-2xl lg:text-2xl text-center font-bold pt-0 mb-2' style={{color:"#3D3D3D"}}>Jane Doe</h3>
                       <h5 className='text-2xl sm:text-1xl md:text-2xl lg:text-2xl text-center font-medium' style={{color:"#555555"}}>Product Manager</h5>
                    </div>
                  </div>
                </div>
                <div className='col-span-12 md:col-span-4'>
                  <div style={{border: "1px solid #CECECE", background:"#F8F8F8", borderRadius:"15px"}} className='p-5'>
                    <div style={{position:"relative"}}>
                      <img src={ProductManagerImg2} alt='img' style={{width:"100%"}}/>
                      <button command="show-modal" commandfor="dialog">
                        <div class="absolute top-1/2 left-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 transform">
                            <img src={YoutubeIcon} alt='img' style={{width:"100%"}}/>
                        </div>
                      </button>
                    </div>
                    <div>
                       <h3 className='text-2xl sm:text-1xl md:text-2xl lg:text-2xl text-center font-bold pt-0 mb-2' style={{color:"#3D3D3D"}}>Jane Doe</h3>
                       <h5 className='text-2xl sm:text-1xl md:text-2xl lg:text-2xl text-center font-medium' style={{color:"#555555"}}>Product Manager</h5>
                    </div>
                  </div>
                </div>
            </div>   
        </div>
      </section>  
      <section className='bg-white lg:py-10 md:py-5'>
        <div className='container mx-auto px-4 lg:px-24 py-2 flex justify-between items-center'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-12'>
                  <h2 style={{color:"#1E3A8A"}} className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl pr-10 font-bold mb-5'>
                    Welcome to Our Empowered Gallery
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .
                  </p>
                </div>
                <div className='col-span-12 md:col-span-12'>
                  <div className=''>
                    <img src={GalleryImg1} alt='Gallery Img' className="w-full"/>
                  </div>
                </div>
                <div className='col-span-12 md:col-span-4 sm:col-span-12'>
                  <div className=''>
                    <img src={GalleryImg2} alt='Gallery Img' className="w-full"/>
                  </div>
                </div>
                <div className='col-span-12 md:col-span-4 sm:col-span-12'>
                  <div className=''>
                    <img src={GalleryImg3} alt='Gallery Img' className="w-full"/>
                  </div>
                </div>
                <div className='col-span-12 md:col-span-4 sm:col-span-12'>
                  <div className=''>
                    <img src={GalleryImg4} alt='Gallery Img' className="w-full"/>
                  </div>
                </div>

            </div>
        </div>
      </section>                       
      <Footer />
<el-dialog>
  <dialog id="dialog" aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
    <el-dialog-backdrop class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

    <div tabindex="0" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
      <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
        <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <iframe width="100%" height="388" src="https://www.youtube.com/embed/NpEaa2P7qZI" title="video placeholder" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          {/* <button type="button" command="close" commandfor="dialog" class="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto">Deactivate</button> */}
          <button type="button" command="close" commandfor="dialog" class="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto" style={{position:"absolute", top:"10px", background:"#ff00008f", fontSize:"20px"}}>
            ×
          </button>
        </div>
      </el-dialog-panel>
    </div>
  </dialog>
</el-dialog>
    
 

    </>
  )
}

export default Career;
