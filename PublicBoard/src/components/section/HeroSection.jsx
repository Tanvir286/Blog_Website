import React from "react";
import Image from "../layout/Image";
import heroSectionImage from "/public/images/hero-section-image.png";
import Box from "../layout/Box";
import Typography from "../layout/Typography";

const HeroSection = () => {
  return (
    <section className="container mx-auto pt-[160px] bg-white">
      <Box className={`w-[60%] mx-auto relative after:w-[700px] after:h-[3px] after:bg-black after:absolute after:left-2/4 after:-translate-x-2/4 after:bottom-0 after:rounded-t-[20px]`}>
        <Image
          src={heroSectionImage}
          alt={"random-image"}
          className={`w-full mb-10`}
        />

        <Typography
          variant="h2"
          className={`font-poppins font-bold text-[54px] text-black text-center mb-8`}
        >
          A few words about this blog platform, Ghost, and how this site was made
        </Typography>

        <Typography
          variant="h2"
          className={`w-[592px] mx-auto font-poppins font-normal text-xl text-black text-center pb-8`}
        >
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </Typography>
      </Box>
    </section>
  );
};

export default HeroSection;
