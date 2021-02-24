import React from "react";
import PostCardC from "../components/PostCardC";
import CarouselleStartC from "../components/CarouselleStartC";
import assembly from "../assets/assembly.svg";
import python from "../assets/python.svg";
import studyr from "../assets/studyr.svg";
import chatr from "../assets/chatr.svg";
import about from "../assets/logor.svg";
import CardItemC from "../components/CardItemC";
import customsvgr from "../assets/customsvgr.svg";
import FooterC from "../components/FooterC";

function DashboardP() {
  return (
    <div style={{ position: "relative" }}>
      {/* background image for dashboard */}
      <div className="bg_dshbrd">
        {/* last 2 Posts */}
        <div className="two_posts">
          <PostCardC
            image={assembly}
            title="first title"
            isLiked={true}
            likes={20}
          />
          <PostCardC
            image={python}
            title="Second title"
            isLiked={false}
            likes={15}
          />
        </div>
      </div>

      {/* Cards For Pages */}
      <div className="cards_item_layout">
        <div className="cards_item_layout_top">
          <CardItemC title="Study Room" image={studyr} />
          <CardItemC title="Chat Room" image={chatr} />
        </div>
        <div className="cards_item_layout_bottom">
          <CardItemC title="Skills to Devolope" image={customsvgr} />
          <CardItemC title="about" image={about} />
        </div>
      </div>

      {/* Footer */}
      <FooterC />
      {/* Carouselle Start */}
      <CarouselleStartC />
    </div>
  );
}

export default DashboardP;
