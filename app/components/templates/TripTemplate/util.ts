import { Colors, FeedBackTypes, TrackingIcon } from "./trips.spec";
import locationIcon from "../../assets/svgs/location.svg";
import timeIcon from "../../assets/svgs/time.svg";
import good from "../../assets/svgs/feedback/good.svg";
import bad from "../../assets/svgs/feedback/bad.svg";
import normal from "../../assets/svgs/feedback/normal.svg";

export const getIcon = (icon: string) => {
  switch (icon) {
    case TrackingIcon.ADDRESS:
      return locationIcon;
    case TrackingIcon.TIME:
      return timeIcon;
  }
};

export class FeedbackAesthetics {
  constructor(private type: string) {}
  private COLORS: Colors = {
    BG_COLOR: {
      GOOD: "#E5F3E5",
      BAD: "#FFE6EB",
      NORMAL: "#FCF3E4",
    },
    COLOR: {
      GOOD: "#008800",
      BAD: "#D9052C",
      NORMAL: "#A57E26",
    },
  };
  getBackgroundColor = () => {
    return this.COLORS.BG_COLOR[this.type];
  };
  getTagColor = () => {
    return this.COLORS.COLOR[this.type];
  };
  getFeedbackIcon = () => {
    switch (this.type) {
      case FeedBackTypes.GOOD:
        return good;
      case FeedBackTypes.BAD:
        return bad;
      case FeedBackTypes.NORMAL:
        return normal;
    }
  };
}
