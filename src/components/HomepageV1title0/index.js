import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";

export const HomepageV1title0 = (props) => {
  return (
    <Row className={`  ${props?.className} `}>
      <Text className="2xl:text-fs27 3xl:text-fs32 font-bold font-poppins lg:text-fs21 text-colors text-fs36 text-left xl:text-fs24">
        {props?.children}
      </Text>
      <Row className="2xl:my-[8px] 3xl:my-[10px] items-center justify-between lg:my-[6px] my-[11.5px] px-[0] w-[7%] xl:my-[7px]">
        <Text className="2xl:text-fs13 3xl:text-fs16 font-medium font-poppins lg:text-fs10 my-[1px] text-colors text-fs18 text-left xl:text-fs12">
          {props?.children1}
        </Text>
        <Image
          className="2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:h-[19px] object-contain w-[30%] xl:h-[21px]"
          src={props?.src}
          alt={props?.alt}
        />
      </Row>
    </Row>
  );
};

HomepageV1title0.defaultProps = {
  children: "",
  children1: "",
  src: "img_arrow_3.svg",
  alt: "Arrow",
};
