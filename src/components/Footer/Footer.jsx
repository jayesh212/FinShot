import React from "react";
import Button from '../utils/Button.jsx'
import logo_icon from "../../assets/logo/favicon_white.svg";
const Footer = (props) => {
  return (
    <div className="bg-black w-full flex text-gray-100 justify-between">
      <div className="logo-area ml-4 px-8 mt-8">
        <img src={logo_icon} alt="finshot icon" className="w-[72px]" />
        <p className=" text-gray-100 text-xl">Angel Investing Made Easy</p>
      </div>
      <div className="footer-links flex my-8 mr-16 justify-around">
        <div className="products flex flex-col mx-8 text-left">
          <p className="h-1">PRODUCTS</p>
          <br />
          <ul className="text-gray-400 my-4">
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                STARTUP FUNDER
              </Button>
            </li>
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                SEED FUNDING
              </Button>
            </li>
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                PROJECT MANAGEMENT
              </Button>
            </li>
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                STARTUP INCUBATOR
              </Button>
            </li>
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                CAPITAL MANAGEMENT
              </Button>
            </li>
            <li>
              <Button onClick={null} type="Link" color='text-gray-400'>
                ASSETS MANAGEMENT
              </Button>
            </li>
          </ul>
        </div>
        <div className="company flex flex-col  mx-8 text-left">
          <p className="h-1">COMPANY</p>
          <br />
          <ul className="text-gray-400 my-4">
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                ABOUT
              </Button>
            </li>
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                CAREERS
              </Button>
            </li>
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                INVESTOR RELATIONS
              </Button>
            </li>
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                MEDIA REPORTS
              </Button>
            </li>
            <li>
              <Button onClick={null} type="Link" color='text-gray-400'>
                CONTACT US
              </Button>
            </li>
          </ul>
        </div>
        <div className="community flex flex-col  mx-8 text-left">
          <p className="h-1">COMMUNITY</p>
          <br />
          <ul className="text-gray-400 my-4">
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                NEWS ARTICLES
              </Button>
            </li>
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                SEARCH HELP
              </Button>
            </li>
            <li >
              <Button onClick={null} type="Link" color='text-gray-400'>
                ASK COMMUNITY
              </Button>
            </li>
          </ul>
        </div>
        <div className="follow flex flex-col  mx-8 text-left">
          <p className="h-1">FOLLOW</p>
          <br />
          <ul className="text-gray-400 my-4">
          <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                Venture Blog
              </Button>
            </li>
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                TWITTER
              </Button>
            </li>
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                LINKEDIN
              </Button>
            </li>
            <li className="mb-1">
              <Button onClick={null} type="Link" color='text-gray-400'>
                INSTAGRAM
              </Button>
            </li>
            <li>
              <Button onClick={null} type="Link" color='text-gray-400'>
                DISCORD
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
