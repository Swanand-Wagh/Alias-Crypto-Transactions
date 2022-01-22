import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import "./Services.css";

const ServiceCard = ({ color, title, icon, subtitle }) => {
  return (
    <div className="service_card white-glassmorphism">
      <div
        className="service_icon_container"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div className="service_card_desc">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="gradient-bg-services services">
      <div className="services_container">
        <div className="services_left">
          <h1 className="text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
          <p>
            The best choice for buying and selling your crypto assets <br />{" "}
            with the various super friendly services we offer
          </p>
        </div>

        <div className="services_right">
          <ServiceCard
            color="#2952E3"
            title="Security gurantee"
            icon={
              <BsShieldFillCheck fontSize={21} style={{ color: "white" }} />
            }
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="#8945F8"
            title="Best exchange rates"
            icon={<BiSearchAlt fontSize={21} style={{ color: "white" }} />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="#F84550"
            title="Fastest transactions"
            icon={<RiHeart2Fill fontSize={21} style={{ color: "white" }} />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
