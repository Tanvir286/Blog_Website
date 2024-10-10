import React, { useEffect, useState } from "react";
import Typography from "../layout/Typography";
import Box from "../layout/Box";
import ArticleCard from "../layout/ArticleCard";
import axios from "axios";

const AllArticle = () => {
  const [blog, setBlog] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get("http://localhost:14261/user/allblog");
        setBlog(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching the blog data", error);
      }
    };
    getData();
  }, []); // Dependency array is empty to fetch data only on mount

  return (
    <section className="container mx-auto bg-white pt-14 pb-[100px]">
      <Typography
        variant="h2"
        className="font-poppins font-bold text-[44px] text-black mb-7 text-center"
      >
        All Articles
      </Typography>

      <Box className="w-[700px] mx-auto flex justify-center gap-y-10 gap-x-7 flex-wrap">
        {blog && blog.length > 0 ? (
          blog.map((item, index) => (
            <ArticleCard
              key={item._id} 
             
              image={`http://localhost:14261${item.image}`}
              heading={item.title}
              description={item.description} 
              className="w-[48%] cursor-pointer"
            />
          ))
        ) : (
          <Typography variant="body1" className="text-center">
            No articles available.
          </Typography>
        )}
      </Box>
    </section>
  );
};

export default AllArticle;
