import React from 'react'
import SpeedyBuy from '../assets/speedyBuy.png'
import speedySocial from '../assets/speedySocial.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import ReactImg from '../assets/react.png'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom/dist'

export const HomeProjects = () => {
  const navigate = useNavigate();

  const handleViewAllProjects = () => navigate("/projects")
  return (
    <div name="home-projects" className='w-full md:h-[100%] text-gray-300 bg-slate-950'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full  md:h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#87CEEB]'>Projects</p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>

        {/* projects container */}
        <div className='grid grid-cols-1 gap-10'>

          {/* project card */}
          <div className='bg-gray-800 mx-5 p-5 rounded-sm flex flex-col md:flex-row items-center justify-around'>
            <div>
              <img className='w-[350px] m-auto my-1 rounded-sm' src={SpeedyBuy} alt="app-img" />
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-[#87CEEB] text-lg md:text-2xl mb-3 text-center font-bold'>
                SpeedyBuy - An Ecommerce App</h3>
              <p className='mb-3 w-[88%] text-center'> An e-commerce app where users can buy online cloths.</p>
              <div className='flex gap-4 mb-5'>
                <span>
                  <img className='w-5 h-5' src={ReactImg} alt="REACT ICON" />
                </span>
                <span>
                  <img className='w-5 h-5' src={CSS} alt="CSS ICON" />
                </span>
              </div>

              <div className='flex'>
                <a href='https://speedybuy.netlify.app/' target='_blank' rel="noreferrer" className='bg-[#87CEEB] border-2  border-slate-900 hover:bg-[#5ed0fe] text-slate-950 px-3 md:px-6 py-1 my-2 mr-3 flex items-center duration-200'>Live</a>

                <a href='https://github.com/arjunrajput18/speedyBuyWeb' target='_blank' rel="noreferrer" className='bg-[#87CEEB] border-2  border-slate-900 hover:bg-[#5ed0fe] text-slate-950 px-3 md:px-6 py-1 my-2 mr-3 flex items-center duration-200'>Code</a>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='bg-gray-800 mx-5 p-5 rounded-sm flex flex-col md:flex-row items-center justify-around'>

            <div className='flex flex-col items-center'>
              <h3 className='text-[#87CEEB] text-lg md:text-2xl mb-3 text-center font-bold'>
                SpeedySocial - Social Media App</h3>
              <p className='mb-3 w-[88%] text-center'> The social media app where users can connect with people..</p>
              <div className='flex gap-4 mb-5'>
                <span>
                  <img className='w-5 h-5' src={ReactImg} alt="REACT ICON" />
                </span>
                <span>
                  <img className='w-5 h-5' src={CSS} alt="CSS ICON" />
                </span>
              </div>

              <div className='flex'>
                <a href='https://speedysocial.netlify.app/' target='_blank' rel="noreferrer" className='bg-[#87CEEB] border-2  border-slate-900 hover:bg-[#5ed0fe] text-slate-950 px-3 md:px-6 py-1 my-2 mr-3 flex items-center duration-200'>Live</a>

                <a href='https://github.com/arjunrajput18/SpeedySocial' target='_blank' rel="noreferrer" className='bg-[#87CEEB] border-2  border-slate-900 hover:bg-[#5ed0fe] text-slate-950 px-3 md:px-6 py-1 my-2 mr-3 flex items-center duration-200'>Code</a>
              </div>
            </div>
            <div>
              <img className='w-[350px] m-auto my-1 rounded-sm' src={speedySocial} alt="app-img" />
            </div>
          </div>

        </div>


        <div className='mt-8 self-center '>
          <button onClick={handleViewAllProjects} className='bg-[#87CEEB] border-2  border-[#87CEEB] text-slate-950 px-4 md:px-6 py-1 md:py-2 my-2 flex items-center hover:bg-[#5ed0fe] duration-200'>View All Projects
            <span className='ml-2 duration-300'><HiArrowNarrowRight /></span>
          </button>
        </div>

      </div>
    </div>
  )
}
