import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";

export const Checkout1 = (props) => {
  return (
    <header className={`  ${props?.className} `}>
      <Column className="bg-colors1 items-center justify-end mx-[auto] self-stretch w-[100%]">
        <Row className="2xl:mt-[18px] 3xl:mt-[21px] items-center justify-end lg:mt-[14px] mt-[24px] mx-[auto] self-stretch w-[100%] xl:mt-[16px]">
          <Image
            className="2xl:h-[19px] 2xl:ml-[678px] 2xl:my-[9px] 3xl:h-[22px] 3xl:ml-[814px] 3xl:my-[10px] h-[24px] lg:h-[14px] lg:ml-[527px] lg:my-[7px] ml-[904px] my-[12px] object-contain w-[3%] xl:h-[17px] xl:ml-[603px] xl:my-[8px]"
            src={props?.src}
            alt={props?.alt}
          />
          <Text className="2xl:ml-[6px] 2xl:my-[4px] 2xl:text-fs18 3xl:ml-[7px] 3xl:my-[5px] 3xl:text-fs21 font-bold font-poppins lg:ml-[4px] lg:my-[3px] lg:text-fs14 ml-[8px] my-[6px] text-colors text-fs24 text-left xl:ml-[5px] xl:my-[4px] xl:text-fs16">
            {props?.children}
          </Text>
          <Image
            className="2xl:h-[19px] 2xl:ml-[406px] 2xl:my-[9px] 3xl:h-[22px] 3xl:ml-[487px] 3xl:my-[10px] h-[24px] lg:h-[14px] lg:ml-[315px] lg:my-[7px] ml-[541px] my-[12px] object-contain w-[5%] xl:h-[17px] xl:ml-[360px] xl:my-[8px]"
            src={props?.src1}
            alt={props?.alt1}
          />
          <Button className="2xl:ml-[24px] 2xl:mr-[108px] 2xl:px-[21px] 2xl:py-[9px] 2xl:text-fs13 3xl:ml-[28px] 3xl:mr-[129px] 3xl:px-[26px] 3xl:py-[10px] 3xl:text-fs16 bg-colors border-bw font-medium font-poppins lg:ml-[18px] lg:mr-[84px] lg:px-[16px] lg:py-[7px] lg:text-fs10 ml-[32px] mr-[144px] px-[29px] py-[12.045px] text-center text-colors1 text-fs18 w-[6%] xl:ml-[21px] xl:mr-[96px] xl:px-[19px] xl:py-[8px] xl:text-fs12">
            {props?.children1}
          </Button>
        </Row>
        <Line className="2xl:mt-[18px] 3xl:mt-[21px] bg-colors4 h-[1px] lg:mt-[14px] max-w-[1632px] mt-[24px] mx-[auto] w-[85%] xl:mt-[16px]" />
      </Column>
    </header>
  );
};

Checkout1.defaultProps = {
  src: "img_group19.svg",
  alt: "Group19",
  children: "",
  src1: "img_icon_5.svg",
  alt1: "icon",
  children1: "",
};
