import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { RatingBar } from "components/RatingBar";

export const CategorieswithSidebar11 = (props) => {
  return (
    <Column className={`  ${props?.className} `}>
      <Row className="items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]">
        <Image
          className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
          src={props?.src}
          alt={props?.alt}
        />
        <RatingBar
          className="w-[80%]"
          selectedStarCount={5}
          starCount={5}
          color="var(--undefined)"
          activeColor="var(--#fffaeb52)"
          size={((window.innerWidth - 15) * 24) / 1920}
        ></RatingBar>
      </Row>
    </Column>
  );
};

CategorieswithSidebar11.defaultProps = {
  src: "img_checkbox.svg",
  alt: "Checkbox",
};
