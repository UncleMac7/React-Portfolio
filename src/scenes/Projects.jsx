import React from 'react'
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1}
}

const Project = ({title, info,githubLink, liveSite }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center rounded-md p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className='text-2xl font-playfair'>{title}</p>
                <p className='mt-7'>
                    {info}
                </p>
                <div className='flex justify-between mt-10 gap-10'> 
                    <a className=" bg-red p-1 rounded-md font-playfair " href={githubLink} target="_blank" rel="noreferrer"> GitHub </a>
                    <a className=" bg-red p-1 rounded-md font-playfair" href={liveSite} target="_blank" rel="noreferrer"> Live site </a>
                </div>
                
            </div>
            <img className='rounded-md' src={`../assets/${projectTitle}.png`} alt={projectTitle}/>
        </motion.div>
    )
}

const Projects = () =>  {
  return (
    <section id="projects" className='pt-40 pb-48'>
        {/* HEADINGs */}
        <motion.div
                    className="md:w-2/4 mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div>
                        <p className="font-playfair font-semibold text-4xl">
                          <span className="text-red">PRO</span>JECTS
                        </p>
                        <div className='flex justify-center mt-5'>
                        <LineGradient width="w-1/3"/>
                        </div>
                    </div>
                 
                  <p className="mt-10 mb-10 font-playfair text-xl">
                    Hover over to any project to learn more.
                  </p>
                </motion.div>

                {/* PROJECTS */}
                <div className='flex justify-center'>

                    <motion.div  
                        className="sm:grid sm:grid-cols-2 gap-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={container}>

                            <div className='flex justify-center text-center items-center p-10 bg-red
                              max-w-[570px] max-h-[400px] text-2xl font-playfair font-semibold rounded-md'
                              >
                                BEAUTIFUL USER INTERFACES
                            </div>
                            <Project title="Project 1"
                             info="A Fullstack Social Media application using MERN, FRONTEND uses:

                             React,
                             Formik,
                             Redux toolkit,
                             React dropzone,
                             BACKEND uses:
                             
                             Nodejs,
                             Express,
                             Mongoose,
                             Json web Toolkit,
                             Multer "
                             githubLink="https://github.com/UncleMac7/OrionConnect-Social-Media-App"
                             liveSite="https://orionconnect.netlify.app/"/>

                            <Project title="Project 2"
                              info="A Fullstack Blog application using MERN stack, you can use this for your portfolio or for learning purposes.
                              FRONTEND uses: React, axios, react-dom, react-router-dom, sass.
                              BACKEND uses:
                              Nodejs, Express, Mongoose, Json web Toolkit, Multer"
                              githubLink="https://github.com/UncleMac7/Orion-Sports-Tech-Blog"
                              liveSite="https://orionblog.netlify.app/"/>

                            {/* ROW 2 */}
                            <Project title="Project 3"
                              info="A Fullstack E-commerce app built with mySQL, React, JavaScript, Scss, Strapi & Stripe.
                              Backend still has to be deployed since heroku terminated their services but server code availabe on github."
                              githubLink="https://github.com/UncleMac7/OrionStore"
                              liveSite="https://orion-store-api.vercel.app "/>
                            <Project title="Project 4"
                              info="A Blog design template for Js, HTML & SASS"
                              githubLink="https://github.com/UncleMac7/Nuntium-desktop-blog-Frontend-"
                              liveSite="https://nuntium-blog.netlify.app"/>

                            <div className='flex justify-center text-center items-center p-10 bg-blue
                              max-w-[570px] max-h-[400px] text-2xl font-playfair font-semibold rounded-md'
                              >
                                SMOOTH USER EXPERIENCE
                            </div>
                    </motion.div>
                </div>
    </section>
  )
}

export default Projects;