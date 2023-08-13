import MainLayout from "@/layout/MainLayout";
import {zoomIn} from "@/utils/motions";
import {motion} from "framer-motion";
import Link from "next/link";
import React, {useRef} from "react";
import {Autoplay, EffectFade, EffectCoverflow} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

type Props = {};

const Membership = (props: Props) => {
  const targetRef = useRef(null);

  return (
    <MainLayout targetRef={targetRef}>
      <main className="text-3xl">
        <div ref={targetRef} className="h-[70vh]  relative">
          <div className="absolute  top-0 left-0 h-full w-full -z-10 pointer-events-none">
            <Swiper
              modules={[Autoplay, EffectFade, EffectCoverflow]}
              autoplay={{delay: 10000}} // Add this to enable autoplay and set the delay between slides
              effect="fade" // Add this to enable the fade effect
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {/* <SwiperSlide>
                <motion.div
                  variants={zoomIn(0, 5)}
                  whileInView="show"
                  initial="hidden"
                  viewport={{once: false, amount: 0}}
                  className="h-[70vh]"
                >
                  <img
                    className="h-full w-full object-cover"
                    src="/slide1.jpg"
                    alt=""
                  />
                </motion.div>
              </SwiperSlide> */}
              <SwiperSlide>
                <motion.div
                  variants={zoomIn(0, 5)}
                  whileInView="show"
                  initial="hidden"
                  viewport={{once: false, amount: 0}}
                  className="h-[70vh]"
                >
                  <img
                    className="h-full w-full object-cover"
                    src="/slide2.jpg"
                    alt=""
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  variants={zoomIn(0, 5)}
                  whileInView="show"
                  initial="hidden"
                  viewport={{once: false, amount: 0}}
                  className="h-[70vh]"
                >
                  <img
                    className="h-full w-full object-cover"
                    src="/slide10.png"
                    alt=""
                  />{" "}
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="absolute  top-0 left-0 w-full h-full p-4 bg-transparent flex flex-col gap-8 justify-center items-center">
            <div className="text-[2.8rem] text-white">Membership</div>
          </div>
        </div>
        <div className="font-poppins p-4 bg-white text-black flex flex-col gap-6 pt-12 justify-center items-center">
          <h3 className="font-montserrat text-center text-2xl md:text-3xl">
            FETHOME DISCREET CLUB MEMBERSHIP FORM
          </h3>
          <p className="text-lg text-center max-w-[40rem]">
            Kindly download and fill the membership form. After filling the
            form, please submit via email to{" "}
            <Link
              className="text-red-400"
              href={`mailto:support@fethomediscreetclub.com`}
            >
              support@fethomediscreetclub.com
            </Link>{" "}
            or contact us via the live chat. For membership payments, also
            contact us via email or live chat.
          </p>
          <div>
            <button className="text-white font-montserrat text-[18px] bg-red-700 p-2 px-4 sm:p-4 sm:px-8 sm:text-2xl rounded-lg transition-all hover:bg-red-600">
              Download Membership Form
            </button>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Membership;
