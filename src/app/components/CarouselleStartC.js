import React, { useState } from "react";
import { Slide } from "material-auto-rotating-carousel";
import { deepPurple, blue, deepOrange } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import { TramRounded } from "@material-ui/icons";
import webpage from "../assets/webpage.svg";
import chat from "../assets/chat.svg";
import study from "../assets/study.svg";
import settings from "../assets/settings.svg";
import datascience from "../assets/datascience.svg";

const styles = {
  root: {
    height: "100%",
    width: "100%",
  },
};

export default function CarouselleStartC() {
  const StyledSlide = withStyles(styles)(Slide);
  const [state, setState] = useState(TramRounded);
  return (
    <div
      style={{
        position: "relative",
        display: state ? "block" : "none",
        width: "100%",
        height: 500,
      }}>
      <AutoRotatingCarousel
        label="Navigate into"
        open={state}
        onClose={() => setState(false)}
        onStart={() => setState(false)}
        style={{ position: "absolute" }}>
        {/* slide for the Blogs page */}
        <StyledSlide
          media={<img alt="webpage" src={webpage} height="80%" />}
          mediaBackgroundStyle={{ backgroundColor: deepPurple[400] }}
          style={{ backgroundColor: deepPurple[600] }}
          title="New Posts Fro Each Subject You Will Need"
          subtitle="Join Us, feel free to post your ideas."
        />
        {/* Slide for the Subjects page */}
        <StyledSlide
          media={<img alt="datascience" src={datascience} height="80%" />}
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="want To Revise Effectifly And Smart?"
          subtitle="Check our courses here based on the original ESI courses!"
        />
        {/* slide for the Chat page */}
        <StyledSlide
          media={<img alt="chat" src={chat} height="80%" />}
          mediaBackgroundStyle={{ backgroundColor: deepPurple[400] }}
          style={{ backgroundColor: deepPurple[600] }}
          title="Let un discuss, you ll find here just students like you! "
          subtitle="Send messages, discuss and share your thoughts!"
        />
        {/* slide for the subject room page */}
        <StyledSlide
          media={<img alt="study" src={study} height="80%" />}
          mediaBackgroundStyle={{ backgroundColor: deepOrange[400] }}
          style={{ backgroundColor: deepOrange[600] }}
          title="Read, Think, Resolve and Check !"
          subtitle="for each room you ll find your course, examples, exercices and solutions."
        />
        {/* slide for the settings page */}
        <StyledSlide
          media={<img alt="settings" src={settings} height="80%" />}
          mediaBackgroundStyle={{ backgroundColor: deepOrange[400] }}
          style={{ backgroundColor: deepOrange[600] }}
          title="Let the app as comfortable as you like"
          subtitle="Switch between thems, set up your notifications, chats, posts ... "
        />
      </AutoRotatingCarousel>
    </div>
  );
}
