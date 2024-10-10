import React from "react";
import Typography from "../layout/Typography";
import Box from "../layout/Box";
import List from "../layout/List";
import ListItem from "../layout/ListItem";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let navmenu = [
    {
      name: "blog",
      path: "/",
    },
    {
      name: "category",
      path: "/article",
    },
    {
      name: "write blog",
      path: "/write-blog",
    },
    {
      name: "projects",
      path: "/projects",
    },
  ];

  return (
    <header className="bg-white border-b border-[#dbdbdb] fixed top-0 left-0 right-0 z-50">
      <Box className="container mx-auto flex justify-between items-center">
        <Typography variant="h1" className={`font-nunito text-4xl`}>
          Tech Talk
        </Typography>

        <Box>
          <nav>
            <List className={`flex gap-7`}>
              {navmenu.map((item, index) => (
                <ListItem key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block text-black font-poppins font-medium uppercase text-xl py-7 px-2 cursor-pointer relative after:w-full after:h-[4px] after:bg-black after:absolute after:left-2/4 after:-translate-x-2/4 after:-bottom-[1px] after:rounded-t-[20px]"
                        : "inline-block text-black/50 font-poppins font-medium uppercase text-xl py-7 px-2 cursor-pointer relative after:w-0 after:h-[3px] after:bg-black after:absolute after:left-2/4 after:-translate-x-2/4 after:bottom-0 after:rounded-t-[20px] after:transition-all after:duration-200 hover:after:w-full"
                    }
                  >
                    {item.name}
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
      </Box>
    </header>
  );
};

export default Navbar;
