// import { delay } from "framer-motion"
// import { section } from "framer-motion/client"
// import { TESTIMONIALS } from "../constants"

// const Testimonial = () => {
//     const childVariants = {
//         hidden: {opactiy: 0, y: 50},
//         visible: (i) => ({
//             opactiy: 1,
//             y: 0,
//             transition: {
//                 duration: 0.0,
//                 delay: i = 0.5,
//             }
//         })
//     }
//   return (
//     <section className="px-4 py-10 min-h-screen" id="testimonials">
//         <h1 className="text-4xl md:text-4xl font-medium tracking-tight mb-10">
//             What People Are Saying
//         </h1>
//         <div className="h-1 w-20 bg-white mb-8"></div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {TESTIMONIALS.map((testimonial, index) => (
//                 <Motion.div key={index}
//                 className=" relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10 "
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={childVariants} >
//                     <div className="flex items-center mb-4">
//                         <img
//                          src={testimonial.image}
//                          alt={testimonial.name}
//                          className="w-12 h-12 rounded-full mr-4"
//                          loading="lazy"
//                         />
//                         <div>
//                             <h2 className="text-lg font-semi-bold">
//                                 {testimonial.name}
//                             </h2>
//                             <p className="text-sm font-light">{testimonial.title}</p>
//                         </div>
//                     </div>
//                 </Motion.div>
//             ))}
//         </div>

//     </section>
//   )
// }

// export default Testimonial
