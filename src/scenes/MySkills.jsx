import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills =() => {
 const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className="pt-1 pb-30 md:h-full ">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                  <p className="font-playfair font-semibold text-4xl mb-1">
                        MY <span className="text-red">SKILLS</span>
                  </p>
                  <LineGradient width="w-1/3"/>
                  <p className="mt-10 mb-3 flex xs:grid xs:grid-cols-6 sm:grid sm:grid-cols-4 gap-4">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width="40" height="40"/> 
                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/>
                    <img src="../assets/postman.svg" alt="postman" width="40" height="40"/>
                    <img src="../assets/nodejs.svg" alt="postman" width="40" height="40"/>
                    <img src="../assets/visualstudio.svg" alt="postman" width="40" height="40"/>
                  </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                         <div 
                         className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                          before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                      >
                       <img 
                         alt="skills"
                         className="z-10"
                         src="assets/skills-image.png"
                       />
                     </div>
                    ): (
                        <img alt="skills" className="z-10" src="assets/skills-image.png"/>
                    )}
                </div>
            </div>
            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 mb-10 gap-32">
            {/* EXPERIENCE */}
              <motion.div
                  className="md:w-1/3 mt-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5}}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                  }}
              >
            <div className="relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-4xl">O1</p>
                    <p className="font-playfair font-semibold text-3xl mt-2">
                        Experience
                    </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
                <p className="mt-10 font-playfair">
                  I have honed my problem-solving and critical thinking skills through coursework and practical projects,
                  & I am confident in my ability to contribute to the development of software solutions.
                  I am eager to continue learning and growing in this field.
                </p>
            </div>
              </motion.div>

               {/* INNOVATIVE */}
               <motion.div
                  className="md:w-1/3 mt-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay:0.2, duration: 0.5}}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                  }}
              >
            <div className="relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-4xl">O2</p>
                    <p className="font-playfair font-semibold text-3xl mt-2">
                        Innovative
                    </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"/>
                <p className="mt-10 font-playfair ">
                    If you have always done it that way, it is probably wrong.
                </p>
            </div>
              </motion.div>

               {/* IMAGINATIVE */}
               <motion.div
                  className="md:w-1/3 mt-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.5}}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                  }}
              >
            <div className="relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">O3</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">
                    Imaginative
                    </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
                <p className="mt-8 font-playfair text-l">
                 Imagination is the beginning of creation. You imagine what you desire,
                 you will what you imagine, and at last, you create what you will.
                </p>
            </div>
              </motion.div>
            </div>
        </section>
    )
}

export default MySkills;