import React from 'react';
import Gl3 from '../assets/kr.jpg';
import { motion } from 'framer-motion';

const Manzil = () => {
  return (
    <>
    <motion.div
          className='text-center sm:text-left'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
      <p className='petit-formal-script-regular text-[50px] text-center pt-[450px] pb-4 sm:hidden'>
        Manzil
      </p>
      <p className='font-serif text-[18px] text-center sm:pl-20 sm:pb-3 sm:text-2xl font-semibold sm:hidden'>
        Shohsaroy tantanalar saroyi
      </p>
       <p className='font-serif text-[18px] text-center sm:text-[20px] sm:w-[520px] mx-auto sm:hidden sm:mx-0'>
          Andijon, Qo'rg'ontepa tumani, Mustaqillik ko'chasi 72-uy. Mo'ljal: Qo'rg'ontepa Istirohat bo'g'i ro'parasi
        </p>
        </motion.div>
      <section className='mx-auto flex flex-col-reverse sm:flex-row sm:flex justify-center items-center sm:gap-[130px]  sm:pt-26 sm:pb-24'>
        <motion.div
          className='text-center sm:text-left'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p className='petit-formal-script-regular pb-4 text-[50px] sm:pb-10 sm:pl-5 sm:text-[70px] hidden sm:block'>
            Manzil
          </p>

          <p className='font-serif text-[18px] sm:pl-20 sm:pb-3 hidden sm:block sm:text-2xl font-semibold'>
            Qirg'iziya tantanlar saroyi
          </p>

          <p className='font-serif text-[18px] text-center sm:text-[20px] hidden sm:block sm:w-[520px] mx-auto sm:mx-0'>
            Andijon, Qo'rg'ontepa tumani, Mustaqillik ko'chasi. Mo'ljal: Qo‘rg‘ontepa tumani hokimligi binosining qarshisida joylashgan tantanali maskan.
          </p>

          <a
            href="https://yandex.uz/maps/190173/kurgantepa/?ll=72.757280%2C40.730215&mode=poi&poi%5Bpoint%5D=72.757588%2C40.730471&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D208002194715&tilt=0.8726646259971648&z=19.11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white sm:ml-[150px] justify-center flex items-center text-[18px] px-10 py-2 rounded-full border-2 border-black hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg mx-auto sm:mx-0 mt-6 animate-pulse">
              Xaritaga qarang
            </button>
          </a>
        </motion.div>

        <motion.div
          className="relative w-[320px] h-[170px] sm:w-[550px] sm:h-[300px] mb-10 sm:mb-0 mt-10 sm:mt-10"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 border bg-gray-200 rounded-3xl -rotate-[13deg] sm:-rotate-[7deg] scale-105 -z-10"></div>

          <img
            src={Gl3}
            alt="img"
            className="w-full h-full border object-cover rounded-2xl"
          />
        </motion.div>
      </section>
    </>
  );

};

export default Manzil;
