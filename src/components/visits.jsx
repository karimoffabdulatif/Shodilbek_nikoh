import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Visits = () => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [guests, setGuests] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success'); // success, error, info, warning

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !attendance || !guests) {
      setMessage("Iltimos, barcha maydonlarni to‘ldiring.");
      setSeverity("error");
      setOpen(true);
      return;
    }

    // Bu yerda hozircha faqat forma to'g'riligi tekshiriladi.
    setMessage("✅ So'rovingiz muvaffaqiyatli yakunlandi!");
    setSeverity("success");
    setOpen(true);

    // Formani tozalash
    setName('');
    setAttendance('');
    setGuests('');
  };

  return (
    <motion.section
      className='tasdiq pt-20 sm:pt-30 sm:pb-20'
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* NOTIFICATION */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>

      <p className='petit-formal-script-regular flex justify-center sm:pl-5 text-[55px] sm:text-[60px]'>Tasdiq</p>
      <p className='font-serif text-center text-[22px] sm:text-2xl flex justify-center pb-[40px]  sm:pb-20'>
        Iltimos, 2025 yil 21 iyunga qadar ishtirokingizni tasdiqlang
      </p>

      <form onSubmit={handleSubmit} className="space-y-10 pl-12 sm:pl-0">
        {/* Ism maydoni */}
        <div>
          <input
            type="text"
            name="fullname"
            placeholder="Ism va familiyangizni yozing"
            className="w-[300px] sm:w-full text-[18px] border-b border-gray-700 px-4 bg-transparent placeholder-left"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Kela olasizmi? */}
        <div className="space-y-4 text-xl">
          <label className="font-serif block">Ishtirok holati:</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="attendance" value="yes" checked={attendance === 'yes'} onChange={(e) => setAttendance(e.target.value)} className="accent-gray-800" />
              <span className='font-serif'>Men kela olaman</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="attendance" value="no" checked={attendance === 'no'} onChange={(e) => setAttendance(e.target.value)} className="accent-gray-800" />
              <span className='font-serif'>Men kela olmayman</span>
            </label>
          </div>
        </div>

        {/* Kim bilan kutaylik? */}
        <div className="space-y-4 text-xl">
          <label className="font-serif block">Kim bilan kutaylik?</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="guests" value="alone" checked={guests === 'alone'} onChange={(e) => setGuests(e.target.value)} className="accent-gray-800" />
              <span className='font-serif'>Yolg‘iz bo‘laman</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="guests" value="with-partner" checked={guests === 'with-partner'} onChange={(e) => setGuests(e.target.value)} className="accent-gray-800" />
              <span className='font-serif'>Hamroh bilan kelaman</span>
            </label>
          </div>
        </div>

        {/* Jo'natish tugmasi */}
        <div className="flex justify-center sm:justify-start">
          <button
            type="submit"
          className="bg-black text-white justify-center ml-20 sm:ml-[550px] flex items-center text-[16px] sm:text-[18px] px-10 py-2 rounded-full border-2 border-black hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg sm:mt-6 animate-pulse"
          >
            Jo'natish
          </button>
        </div>
      </form>

      {/* Izoh matni */}
      <p className='font-serif text-center pr-12 sm:pr-0 pb-10 sm:pb-0 pt-10 sm:pt-12 sm:text-[22px]'>
        Agar siz boshqa davlatdan kelsangiz, biz sizni mamnuniyat bilan kutib olamiz va mehmonxona xonasini bron qilishga tayyormiz.
        Iltimos, bu haqda oldindan quyida ko‘rsatilgan telefon raqamiga <span className='font-sans font-semibold'>[Shodilbek: +998934681014]</span> xabar bering.
      </p>
    </motion.section>
  );
};

export default Visits;
