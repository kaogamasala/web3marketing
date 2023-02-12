'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const handleClick = () => {
  // 新規タブを開いて遷移
  window.open('https://www.google.co.jp/maps/place/Digital+Garage/@35.6541816,139.6969383,16z/data=!3m1!5s0x60188b468b3497d5:0xcaaef20d09edf33f!4m5!3m4!1s0x60188b4689f7a449:0x662273f7372970f3!8m2!3d35.6462464!4d139.7036923?hl=en&coh=164777&entry=tt');
};

const Submit = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        {/* <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter the web3 Marketing</h4>  */}
        <button onClick={handleClick} type="button" className="flex items-center h-fit py-4 px-6 bg-[#817EED] rounded-[32px] gap-[12px]">
          <img 
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">Access to Event</span>
        </button>
      </div>
    </div>
  </motion.footer>
);

export default Submit;
