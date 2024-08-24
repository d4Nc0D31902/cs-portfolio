import React from "react";
import { Divider, IconButton, Tooltip, Typography } from "@mui/material";
import ReactTypingEffect from "react-typing-effect";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const introClass = `rounded-3xl flex justify-center items-center relative text-white bg-cover bg-center text-left`;
  const introCol = `rounded-3xl flex flex-col justify-center items-center relative text-white bg-cover bg-center text-left p-4`;
  const gridItemClasses = "rounded-3xl flex justify-center items-center";
  const gridItemCol = "rounded-3xl flex flex-col justify-center items-center";

  return (
    <div className="flex sm:h-full md:h-full lg:h-full xl:h-full 2xl:max-h-full w-full flex-col items-center justify-center p-6 text-slate-400/0 xl:text-slate-400 overflow-hidden bg-black ">
      <div className="grid h-full w-full grid-cols-11 gap-5">
        {/* Profile */}
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 4px 20px rgba(255, 255, 255, 1)",
          }}
          className={`col-span-2 row-span-3 ${gridItemClasses} bg-cover bg-center transition-shadow duration-300`}
          style={{
            backgroundImage: "url(../images/CS.jpg)",
            border: "1px solid white",
          }}
        ></motion.div>

        {/* Intro */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`col-span-5 row-span-3 ${introCol}`}
          style={{ backgroundImage: "url(../images/matte.jpg)" }}
        >
          <Typography variant="h4">Capstone Solutions</Typography>
          <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
            We offer comprehensive web and mobile application development
            services specifically designed for students
          </Typography>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`col-span-4 row-span-4 ${gridItemCol} text-white bg-cover bg-center text-justify p-2`}
          style={{ backgroundImage: "url(../images/matte.jpg)" }}
        >
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <div className="grid grid-cols-4 gap-4 mt-5">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=capstone.solutions24@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black rounded-lg p-4 w-16 h-16 flex justify-center items-center">
                <Tooltip title="Gmail" placement="top" arrow>
                  <EmailIcon sx={{ fontSize: 40 }} />
                </Tooltip>
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61559731192667"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black rounded-lg p-4 w-16 h-16 flex justify-center items-center">
                <Tooltip title="Facebook" placement="top" arrow>
                  <FacebookIcon sx={{ fontSize: 40 }} />
                </Tooltip>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-angelo-rodriguez-31b36431b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black rounded-lg p-4 w-16 h-16 flex justify-center items-center">
                <Tooltip title="LinkedIn" placement="top" arrow>
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                </Tooltip>
              </div>
            </a>
            <a
              href="https://github.com/d4Nc0D31902"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black rounded-lg p-4 w-16 h-16 flex justify-center items-center">
                <Tooltip title="Github" placement="top" arrow>
                  <GitHubIcon sx={{ fontSize: 40 }} />
                </Tooltip>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Arsenal */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`col-span-3 row-span-3 flex flex-col justify-center items-center rounded-3xl text-white bg-cover bg-center text-justify p-0`}
          style={{ backgroundImage: "url(../images/matte.jpg)" }}
        >
          <div className="grid grid-cols-3 gap-4">
            {/* Vite */}
            <Tooltip title="Vite" arrow placement="top">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`h-20 w-20 bg-cover bg-center`}
                style={{
                  backgroundImage: "url(../images/vite.png)",
                }}
              ></motion.div>
            </Tooltip>

            {/* Mongo */}
            <Tooltip title="Mongo DB" arrow placement="top">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`h-20 w-20 bg-cover bg-center`}
                style={{
                  backgroundImage: "url(../images/mongodb.png)",
                }}
              ></motion.div>
            </Tooltip>

            {/* Express */}
            <Tooltip title="Express JS" arrow placement="top">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`h-20 w-20 bg-cover bg-center`}
                style={{
                  backgroundImage: "url(../images/node.png)",
                }}
              ></motion.div>
            </Tooltip>

            {/* React */}
            <Tooltip title="React JS" arrow placement="top">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`h-20 w-20 bg-cover bg-center`}
                style={{
                  backgroundImage: "url(../images/react.png)",
                }}
              ></motion.div>
            </Tooltip>

            {/* Node */}
            <Tooltip title="Node JS" arrow placement="top">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`h-20 w-20 bg-cover bg-center`}
                style={{
                  backgroundImage: "url(../images/express.png)",
                }}
              ></motion.div>
            </Tooltip>

            <Tooltip title="Laravel" arrow placement="top">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`h-20 w-20 bg-cover bg-center`}
                style={{
                  backgroundImage: "url(../images/lara.png)",
                }}
              ></motion.div>
            </Tooltip>
          </div>
        </motion.div>

        {/* Works */}
        <Tooltip title="Our Works" arrow placement="top">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`col-span-4 row-span-3 flex flex-col justify-start items-center rounded-3xl text-white bg-cover bg-center text-justify p-10`}
            style={{ backgroundImage: "url(../images/matte.jpg)" }}
          >
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={2000}
              showArrows={true}
              showStatus={false}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px",
                }}
              >
                <img
                  src="../images/blessed.jpg"
                  alt="Placeholder 1"
                  style={{ width: "100%", height: "auto", maxHeight: "100%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px",
                }}
              >
                <img
                  src="../images/team-poor.jpg"
                  alt="Placeholder 2"
                  style={{ width: "100%", height: "auto", maxHeight: "100%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px",
                }}
              >
                <img
                  src="../images/tupt-sched.jpg"
                  alt="Placeholder 3"
                  style={{ width: "100%", height: "auto", maxHeight: "100%" }}
                />
              </div>
            </Carousel>
          </motion.div>
        </Tooltip>

        {/* Contacts */}
        <Tooltip title="Projects" arrow placement="top">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="col-span-2 row-span-3 flex flex-col justify-center items-center rounded-3xl text-white bg-cover bg-center text-justify"
            style={{ backgroundImage: "url(../images/matte.jpg)" }}
          >
            <Typography variant="h1">5+</Typography>
          </motion.div>
        </Tooltip>

        <Tooltip title="Clients" arrow placement="top">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="col-span-2 row-span-3 flex flex-col justify-center items-center rounded-3xl text-white bg-cover bg-center text-justify"
            style={{ backgroundImage: "url(../images/matte.jpg)" }}
          >
            <Typography variant="h1">15+</Typography>
          </motion.div>
        </Tooltip>

        {/* Devs */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="col-span-7 row-span-12 flex flex-col justify-center items-center rounded-3xl text-white bg-cover bg-center text-justify"
          style={{ backgroundImage: "url(../images/matte.jpg)" }}
        >
          <Typography variant="h5" sx={{ marginBottom: "20px" }}>
            The Developers
          </Typography>
          <div className="grid grid-cols-4 gap-24">
            <a
              href="https://github.com/d4Nc0D31902"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip title="Daniel Angelo Rodriguez" arrow placement="top">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`h-40 w-40 bg-cover bg-center`}
                  style={{
                    borderRadius: "80px",
                    backgroundImage: "url(../images/dan.jpg)",
                  }}
                ></motion.div>
              </Tooltip>
            </a>

            <a
              href="https://github.com/FransManlangit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip title="Frans Adryhel Manlangit" arrow placement="top">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`h-40 w-40 bg-cover bg-center`}
                  style={{
                    backgroundImage: "url(../images/frans.jpg)",
                    borderRadius: "80px",
                  }}
                ></motion.div>
              </Tooltip>
            </a>

            <a
              href="https://github.com/Reigne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip title="Elija Reigne Monterona" arrow placement="top">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`h-40 w-40 bg-cover bg-center`}
                  style={{
                    backgroundImage: "url(../images/monte.jpg)",
                    borderRadius: "80px",
                  }}
                ></motion.div>
              </Tooltip>
            </a>

            <a
              href="https://github.com/XdebronneX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip title="Novemger Pascua" arrow placement="top">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`h-40 w-40 bg-cover bg-center`}
                  style={{
                    backgroundImage: "url(../images/nov.jpg)",
                    borderRadius: "80px",
                  }}
                ></motion.div>
              </Tooltip>
            </a>
          </div>
        </motion.div>

        {/* E-Com Site */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="col-span-4 row-span-11 flex flex-col justify-center items-center rounded-3xl text-white bg-cover bg-center text-justify"
          style={{ backgroundImage: "url(../images/matte.jpg)" }}
        >
          <Typography variant="h2">Coming Soon!</Typography>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
