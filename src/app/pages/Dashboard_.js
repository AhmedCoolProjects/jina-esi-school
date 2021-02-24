import React from "react";
import PostCard__ from "../components/PostCard__";
import CarouselleStart__ from "../components/CarouselleStart__";
import assembly from "../assets/assembly.svg";
import python from "../assets/python.svg";
import studyr from "../assets/studyr.svg";
import chatr from "../assets/chatr.svg";
import about from "../assets/logor.svg";
import CardItem__ from "../components/CardItem__";
import customsvgr from "../assets/customsvgr.svg";
import Footer__ from "../components/Footer__";

function Dashboard_() {
  return (
    <div style={{ position: "relative" }}>
      {/* background image for dashboard */}
      <div className="bg_dshbrd">
        {/* last 2 Posts */}
        <div className="two_posts">
          <PostCard__
            image={assembly}
            title="first title"
            isLiked={true}
            likes={20}
          />
          <PostCard__
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
          <CardItem__ title="Study Room" image={studyr} />
          <CardItem__ title="Chat Room" image={chatr} />
        </div>
        <div className="cards_item_layout_bottom">
          <CardItem__ title="Skills to Devolope" image={customsvgr} />
          <CardItem__ title="about" image={about} />
        </div>
      </div>

      {/* Footer */}
      <Footer__ />
      {/* Carouselle Start */}
      <CarouselleStart__ />
    </div>
  );
}

export default Dashboard_;
