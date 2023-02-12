'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from '../styles';
import  { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText 
        title="| about"
        textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-bold text-white">web3</span>
        <span className="font-light">時代のマーケティングは、Webの分散化によってこれまでとは異なるものにならざるを得ません。</span>
        {/* <span className="font-bold text-white">web3に、マーケティング</span> */}
        <span className="font-light">単に広告を通じて製品やサービスを押し付けるのではなく、ユーザーとの関係を築き、ユーザーにとっての価値とは何かを創造をすることが求められています。</span>
        <span className="font-bold text-white">DG web3 Marketing Event</span>
        <span className="font-light">は、次の時代のマーケティング活動とは何か？を、みなさんと一緒に創造していくコミュニケーションの場を醸成できればと考えています。</span>
      </motion.p>

      <motion.img 
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
