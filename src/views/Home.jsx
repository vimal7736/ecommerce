import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";
import "./home.css";
import AboutSection from "../components/AboutSession/AboutSession";
import SwipperSwag from "../components/SwipperSwag/SwipperSwag";
import Slider from "../components/Slider";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);

class HomeView extends Component {
  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };

  render() {
    const iconProducts = data.iconProducts;
    const rows = [...Array(Math.ceil(iconProducts.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );
    // map the rows as div.row
    const carouselContent = productRows.map((row, idx) => (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <div className="row g-3">
          {row.map((product, idx) => {
            const ProductImage = this.components[product?.img];
            return (
              <div key={idx} className="col-md-3">
                {/* <ProductImage className={product.cssClass} width="80" height="80" /> */}
                {/* <CardIcon
                  title={product.title}
                  text={product.text}
                  tips={product.tips}
                  to={product.to}
                >
                </CardIcon> */}
              </div>
            );
          })}
        </div>
      </div>
    ));

    return (
      <React.Fragment>
       
        <div className=" ">
          <div className="row g-3">
            {/* <div className="col-md-9"> */}
            {/* <Carousel id="elect-product-category" className="mb-3"> */}
            {/* <AboutSection/> */}
            <Slider 
            
            />
            <secondSlider />
            {/* <SwipperSwag/> */}
            {/* </Carousel> */}
            {/* <Support /> */}
            {/* </div> */}
            {/* <div className="col-md-3">
              <CardLogin className="mb-3" />
              <CardImage src="../../images/banner/blackCart.jpg" to="promo" />
            </div> */}
          </div>
        </div>
        {/* <div className="container-fluid ">
          <div className="row">
            <div className="col-md-12 bg-black">
              <CardDealsOfTheDay
                endDate={Date.now() + 1000 * 60 * 60 * 14}
                title="Deals of the Day"
                to="/"
              >
                <Carousel id="elect-product-category1">
                  {carouselContent}
                </Carousel>
              </CardDealsOfTheDay>
            </div>
          </div>
        </div> */}
         <Banner
       
       className="mb-3 bg-black   "
       id="carouselHomeBanner"
       data={data.banner}
     />

        <div className=" custombackgroundImage  text-black border-1 border-white  text-start ">
          <div className=" modal-fullscreen">
            <div
              style={{ display: "flex", justifyContent: "end" }}
              className="row "
            >
              <div className="col-md-3    animated-row p-4">
                <Link to="/" className="text-decoration-none">
                  <img
                    src="../../images/category/menscol.jpg"
                    className="img-fluid rounded-pill h-75 "
                    alt="..."
                  />
                  <div className="text-center h6 p-5 text-black">
                    Mens Fashion
                  </div>
                </Link>
              </div>
              <div className="col-md-3    animated-row p-4">
                <Link to="/" className="text-decoration-none">
                  <img
                    src="../../images/category/swag.jpg"
                    className="img-fluid rounded-pill  h-75 "
                    alt="..."
                  />
                  <div className="text-center h6 p-5 text-black">
                    Mens Fashion
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeView;
