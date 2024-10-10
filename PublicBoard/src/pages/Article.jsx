import React, { useEffect, useState } from "react";
import Image from "../components/layout/Image";
import Box from "../components/layout/Box";
import Typography from "../components/layout/Typography";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  let { param } = useParams();
  console.log(param);

  const [singleblog, setSingleBlog] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`http://localhost:14261/user/singleblog/${param}`);
        setSingleBlog(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching the blog data", error);
      }
    };
    getData();
  }, []); // Dependency array is empty to fetch data only on mount

  return (
    <section className="pt-[160px] pb-[120px] bg-white">
      <Box>
        <Box className="container mx-auto">
          <Box className="w-[60%] mx-auto">
            <Typography
              variant="h2"
              className="font-poppins font-bold text-[54px] text-black text-center mb-8"
            >
              {singleblog[0]?.title}
            </Typography>
          </Box>
        </Box>

        {/* Wrapping the image inside a div to control centering */}
        <Box className="flex justify-center">
          <Image
            src={`http://localhost:14261${singleblog[0]?.image}`}
            alt={"random-image"}
            className="w-[750px] mb-10"
          />
        </Box>

        {/* Description Section */}
        <Box className="w-[60%] mx-auto flex justify-center text-justify">
          <Typography
            variant="p"
            className="font-poppins text-[18px] text-black leading-relaxed"
          >
            {/* Safely rendering the HTML description */}
            <div dangerouslySetInnerHTML={{ __html: singleblog[0]?.description }} />
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default Blog;
