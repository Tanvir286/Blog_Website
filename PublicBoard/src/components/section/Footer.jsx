import React from "react";
import Typography from "../layout/Typography";
import List from "../layout/List";
import ListItem from "../layout/ListItem";
import Box from "../layout/Box";

const Footer = () => {
  const serviceList = [
    "Digital product design",
    "Remote work",
    "UX design",
    "Distributed teams",
    "Creativity",
    "Strategy",
    "Suspense",
    "UX design",
    "Growth",
    "Digital product design",
  ];

  return (
    <footer className="bg-black text-white pb-8">
      <Box className="py-6 mb-[105px] flex justify-between">
        {serviceList.map((item, index) => (
          <Typography
            key={index}
            variant="p"
            className="font-poppins font-normal text-xl text-white odd:font-bold"
          >
            {item}
          </Typography>
        ))}
      </Box>

      <Typography
        variant="h3"
        className="font-bold text-[50px] text-white text-center font-nunito mb-4"
      >
        Tech Talk
      </Typography>

      <Typography
        variant="p"
        className="text-lg text-white text-center font-nunito w-[500px] mx-auto mb-8"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus.
      </Typography>

      <List
        className={`flex items-center justify-center gap-7 font-poppins font-medium underline mb-14`}
      >
        <ListItem>Twitter</ListItem>
        <ListItem>Linkedin</ListItem>
        <ListItem>RSS</ListItem>
      </List>

      <Typography className="auto text-center font-poppins font-medium">
        © 2012–2020 Nordic Rose Co. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
