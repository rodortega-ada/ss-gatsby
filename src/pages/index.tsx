import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import ctaImage from "../images/cta.png";
import cta2Image from "../images/cta-2.png";
import cta3Image from "../images/foot-4.png";
import heroImage from "../images/hero.png";
import { StaticImage } from "gatsby-plugin-image";

const heroStyles = {
  backgroundImage: `url(${heroImage})`,
};

const ctaStyles = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${ctaImage})`,
};

const cta2Styles = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${cta2Image})`,
};

const cta3Styles = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${cta3Image})`,
};

const whatWeStandFor = [
  {
    title: "Quality",
    description:
      "Ensuring that the products offered are of high quality and meet the needs of customers is important.",
  },
  {
    title: "Customer satisfaction",
    description:
      "We firmly believe that customer satisfaction is the cornerstone of success and strive to exceed expectations with every interaction",
  },
  {
    title: "Innovation",
    description:
      "Staying up-to-date with the latest trends and technologies in the home/kitchen appliance industry",
  },
  {
    title: "Uniqueness",
    description:
      "Offering high-quality, unique, and/or handmade products that can't be found elsewhere.",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="bg-white pl-[100px] h-[320px] flex items-center">
        <h1 className="font-bold text-3xl leading-[41px]">About Us Page</h1>
      </div>
      <div
        className="bg-no-repeat bg-center bg-cover h-[780px]"
        style={heroStyles}
      ></div>
      <div className="bg-white px-[120px] pt-[100px]">
        <div className="flex items-center space-x-[20px]">
          <div className="w-[100px] border-b border-black inline-block"></div>
          <h4 className="text-[24px] leading-[20px] inline-block">
            WHO WE ARE
          </h4>
        </div>

        <h3 className="font-normal text-[48px] leading-[72px] py-[80px] ">
          We provide top-quality products at competitive prices, convenient
          shopping, and excellent customer service.
        </h3>

        <div className="flex items-center space-x-[20px] mb-[70px]">
          <div className="w-[100px] border-b border-black inline-block"></div>
          <h4 className="text-[24px] leading-[20px] inline-block">
            WHAT WE STAND FOR
          </h4>
        </div>

        <div className="grid grid-cols-2 gap-[20px] mb-[180px]">
          {whatWeStandFor.map((item) => (
            <div
              className="border-[0.2px] border-black py-[20px] px-[20px] pr-[100px] min-h-[240px]"
              key={item.title}
            >
              <h5 className="text-[36px] leading-[72px] font-bold mb-[20px]">
                {item.title}
              </h5>
              <span className="text-[24px] leading-[36px]">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="bg-no-repeat bg-center bg-cover h-[780px] pl-[120px] pt-[50px]"
        style={ctaStyles}
      >
        <div className="w-7/12">
          <h3 className="font-bold text-white text-[48px] leading-[72px] py-[80px]">
            Our commitment to excellence is reflected in every product we offer,
            and we stand behind our products with exceptional customer service
            and support.
          </h3>
          <div className="flex items-center space-x-[20px]">
            <div className="w-[100px] border-b border-white inline-block"></div>
            <h4 className="text-[24px] leading-[36px] text-white inline-block">
              DR SAMIR ATTIA <br />
              CEO
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white px-[120px] pt-[100px] mb-[70px]">
        <div className="flex items-center space-x-[20px] mb-[70px]">
          <div className="w-[100px] border-b border-black inline-block"></div>
          <h4 className="text-[24px] leading-[20px] inline-block">
            OTM VISION
          </h4>
        </div>
        <h3 className="font-normal text-[48px] leading-[72px]">
          We believe in the power of a well-equipped home to improve daily life
          and create comfortable living spaces, and we are dedicated to
          empowering our customers to achieve their vision for their home
        </h3>
      </div>

      <div className="bg-white px-[120px] pt-[100px]">
        <div
          className="bg-no-repeat bg-center bg-cover h-[780px] py-[60px] text-center my-auto flex justify-center"
          style={cta2Styles}
        >
          <div id="test" className="flex flex-col items-center justify-center">
            <p className="text-white font-bold text-center text-[24px] leading-[20px] my-[40px]">
              EXPLORE OUR PRODUCTS
            </p>
            <h5 className="text-white font-[900] text-center text-[36px] leading-[100px] mb-[40px]">
              Find the right product for your home
            </h5>
            <button className="w-[195px] h-[66px] px-[40px] py-[20px] gap-[0px] rounded-[120px] bg-[rgba(238,28,46,1)] text-white font-bold">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className="px-[120px] bg-[rgba(242,242,242,1)] flex items-center justify-between space-x-[20px] h-[70px]">
        <div className="w-[200px] border-b border-black inline-block"></div>
        <div className="flex items-center">
          <StaticImage src="../images/icon-delivery.png" alt="logo" />
          <span>Free standard delivery on orders above £ 99 </span>
        </div>
        <div className="flex items-center">
          <StaticImage src="../images/icon-box.png" alt="logo" />
          <span>14 days free return</span>
        </div>
        <div className="flex items-center">
          <StaticImage src="../images/icon-pay.png" alt="logo" />
          <span>100% secure payment </span>
        </div>
        <div className="w-[200px] border-b border-black inline-block"></div>
      </div>

      <div className="flex">
        <div>
          <StaticImage src="../images/foot-1.png" alt="logo" />
        </div>
        <div>
          <StaticImage src="../images/foot-2.png" alt="logo" />
        </div>
        <div>
          <StaticImage src="../images/foot-3.png" alt="logo" />
        </div>
        <div
          className="bg-no-repeat bg-center bg-cover w-full py-[35px] px-[25px] flex"
          style={cta3Styles}
        >
          <div className="w-3/12 text-white">
            <p className="font-bold text-[28px] leading-[44px]">
              Are you a passionate Trend Maker ? <br /> Get our news and 5% off
            </p>
          </div>
          <div className="w-9/12 pl-[50px]">
            <p className="text-white text-[18px] leading-[27px] mb-[24px]">
              Sign up for OTM mews and promotions and enjoy your <br /> 5%
              discount on your next purchase{" "}
            </p>
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-3/5 h-[50px] px-[20px] rounded-[20px]"
            />
            <button
              style={{ marginLeft: "-40px" }}
              className="w-[180px] h-[50px] py-[10px] gap-[0px] rounded-[20px] bg-[rgba(238,28,46,1)] text-white font-bold mb-[24px]"
            >
              SUBSCRIBE NOW
            </button>
            <p className="text-white text-[12px] leading-[18px]">
              After signing up for the newsletter, you will receive customised
              marketing <br /> communication from OTM. View our Privacy Notice
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black w-full py-[35px] pl-[120px] grid grid-cols-4 text-white">
        <div>
          <StaticImage src="../images/logo.svg" alt="logo" />
          <p className="font-bold text-[28px] my-[25px]">
            Always on trend, <br /> for a better home
          </p>
          <p className="mb-[10px]">Follow us</p>
          <StaticImage
            src="../images/social.svg"
            alt="logo"
            className="mb-[10px]"
          />
          <p className="mb-[10px]">Follow us</p>
          <StaticImage
            src="../images/card.svg"
            alt="logo"
            className="mb-[10px]"
          />
        </div>
        <div>
          <p className="text-[24px] mb-[15px]">Terms and Support</p>
          <p className="text-[16px] mb-[30px]">Delivery policy & POD</p>
          <p className="text-[16px] mb-[30px]">Secure payment</p>
          <p className="text-[16px] mb-[30px]">Returns and refunds policy</p>
          <p className="text-[16px] mb-[30px]">Products certifications</p>
        </div>
        <div>
          <p className="text-[24px] mb-[15px]">Join Us</p>
          <p className="text-[16px] mb-[30px]">OTM Members Club </p>
          <p className="text-[16px] mb-[30px]">Become a OTM Club Member</p>
          <p className="text-[16px] mb-[30px]">Log in</p>
        </div>
        <div>
          <p className="text-[24px] mb-[15px]">About OTM</p>
          <p className="text-[16px] mb-[30px]">About us</p>
          <p className="text-[16px] mb-[30px]">Contact Us</p>
        </div>
      </div>

      <div className="bg-black w-full py-[5px] pl-[120px] text-[16px] text-white">
        <p>All Rights Reserved. Copyright Seek Social</p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
