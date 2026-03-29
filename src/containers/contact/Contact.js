import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              {contactInfo.location && (
                <>
                  <br />
                  <br />
                  <div
                    className="contact-detail-location"
                    style={{
                      color: isDark ? "white" : "black",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{contactInfo.location}</span>
                  </div>
                  <br />
                  <br />
                </>
              )}
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {/* 优先判断是否配置了个人照片 */}
            {contactInfo.avatar_image_path ? (
              <img
                alt="Contact Profile"
                src={require(`../../assets/images/${contactInfo.avatar_image_path}`)}
                style={{
                  width: "100%",
                  maxWidth: "300px", // 适配原布局大小
                  borderRadius: "50%", // 圆形头像，更显专业
                  border: isDark ? "5px solid #333" : "5px solid #f1f1f1", // 增加边框感
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                  marginLeft: "300px",
                  marginTop: "50px"
                }}
              />
            ) : (
              /* 如果没有配置照片，则保留原有的 Lottie 动画或 SVG 逻辑 */
              <>
                {illustration.animated ? (
                  <DisplayLottie animationData={email} />
                ) : (
                  <img
                    alt="Man working"
                    src={require("../../assets/images/contactMailDark.svg")}
                  />
                )}
              </>
            )}
          </div>
          {/*<div className="contact-image-div">*/}
          {/*  {illustration.animated ? (*/}
          {/*    <DisplayLottie animationData={email} />*/}
          {/*  ) : (*/}
          {/*    <img*/}
          {/*      alt="Man working"*/}
          {/*      src={require("../../assets/images/contactMailDark.svg")}*/}
          {/*    ></img>*/}
          {/*  )}*/}
          {/*</div>*/}
        </div>
      </div>
    </Fade>
  );
}
