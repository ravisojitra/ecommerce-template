import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";

export const CategorieswithSidebar1 = (props) => {
  return (
    <header className={`  ${props?.className} `}>
      <Row className="bg-colors1 items-center justify-start mx-[auto] self-stretch w-[100%]">
        <Row className="2xl:ml-[108px] 2xl:my-[22px] 3xl:ml-[129px] 3xl:my-[27px] items-center justify-center lg:ml-[84px] lg:my-[17px] ml-[144px] my-[30px] w-[6%] xl:ml-[96px] xl:my-[20px]">
          <Image
            className="2xl:h-[19px] 2xl:my-[4px] 3xl:h-[22px] 3xl:my-[5px] h-[24px] lg:h-[14px] lg:my-[3px] my-[6px] object-contain w-[35%] xl:h-[17px] xl:my-[4px]"
            src={props?.src}
            alt={props?.alt}
          />
          <Text className="2xl:ml-[6px] 2xl:text-fs18 3xl:ml-[7px] 3xl:text-fs21 font-bold font-poppins lg:ml-[4px] lg:text-fs14 ml-[8px] text-colors text-fs24 text-left xl:ml-[5px] xl:text-fs16">
            {props?.children}
          </Text>
        </Row>
        <Row className="2xl:ml-[308px] 2xl:my-[18px] 3xl:ml-[370px] 3xl:my-[21px] bg-colors1 border-2 border-colors4 border-solid items-center justify-center lg:ml-[239px] lg:my-[14px] ml-[411px] my-[24px] w-[31%] xl:ml-[274px] xl:my-[16px]">
          <Text className="2xl:mb-[8px] 2xl:ml-[24px] 2xl:mt-[7px] 2xl:text-fs13 3xl:ml-[28px] 3xl:my-[9px] 3xl:text-fs16 font-normal font-poppins lg:mb-[6px] lg:ml-[18px] lg:mt-[5px] lg:text-fs10 mb-[11px] ml-[32px] mt-[10px] opacity-op5 text-center text-colors2 text-fs18 w-[19%] xl:mb-[7px] xl:ml-[21px] xl:mt-[6px] xl:text-fs12">
            {props?.children1}
          </Text>
          <Image
            className="2xl:h-[37px] 2xl:ml-[297px] 3xl:h-[44px] 3xl:ml-[357px] h-[48px] lg:h-[28px] lg:ml-[231px] ml-[397px] object-contain w-[auto] xl:h-[33px] xl:ml-[264px]"
            src={props?.src1}
            alt={props?.alt1}
          />
        </Row>
        <Image
          className="2xl:h-[19px] 2xl:ml-[228px] 2xl:my-[27px] 3xl:h-[22px] 3xl:ml-[273px] 3xl:my-[32px] h-[24px] lg:h-[14px] lg:ml-[177px] lg:my-[21px] ml-[304px] my-[36px] object-contain w-[5%] xl:h-[17px] xl:ml-[202px] xl:my-[24px]"
          src={props?.src2}
          alt={props?.alt2}
        />
        <Button
          className="2xl:ml-[24px] 2xl:mr-[108px] 2xl:my-[18px] 2xl:px-[22px] 2xl:py-[11px] 2xl:text-fs10 3xl:ml-[28px] 3xl:mr-[129px] 3xl:my-[21px] 3xl:px-[27px] 3xl:py-[13px] 3xl:text-fs12 bg-colors border-bw font-bold font-poppins lg:ml-[18px] lg:mr-[84px] lg:my-[14px] lg:px-[17px] lg:py-[8px] lg:text-fs8 ml-[32px] mr-[144px] my-[24px] px-[30px] py-[14.705px] text-center text-colors1 text-fs14 w-[6%] xl:ml-[21px] xl:mr-[96px] xl:my-[16px] xl:px-[20px] xl:py-[9px] xl:text-fs9"
          onClick={props?.onClick}
        >
          {props?.children2}
        </Button>
      </Row>
    </header>
  );
};

CategorieswithSidebar1.defaultProps = {
  src: "img_group19.svg",
  alt: "Group19",
  children: "",
  children1: "",
  src1: "img_search.svg",
  alt1: "button",
  src2: "img_icon_5.svg",
  alt2: "icon",
  children2: "",
  onClick: null,
};
