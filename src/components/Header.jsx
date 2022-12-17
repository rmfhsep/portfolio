import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Header({ handleClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const menuHandleClick = (event) => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="h-24 sm:h-32 flex items-center z-30 w-full fixed bg-gray-800">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-gray-800 dark:text-white font-black text-3xl flex">
            <div className="z-50 w-9 sm:w-12 h-9 sm:h-12 flex items-center">
              <svg
                id="b613d120-e911-4f71-b7bc-d9b9e1bbdc6f"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 93.13 75.2"
              >
                <rect
                  className="fill-current text-brand"
                  x="-3.43"
                  y="39.29"
                  width="32.19"
                  height="8.78"
                  rx="4.39"
                  transform="translate(-27.18 21.75) rotate(-45)"
                ></rect>
                <rect
                  className="fill-current text-brand"
                  x="-3.43"
                  y="22.74"
                  width="32.19"
                  height="8.78"
                  rx="4.39"
                  transform="translate(22.89 -1.01) rotate(45)"
                ></rect>
                <rect
                  className="fill-current text-brand"
                  x="64.37"
                  y="22.74"
                  width="32.19"
                  height="8.78"
                  rx="4.39"
                  transform="translate(156.55 -10.59) rotate(135)"
                ></rect>
                <rect
                  className="fill-current text-brand"
                  x="64.37"
                  y="39.29"
                  width="32.19"
                  height="8.78"
                  rx="4.39"
                  transform="translate(106.48 131.47) rotate(-135)"
                ></rect>
                <rect
                  className="fill-current text-brand"
                  x="41.93"
                  y="-1.17"
                  width="8.78"
                  height="77.54"
                  rx="4.39"
                  transform="translate(11.31 -10.71) rotate(15)"
                ></rect>
              </svg>
            </div>
            <div className="ml-4 items-center flex">
              <p className="">JUNG-HOON</p>
            </div>
          </div>
          <div className="flex items-center">
            <nav className="hidden lg:block font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center">
              <div
                onClick={() => handleClick("home")}
                className="py-2 px-6 flex cursor-pointer"
              >
                Home
              </div>
              <div
                onClick={() => handleClick("about")}
                className="py-2 px-6 flex cursor-pointer"
              >
                About
              </div>
              <div
                onClick={() => handleClick("skills")}
                className="py-2 px-6 flex cursor-pointer"
              >
                Skills
              </div>
              <a
                onClick={() => handleClick("projects")}
                className="py-2 px-6 flex cursor-pointer"
              >
                Projects
              </a>
              <a
                onClick={() => handleClick("contact")}
                className="py-2 px-6 flex cursor-pointer"
              >
                Contact
              </a>
            </nav>
            <div className="lg:hidden  ml-4">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={menuHandleClick}
              >
                <div className="flex flex-col">
                  <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                  <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                  <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                </div>
              </Button>
              <Menu
                style={{}}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                keepMounted
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                getContentAnchorEl={null}
              >
                <MenuItem onClick={menuHandleClick}>Profile</MenuItem>
                <MenuItem onClick={menuHandleClick}>My account</MenuItem>
                <MenuItem onClick={menuHandleClick}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
