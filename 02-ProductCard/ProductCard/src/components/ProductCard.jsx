import React from "react";
import { ChevronLeft, Share2, Heart, Star } from "lucide-react";
import "../ProductCard.css";

function ProductCard() {
  return (
    <div className="card">
      <div className="image-container">
        <img
          src="https://hammeronline.in/cdn/shop/files/HammerAirflowFlex.webp?v=1780034839&width=1080"
          alt="Wireless Headphone"
        />
        <button className="back-btn">
          <ChevronLeft size={22} />
        </button>
        <div className="top-right">
          <button className="share-btn">
            <Share2 size={20} />
          </button>
          <button className="heart-btn">
            <Heart size={20} />
          </button>
        </div>
        <div className="slider-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="details">
        <h1 className="title">Wireless Headphone</h1>
        <div className="price-row">
          <h2 className="price">$520.00</h2>
          <div className="seller">
            <span>Seller</span>
            <p>Hammer</p>
          </div>
        </div>
        <div className="rating">
          <div className="rating-box">
            <Star size={14} fill="#fff" />
            <span>4.8</span>
          </div>
          <p>(320 Reviews)</p>
        </div>
        <h3 className="section-title">Available Colors</h3>
        <div className="colors">
          <div className="color red"></div>
          <div className="color black active-color"></div>
          <div className="color blue"></div>
          <div className="color brown"></div>
          <div className="color gray"></div>
        </div>
        <div className="tabs">
          <button className="active-tab">Description</button>
        </div>
        <p className="description">
          Experience premium sound quality with deep bass, crystal-clear vocals,
          and all-day comfort. Designed for music lovers with a sleek,
          lightweight build and long-lasting battery life.
        </p>
        <div className="buyBtn">
            <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;