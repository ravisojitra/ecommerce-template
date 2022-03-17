import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";

export const ProductListfooter = (props) => {
  return (
    <footer className={`  ${props?.className} `}>
      <Column className="bg-colors items-center justify-end mx-[auto] self-stretch w-[100%]">
        <Row className="2xl:mt-[48px] 3xl:mt-[57px] justify-evenly lg:mt-[37px] mt-[64px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[42px]">
          <Column className="2xl:mb-[27px] 3xl:mb-[32px] justify-start lg:mb-[21px] mb-[36px] w-[22%] xl:mb-[24px]">
            <Row className="items-center justify-start self-stretch w-[100%]">
              <Image
                className="2xl:h-[19px] 2xl:my-[4px] 3xl:h-[22px] 3xl:my-[5px] h-[24px] lg:h-[14px] lg:my-[3px] my-[6px] object-contain w-[10%] xl:h-[17px] xl:my-[4px]"
                src={props?.src}
                alt={props?.alt}
              />
              <Text className="2xl:ml-[6px] 2xl:mr-[228px] 2xl:text-fs18 3xl:ml-[7px] 3xl:mr-[273px] 3xl:text-fs21 font-bold font-poppins lg:ml-[4px] lg:mr-[177px] lg:text-fs14 ml-[8px] mr-[304px] text-colors1 text-fs24 text-left xl:ml-[5px] xl:mr-[202px] xl:text-fs16">
                {props?.children}
              </Text>
            </Row>
            <Text className="2xl:mr-[7px] 2xl:mt-[24px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[28px] 3xl:text-fs16 font-normal font-poppins leading-lh32 lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[32px] text-colors2 text-fs18 text-left w-[93%] xl:mr-[6px] xl:mt-[21px] xl:text-fs12">
              {props?.children1}
            </Text>
            <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
              <Column className="items-center justify-start mx-[auto] self-stretch w-[100%]">
                <Row className="items-center justify-start mx-[auto] self-stretch w-[100%]">
                  <Image
                    className="2xl:h-[19px] 2xl:my-[3px] 3xl:h-[22px] 3xl:my-[3px] h-[24px] lg:h-[14px] lg:my-[2px] my-[4px] object-contain w-[auto] xl:h-[17px] xl:my-[2px]"
                    src={props?.src1}
                    alt={props?.alt1}
                  />
                  <Text className="2xl:ml-[6px] 2xl:text-fs13 3xl:ml-[7px] 3xl:text-fs16 font-normal font-poppins lg:ml-[4px] lg:text-fs10 ml-[8px] text-colors1 text-fs18 text-left xl:ml-[5px] xl:text-fs12">
                    {props?.children2}
                  </Text>
                </Row>
                <Row className="2xl:mt-[12px] 3xl:mt-[14px] items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]">
                  <Image
                    className="2xl:h-[19px] 2xl:my-[3px] 3xl:h-[22px] 3xl:my-[3px] h-[24px] lg:h-[14px] lg:my-[2px] my-[4px] object-contain w-[auto] xl:h-[17px] xl:my-[2px]"
                    src={props?.src2}
                    alt={props?.alt2}
                  />
                  <Text className="2xl:ml-[6px] 2xl:text-fs13 3xl:ml-[7px] 3xl:text-fs16 font-normal font-poppins lg:ml-[4px] lg:text-fs10 ml-[8px] text-colors1 text-fs18 text-left xl:ml-[5px] xl:text-fs12">
                    {props?.children3}
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
          <Row className="justify-between px-[0] w-[57%]">
            <Column className="2xl:mb-[42px] 3xl:mb-[50px] justify-start lg:mb-[32px] mb-[56px] w-[23%] xl:mb-[37px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold font-poppins lg:mr-[5px] lg:text-fs14 mr-[10px] text-colors1 text-fs24 text-left xl:mr-[6px] xl:text-fs16">
                {props?.children4}
              </Text>
              <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[42%] xl:mr-[6px] xl:mt-[21px]">
                <Text className="2xl:text-fs13 3xl:text-fs16 font-normal font-poppins lg:text-fs10 mr-[1px] text-colors2 text-fs18 text-left xl:text-fs12">
                  {props?.children5}
                </Text>
                <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal font-poppins lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-colors2 text-fs18 text-left xl:mt-[10px] xl:text-fs12">
                  {props?.children6}
                </Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal font-poppins lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-colors2 text-fs18 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">
                  {props?.children7}
                </Text>
                <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal font-poppins lg:mt-[9px] lg:text-fs10 mr-[1px] mt-[16px] text-colors2 text-fs18 text-left xl:mt-[10px] xl:text-fs12">
                  {props?.children8}
                </Text>
              </Column>
            </Column>
            <Column className="justify-start w-[23%]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold font-poppins lg:mr-[5px] lg:text-fs14 mr-[10px] text-colors1 text-fs24 text-left xl:mr-[6px] xl:text-fs16">
                {props?.children9}
              </Text>
              <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[60%] xl:mr-[6px] xl:mt-[21px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal font-poppins lg:mr-[5px] lg:text-fs10 mr-[10px] text-colors2 text-fs18 text-left xl:mr-[6px] xl:text-fs12">
                  {props?.children10}
                </Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal font-poppins lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-colors2 text-fs18 text-left xl:mr-[6px] xl:mt-[6px] xl:text-fs12">
                  {props?.children11}
                </Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal font-poppins lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-colors2 text-fs18 text-left xl:mr-[6px] xl:mt-[6px] xl:text-fs12">
                  {props?.children12}
                </Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal font-poppins lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-colors2 text-fs18 text-left xl:mr-[6px] xl:mt-[6px] xl:text-fs12">
                  {props?.children13}
                </Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal font-poppins lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-colors2 text-fs18 text-left xl:mr-[6px] xl:mt-[6px] xl:text-fs12">
                  {props?.children14}
                </Text>
                <Text className="2xl:mt-[7px] 2xl:text-fs13 3xl:mt-[9px] 3xl:text-fs16 font-normal font-poppins lg:mt-[5px] lg:text-fs10 mt-[10px] self-stretch text-colors2 text-fs18 text-left xl:mt-[6px] xl:text-fs12">
                  {props?.children15}
                </Text>
              </Column>
            </Column>
            <Column className="2xl:mb-[53px] 2xl:mr-[108px] 3xl:mb-[63px] 3xl:mr-[129px] justify-start lg:mb-[41px] lg:mr-[84px] mb-[71px] mr-[144px] w-[36%] xl:mb-[47px] xl:mr-[96px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold font-poppins lg:mr-[5px] lg:text-fs14 mr-[10px] text-colors1 text-fs24 text-left xl:mr-[6px] xl:text-fs16">
                {props?.children16}
              </Text>
              <Text className="2xl:mt-[18px] 2xl:text-fs13 3xl:mt-[21px] 3xl:text-fs16 font-normal font-poppins leading-lh lg:mt-[14px] lg:text-fs10 mt-[24px] self-stretch text-colors2 text-fs18 text-left w-[100%] xl:mt-[16px] xl:text-fs12">
                {props?.children17}
              </Text>
              <Column className="2xl:mt-[26px] 3xl:mt-[31px] items-center lg:mt-[20px] mt-[35px] mx-[auto] self-stretch w-[100%] xl:mt-[23px]">
                <Row className="bg-colors border border-colors1 border-solid items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]">
                  <Text className="2xl:ml-[18px] 2xl:my-[12px] 2xl:text-fs13 3xl:mb-[15px] 3xl:ml-[21px] 3xl:mt-[14px] 3xl:text-fs16 font-normal font-poppins lg:ml-[14px] lg:my-[9px] lg:text-fs10 mb-[17px] ml-[24px] mt-[16px] opacity-op5 text-center text-colors3 text-fs18 tracking-ls1 w-[40%] xl:mb-[11px] xl:ml-[16px] xl:mt-[10px] xl:text-fs12">
                    {props?.children18}
                  </Text>
                  <Image
                    className="2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:h-[35px] object-contain w-[auto] xl:h-[41px]"
                    src={props?.src3}
                    alt={props?.alt3}
                  />
                </Row>
              </Column>
            </Column>
          </Row>
        </Row>
        <Text className="2xl:mb-[24px] 2xl:ml-[615px] 2xl:mr-[614px] 2xl:mt-[72px] 2xl:text-fs10 3xl:mb-[28px] 3xl:ml-[738px] 3xl:mr-[737px] 3xl:mt-[86px] 3xl:text-fs12 font-normal font-poppins lg:mb-[18px] lg:ml-[478px] lg:mr-[477px] lg:mt-[56px] lg:text-fs8 max-w-[281px] mb-[32px] ml-[820px] mr-[819px] mt-[96px] text-colors3 text-fs14 text-left xl:mb-[21px] xl:ml-[547px] xl:mr-[546px] xl:mt-[64px] xl:text-fs9">
          {props?.children19}
        </Text>
      </Column>
    </footer>
  );
};

ProductListfooter.defaultProps = {
  src: "img_group19_1.svg",
  alt: "Group19",
  children: "",
  children1: "",
  src1: "img_call_1.svg",
  alt1: "Call",
  children2: "",
  src2: "img_email.svg",
  alt2: "Email",
  children3: "",
  children4: "",
  children5: "",
  children6: "",
  children7: "",
  children8: "",
  children9: "",
  children10: "",
  children11: "",
  children12: "",
  children13: "",
  children14: "",
  children15: "",
  children16: "",
  children17: "",
  children18: "",
  src3: "img_submit_1.svg",
  alt3: "submit",
  children19: "",
};
