import React from 'react'
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonialStyle = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
    justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id="testimonials" className='pt-32 pb-16'>
        {/* HEADING */}
        <motion.div
            className="md:w-1/3 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5}}
            variants={{
                       hidden: { opacity: 0, x: -50 },
                       visible: { opacity: 1, x: 0 },
                   }}
                >
                 <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                       TESTIMONIALS
                 </p>
                 <LineGradient width="w-1/3"/>
                 <p className="mt-10 font-playfair text-xl">
                   What others have to say
                 </p>
        </motion.div>
          {/* TESTIMONIALS */}
          <div className='md:flex md:justify-between gap-8'>
                <motion.div
                      className={`bg-blue ${testimonialStyle} before:content-person1`  }
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5}}
                      variants={{
                                 hidden: { opacity: 0, scale: 0.8 },
                                 visible: { opacity: 1, scale: 1 },
                             }}
                >
                    <p className='font-playfair text-center text-3xl'>Lufuno Mulaudzi</p>
                    <p className='font-playfair text-center text-xl'>Software Engineer</p>
                    <p className='text-center font-playfair mb-0 mt-3 text-l'>
                         "Calvin is a passionate and solutions driven Software Engineer
                         with a keen eye for details and never-ending bag of ideas"
                    </p>
                </motion.div>

                <motion.div
                      className={`bg-red ${testimonialStyle} before:content-person2`  }
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.2 , duration: 0.5}}
                      variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                             }}
                >
                    <p className='font-playfair text-center text-3xl'>Kyle Kretschmer</p>
                    <p className='font-playfair text-white text-center text-xl'>Software Developer</p>
                    <p className='text-center font-playfair text-xl mt-3'>
                     "Always willing to learn new concepts and arrises to any challenge"
                    </p>
                </motion.div>

                <motion.div
                      className={`bg-yellow ${testimonialStyle} before:content-person3`  }
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay:0.4, duration: 0.5}}
                      variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                             }}
                >
                    <p className='font-playfair text-center text-3xl'>Lebo Makhetha</p>
                    <p className='font-playfair text-white mb-3 text-center text-l'>AWS Cloud Support Associate</p>
                    <p className='text-center font-playfair text-xl mt-1'>
                        "Professional and clear in all communications, which I appreciate."
                    </p>
                </motion.div>
          </div>
    </section>
  )
}

export default Testimonials