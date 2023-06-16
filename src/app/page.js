"use client"
import Image from "next/image"
import Link from "next/link"
// import AOS from "aos";
// import 'aos/dist/aos.js';
import { useEffect, useState } from "react"
import ButtonComponent from "@/components/button/ButtonComponent"
import FormREQ from "@/components/home/FormREQ"

const imageBanner = "/assets/image/home/home-banner.png"
const imageWatermark = "/assets/image/home/watermark-photo.png"
const imagecertificate = "/assets/image/home/certificate-photo.png"

//color bg
const darkBACKGROUND = " dark:bg-slate-950 "
const lightBackground = " bg-white "

//padding section
const paddingSection = " pb-20 "


 
let descriptionTutorials_two ="	Start by designing a certificate template that includes relevant information such as the recipient name, the title of the certificate, the issuing organization name and logo, a description of the achievement, and any additional details you want to include. This template can be created using graphic design software or online certificate design tools."
export default function Home() {
//description Tutorials
const [showMore, setShowMore] = useState(false);
const [showMore_one, setShowMore_one] = useState(false);
const toggleText = () => {
  setShowMore(!showMore);
};
const toggleText_one = () => {
	setShowMore_one(!showMore_one);
  };
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
	return (
		<main
			className={
				darkBACKGROUND + lightBackground + "flex flex-col items-center"
			}
		>
			<section
				className={
					paddingSection +
					lightBackground +
					darkBACKGROUND +
					"xl:w-[1290px] flex  justify-between pt-14 max-sm:px-5 max-sm:pt-7 md:px-5 max-md:px-5"
				}
			>
				<div className='pt-16 ps-5 max-sm:pt-4'>
					<h3 className='font-bold leading-relaxed tracking-wider  text-[#222] dark:text-[#ffff] pb-5 max-sm:hidden max-sm:pb-5'>
						GET YOUR DESIGNS NOW
					</h3>
					<h1 className='pb-5 font-extrabold text-5xl leading-11 text-[#222] dark:text-[#ffff] max-sm:text-[20px]  max-sm:py-5 max-md:text-[30px] md:text-[40px] '>
						Better Solution For Your Designs Watermark And Generate Certificate
					</h1>
					<p className='pb-5 text-[#222] dark:text-[#fff] max-sm:hidden max-md:hidden'>
						Level up your content with customizeable watermarks and create
						stunning certificates effortlessly on our website.
					</p>
                    <Link href="#" className="">
                        <button type='button' class={" focus:outline-none text-white bg-[#E85854] hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-[16px] text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 max-sm:text-[10px] max-sm:py-[5px] max-sm:px-[10px] max-sm:items-center max-sm:mb-0"}>
                             <p className="mx-5">Get Start</p> 
                        </button>
                    </Link>
				</div>
				<Image
					alt='banner'
					src={imageBanner}
					width={586}
					height={484}
					className='lg:w-[586px] lg:h-[484px] top-5 md:w-[300px] max-sm:w-[200px] max-sm:h-[200px] max-md:h-[300px] max-md:w-[300px] md:h-[300px] md:pt-2 '
				/>
			</section>
			<section
				class={
					paddingSection +
					lightBackground + 
					darkBACKGROUND + 
					"xl:w-[1290px] w-full  max-sm:px-5 px-5  "
				}
			>
				<div className=' max-sm:p-0'>
					<h1 className='text-center pb-14 text-5xl font-bold dark:text-slate-300 text-slate-950 max-sm:text-[24px]'>
						Our Service
					</h1>
					<div className='flex flex-wrap  max-sm:flex-col justify-between'>
						<div className='lg:w-[49%] w-[90%] p-10 watermark   flex max-sm:w-full max-sm:p-4 mb-[18px] md:w-full max-md:w-full '>
							<div className=''>
								<h2 className='text-3xl text-[#222] dark:text-white font-bold max-sm:text-[20px] '>
									Watermark
								</h2>
								<p className=' py-10 max-sm:text-[12px] dark:text-white max-sm:py-0 max-sm:pb-[15px]'>
									A watermark is a faint or translucent image or text that is
									overlaid on a digital document, photograph, or video to
									indicate ownership or provide copyright protection.
								</p>
								<ButtonComponent
									name='Edit Watermark'
									goto='#'
									type='button'
									isBold={true}
								/>
							</div>
							<Image
								alt='water mark'
								src={imageWatermark}
								width={200}
								height={200}
								className='max-sm:w-[150px]  max-sm:h-[150px]  md:w-[250px] md:h-[250px] max-md:w-[250px] max-md:h-[250px]'
							/>
						</div>



				 
						<div className='lg:w-[49%] w-[90%]  certificate p-10 flex max-sm:w-full max-sm:p-4 mb-[18px] md:w-full max-md:w-full  '>
							<div className=''>
								<h2 className='text-3xl text-[#222] dark:text-white font-bold  max-sm:text-[20px]'>
									Certificate
								</h2>
								<p className='dark:text-white py-10 max-sm:text-[12px] max-sm:py-0 max-sm:pb-[15px]'>
									A watermark is a faint or translucent image or text that is
									overlaid on a digital document, photograph, or video to
									indicate ownership or provide copyright protection.
								</p>
								<ButtonComponent
									name='Edit Certificate'
									goto='#'
									type='button'
									isBold={true}
								/>
							</div>
							<Image
								alt='certificate'
								src={imagecertificate}
								width={200}
								height={200}
								className='max-sm:w-[150px]  max-sm:h-[150px] md:w-[250px] md:h-[250px] max-md:w-[250px] max-md:h-[250px]'
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				class={
					paddingSection +
					lightBackground +
					darkBACKGROUND +
					"xl:w-[1290px] max-sm:px-5 sm:mt-0 px-5"
				}
			>
				<h1 className='text-center pb-14 text-5xl font-bold  text-slate-950 dark:text-[#fff] max-sm:text-[24px] '>
					Tutorials
				</h1>
				<div className='flex gap-5  justify-between pb-[20px] max-sm:flex-col'>
					<div className='lg:w-1/2 w-[90%]  max-sm:w-full max-sm:h-[200px]'>
						<iframe
							className='rounded-[26px] max-sm:mb-[18px]'
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/GYkq9Rgoj8E'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
					</div>
					<div className='lg:w-1/2 w-[90%] p-10 bg-[#e9e8e8] rounded-[26px] max-sm:w-full max-sm:p-4'>
						<h2 className='text-3xl text-[#111] font-bold max-sm:text-[20px]  max-sm:text-center max-sm:leading-[25px]'>
							Add Custom Watermark to Photos in 4 minute
						</h2>
						<p className='py-10 text-[#333] max-sm:pt-[15px] max-sm:text-[12px] max-sm:pb-[20px] '>
							Watermark photos right in your browser. Add custom ​​watermarks with your logo and text. Make multi-part watermarks. Add transparent and opaque watermarks
							{showMore_one ? (
								<>
							.Resize photos before publishing online. Import photos from your computer, Google Drive or Dropbox. Instant uploads and downloads. Watermark pictures without waiting in line. Use it for free with optional paid options.
						    	</>
							) : (	<span id='dots'>...</span>)}
							 
						</p>
						<button
							onClick={toggleText_one}
							className='focus:outline-none text-white bg-[#E85854] hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-[16px] text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 max-sm:text-[10px] max-sm:py-[5px] max-sm:px-[10px] max-sm:items-center max-sm:mb-0'
						>
							{showMore_one ? 'read less' : 'read more...'}
						</button>
					</div>
				</div>
				<div className='flex justify-between max-sm:flex-col-reverse'>
				<div className='w-[49%] p-10 bg-[#e9e8e8]  rounded-[26px] max-sm:w-full max-sm:p-4'>
						<h2 className='text-3xl text-[#111] font-bold max-sm:text-[20px]  max-sm:text-center max-sm:leading-[25px]'>
							Generate Certificate in 7 minutes
						</h2>
						<p className='py-10 text-[#333] max-sm:pt-[15px] max-sm:text-[12px] max-sm:pb-[20px]'>
							Start by designing a certificate template that includes relevant information such as the recipient name, the title of the certificate, the issuing organization name and logo
							{showMore ? (
							<>
								, a description of the achievement, and any additional details you want to include. This template can be created using graphic design software or online certificate design tools.
							</>
							) : (
							<span id='dots'>...</span>
							)}
						</p>
						<button
							onClick={toggleText}
							className='focus:outline-none text-white bg-[#E85854] hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-[16px] text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 max-sm:text-[10px] max-sm:py-[5px] max-sm:px-[10px] max-sm:items-center max-sm:mb-0'
						>
							{showMore ? 'read less' : 'read more...'}
						</button>
						</div>

					<div className='w-[49%] max-sm:w-full'>
						<iframe
							className='rounded-[26px] max-sm:mb-[18px] max-sm:h-[200px]'
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/ux6zXguiqxM'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
					</div>
				</div>
			</section>
			<section className={
				paddingSection +
				lightBackground + 
				darkBACKGROUND + 
				"xl:w-[1290px] "}>
				<h1 className='text-center pb-14 text-5xl font-bold text-[24px] dark:text-slate-300 text-slate-950'>
					FAQ
				</h1>
				<div className='w-[90%] space-y-5 mx-auto '>
                  <div
                    tabIndex={0}
                    className={'collapse w-fullmb-3 collapse-arrow'}
                    >
                    <div
                        className={lightBackground + darkBACKGROUND + " collapse-title   font-medium"}
                    >
				 
							 <p className= " text-[#222] dark:text-[#fff] max-sm:text-[12px]">
                             CAN I USE MY OWN CUSTOM IMAGE OR LOGO AS A WATERMARK ?
                        </p>
						 
                    
                    </div>
              
                        <div className={lightBackground + darkBACKGROUND + 'collapse-content'}>
                        <p className="text-[#222] dark:text-[#fff] max-sm:text-[12px] bg-[#F6F6F6] dark:bg-slate-950 rounded-[10px] p-3">
                            Yes, You can upload and use your own custom image or logo as a watermark on our website.
                        </p>
                        </div>
              
                    </div>

					<div
                    tabIndex={0}
                    className={'collapse w-fullmb-3 collapse-arrow'}
                    >
                    <div
                        className={lightBackground + darkBACKGROUND + " collapse-title   font-medium"}
                    >
				 
							 <p className= " text-[#222] dark:text-[#fff] max-sm:text-[12px]">
                             CAN I USE MY OWN CUSTOM IMAGE OR LOGO AS A WATERMARK ?
                        </p>
						 
                    
                    </div>
              
                        <div className={lightBackground + darkBACKGROUND + 'collapse-content'}>
                        <p className="text-[#222] dark:text-[#fff] max-sm:text-[12px] bg-[#F6F6F6] dark:bg-slate-950 rounded-[10px] p-3">
                            Yes, You can upload and use your own custom image or logo as a watermark on our website.
                        </p>
                        </div>
              
                    </div>


					<div
                    tabIndex={0}
                    className={'collapse w-fullmb-3 collapse-arrow'}
                    >
                    <div
                        className={lightBackground + darkBACKGROUND + " collapse-title   font-medium"}
                    >
				 
							 <p className= " text-[#222] dark:text-[#fff] max-sm:text-[12px]">
                             CAN I USE MY OWN CUSTOM IMAGE OR LOGO AS A WATERMARK ?
                        </p>
						 
                    
                    </div>
              
                        <div className={lightBackground + darkBACKGROUND + 'collapse-content'}>
                        <p className="text-[#222] dark:text-[#fff] max-sm:text-[12px] bg-[#F6F6F6] dark:bg-slate-950 rounded-[10px] p-3">
                            Yes, You can upload and use your own custom image or logo as a watermark on our website.
                        </p>
                        </div>
              
                    </div>

					<div
                    tabIndex={0}
                    className={'collapse w-fullmb-3 collapse-arrow'}
                    >
                    <div
                        className={lightBackground + darkBACKGROUND + " collapse-title   font-medium"}
                    >
				 
							 <p className= " text-[#222] dark:text-[#fff] max-sm:text-[12px]">
                             CAN I USE MY OWN CUSTOM IMAGE OR LOGO AS A WATERMARK ?
                        </p>
						 
                    
                    </div>
              
                        <div className={lightBackground + darkBACKGROUND + 'collapse-content'}>
                        <p className="text-[#222] dark:text-[#fff] max-sm:text-[12px] bg-[#F6F6F6] dark:bg-slate-950 rounded-[10px] p-3">
                            Yes, You can upload and use your own custom image or logo as a watermark on our website.
                        </p>
                        </div>
              
                    </div>

					<div
                    tabIndex={0}
                    className={'collapse w-fullmb-3 collapse-arrow'}
                    >
                    <div
                        className={lightBackground + darkBACKGROUND + " collapse-title   font-medium"}
                    >
				 
							 <p className= " text-[#222] dark:text-[#fff] max-sm:text-[12px]">
                             CAN I USE MY OWN CUSTOM IMAGE OR LOGO AS A WATERMARK ?
                        </p>
						 
                    
                    </div>
              
                        <div className={lightBackground + darkBACKGROUND + 'collapse-content'}>
                        <p className="text-[#222] dark:text-[#fff] max-sm:text-[12px] bg-[#F6F6F6] dark:bg-slate-950 rounded-[10px] p-3">
                            Yes, You can upload and use your own custom image or logo as a watermark on our website.
                        </p>
                        </div>
              
                    </div>

				 
		 
				</div>
			</section >
				{/* tutuorial req */}
			<section className="xl:w-[1290px] w-full px-5  ">
				<h1 className='text-center max-sm:text-[24px] pb-14  text-5xl font-bold dark:text-slate-300 text-slate-950'>
					Tutorials Request
				</h1>
			    <FormREQ/>
			</section>
		</main>
	)
}