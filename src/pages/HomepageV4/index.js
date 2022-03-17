import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { HomepageV1title0 } from "components/HomepageV1title0";
import { Grid } from "components/Grid";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";

const HomepageV4Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <header className="mx-[auto] self-stretch w-[100%]">
        <Column className="items-center justify-start mx-[auto] self-stretch w-[100%]">
          <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] self-stretch w-[100%]">
            <Row className="2xl:mt-[22px] 3xl:mt-[27px] items-center justify-start lg:mt-[17px] mt-[30px] mx-[auto] self-stretch w-[100%] xl:mt-[20px]">
              <Row className="2xl:ml-[108px] 2xl:my-[3px] 3xl:mb-[4px] 3xl:ml-[129px] 3xl:mt-[3px] items-center justify-center lg:ml-[84px] lg:my-[2px] mb-[5px] ml-[144px] mt-[4px] w-[29%] xl:mb-[3px] xl:ml-[96px] xl:mt-[2px]">
                <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Categories`}</Text>
                <Text className="2xl:ml-[42px] 2xl:text-fs13 3xl:ml-[50px] 3xl:text-fs16 font-normal lg:ml-[32px] lg:text-fs10 ml-[56px] text-fs18 text-gray_800 text-left xl:ml-[37px] xl:text-fs12">{`New Arrival`}</Text>
                <Text className="2xl:ml-[42px] 2xl:text-fs13 3xl:ml-[50px] 3xl:text-fs16 font-normal lg:ml-[32px] lg:text-fs10 ml-[56px] text-fs18 text-gray_800 text-left xl:ml-[37px] xl:text-fs12">{`Features`}</Text>
                <Text className="2xl:ml-[42px] 2xl:text-fs13 3xl:ml-[50px] 3xl:text-fs16 font-normal lg:ml-[32px] lg:text-fs10 ml-[56px] text-fs18 text-gray_800 text-left xl:ml-[37px] xl:text-fs12">{`Collections`}</Text>
              </Row>
              <Image
                src="img_group19.svg"
                className="2xl:h-[19px] 2xl:ml-[159px] 2xl:my-[4px] 3xl:h-[22px] 3xl:ml-[191px] 3xl:my-[5px] h-[24px] lg:h-[14px] lg:ml-[124px] lg:my-[3px] ml-[213px] my-[6px] object-contain w-[3%] xl:h-[17px] xl:ml-[142px] xl:my-[4px]"
                alt="Group19"
              />
              <Text className="2xl:ml-[6px] 2xl:text-fs18 3xl:ml-[7px] 3xl:text-fs21 font-bold lg:ml-[4px] lg:text-fs14 ml-[8px] text-fs24 text-gray_800 text-left xl:ml-[5px] xl:text-fs16">{`Elliye`}</Text>
              <Image
                src="img_icon_6.svg"
                className="2xl:h-[19px] 2xl:ml-[444px] 2xl:mr-[108px] 2xl:my-[4px] 3xl:h-[22px] 3xl:ml-[533px] 3xl:mr-[129px] 3xl:my-[5px] h-[24px] lg:h-[14px] lg:ml-[345px] lg:mr-[84px] lg:my-[3px] ml-[592px] mr-[144px] my-[6px] object-contain w-[9%] xl:h-[17px] xl:ml-[394px] xl:mr-[96px] xl:my-[4px]"
                alt="icon"
              />
            </Row>
            <Line className="2xl:mt-[22px] 3xl:mt-[27px] bg-gray_100 h-[1px] lg:mt-[17px] mt-[30px] mx-[auto] w-[85%] xl:mt-[20px]" />
          </Column>
          <Row className="bg-white_A700 items-center justify-center mx-[auto] self-stretch w-[100%]">
            <Row className="2xl:ml-[242px] 2xl:mr-[244px] 3xl:ml-[290px] 3xl:mr-[293px] items-center justify-center lg:ml-[188px] lg:mr-[189px] ml-[322.5px] mr-[325.5px] w-[67%] xl:ml-[215px] xl:mr-[217px]">
              <Column className="bg-white_A700 font-poppins items-center justify-center w-[10%]">
                <Image
                  src="img_sweater_2.svg"
                  className="2xl:h-[37px] 2xl:mt-[13px] 3xl:h-[44px] 3xl:mt-[16px] h-[48px] lg:h-[28px] lg:mt-[10px] mt-[18px] mx-[auto] object-contain w-[auto] xl:h-[33px] xl:mt-[12px]"
                  alt="Sweater"
                />
                <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Jacket`}</Text>
              </Column>
              <Column className="2xl:ml-[18px] 3xl:ml-[21px] bg-white_A700 font-poppins items-center justify-center lg:ml-[14px] ml-[24px] w-[10%] xl:ml-[16px]">
                <Image
                  src="img_tshirt_2.svg"
                  className="2xl:h-[37px] 2xl:mt-[13px] 3xl:h-[44px] 3xl:mt-[16px] h-[48px] lg:h-[28px] lg:mt-[10px] mt-[18px] mx-[auto] object-contain w-[auto] xl:h-[33px] xl:mt-[12px]"
                  alt="Tshirt"
                />
                <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Shirt`}</Text>
              </Column>
              <Column className="2xl:ml-[18px] 3xl:ml-[21px] bg-white_A700 font-poppins items-center justify-center lg:ml-[14px] ml-[24px] w-[10%] xl:ml-[16px]">
                <Image
                  src="img_pants_2.svg"
                  className="2xl:h-[37px] 2xl:mt-[13px] 3xl:h-[44px] 3xl:mt-[16px] h-[48px] lg:h-[28px] lg:mt-[10px] mt-[18px] mx-[auto] object-contain w-[auto] xl:h-[33px] xl:mt-[12px]"
                  alt="Pants"
                />
                <Text className="2xl:mb-[14px] 2xl:ml-[26px] 2xl:mr-[25px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:ml-[31px] 3xl:mr-[30px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:ml-[20px] lg:mr-[19px] lg:mt-[4px] lg:text-fs10 mb-[19px] ml-[35px] mr-[34px] mt-[8px] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:ml-[23px] xl:mr-[22px] xl:mt-[5px] xl:text-fs12">{`Pants`}</Text>
              </Column>
              <Column className="2xl:ml-[18px] 3xl:ml-[21px] bg-white_A700 font-poppins items-center justify-center lg:ml-[14px] ml-[24px] w-[10%] xl:ml-[16px]">
                <Image
                  src="img_boot_2.svg"
                  className="2xl:h-[37px] 2xl:mt-[13px] 3xl:h-[44px] 3xl:mt-[16px] h-[48px] lg:h-[28px] lg:mt-[10px] mt-[18px] mx-[auto] object-contain w-[auto] xl:h-[33px] xl:mt-[12px]"
                  alt="Boot"
                />
                <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:mx-[24px] 2xl:text-fs13 3xl:mb-[17px] 3xl:ml-[29px] 3xl:mr-[28px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:ml-[19px] lg:mr-[18px] lg:mt-[4px] lg:text-fs10 mb-[19px] ml-[33px] mr-[32px] mt-[8px] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:ml-[22px] xl:mr-[21px] xl:mt-[5px] xl:text-fs12">{`Shoes`}</Text>
              </Column>
              <Column className="2xl:ml-[18px] 3xl:ml-[21px] bg-white_A700 font-poppins items-center justify-center lg:ml-[14px] ml-[24px] w-[10%] xl:ml-[16px]">
                <Image
                  src="img_dress_2.svg"
                  className="2xl:h-[37px] 2xl:mt-[13px] 3xl:h-[44px] 3xl:mt-[16px] h-[48px] lg:h-[28px] lg:mt-[10px] mt-[18px] mx-[auto] object-contain w-[auto] xl:h-[33px] xl:mt-[12px]"
                  alt="Dress"
                />
                <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Dress`}</Text>
              </Column>
              <Column className="2xl:ml-[18px] 3xl:ml-[21px] bg-white_A700 font-poppins items-center justify-center lg:ml-[14px] ml-[24px] w-[10%] xl:ml-[16px]">
                <Image
                  src="img_belt_2.svg"
                  className="2xl:h-[37px] 2xl:mt-[13px] 3xl:h-[44px] 3xl:mt-[16px] h-[48px] lg:h-[28px] lg:mt-[10px] mt-[18px] mx-[auto] object-contain w-[auto] xl:h-[33px] xl:mt-[12px]"
                  alt="Belt"
                />
                <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:mx-[8px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:mx-[9px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:mx-[6px] lg:text-fs10 mb-[19px] mt-[8px] mx-[11px] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:mx-[7px] xl:text-fs12">{`Accesories`}</Text>
              </Column>
              <Column className="2xl:ml-[18px] 3xl:ml-[21px] bg-white_A700 font-poppins items-center justify-center lg:ml-[14px] ml-[24px] w-[10%] xl:ml-[16px]">
                <Image
                  src="img_skirt.svg"
                  className="2xl:h-[37px] 2xl:mt-[13px] 3xl:h-[44px] 3xl:mt-[16px] h-[48px] lg:h-[28px] lg:mt-[10px] mt-[18px] mx-[auto] object-contain w-[auto] xl:h-[33px] xl:mt-[12px]"
                  alt="Skirt"
                />
                <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Skirt`}</Text>
              </Column>
              <Column className="2xl:ml-[18px] 3xl:ml-[21px] bg-white_A700 font-poppins items-center justify-center lg:ml-[14px] ml-[24px] w-[10%] xl:ml-[16px]">
                <Image
                  src="img_bra.svg"
                  className="2xl:h-[37px] 2xl:mt-[13px] 3xl:h-[44px] 3xl:mt-[16px] h-[48px] lg:h-[28px] lg:mt-[10px] mt-[18px] mx-[auto] object-contain w-[auto] xl:h-[33px] xl:mt-[12px]"
                  alt="Bra"
                />
                <Text className="2xl:mb-[14px] 2xl:ml-[8px] 2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:mx-[9px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:ml-[6px] lg:mr-[5px] lg:mt-[4px] lg:text-fs10 mb-[19px] ml-[11px] mr-[10px] mt-[8px] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:ml-[7px] xl:mr-[6px] xl:mt-[5px] xl:text-fs12">{`Underwear`}</Text>
              </Column>
              <Column className="2xl:ml-[18px] 3xl:ml-[21px] bg-white_A700 font-poppins items-center justify-center lg:ml-[14px] ml-[24px] w-[10%] xl:ml-[16px]">
                <Image
                  src="img_dot.svg"
                  className="2xl:h-[37px] 2xl:mt-[13px] 3xl:h-[44px] 3xl:mt-[16px] h-[48px] lg:h-[28px] lg:mt-[10px] mt-[18px] mx-[auto] object-contain w-[auto] xl:h-[33px] xl:mt-[12px]"
                  alt="Dot"
                />
                <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`More`}</Text>
              </Column>
            </Row>
          </Row>
        </Column>
      </header>
      <Stack className="2xl:h-[539px] 3xl:h-[647px] h-[718px] lg:h-[419px] mx-[auto] self-stretch w-[100%] xl:h-[480px]">
        <div className="absolute bottom-[0] left-[0] right-[0] self-stretch top-[0] w-[100%]">
          <Stack className="2xl:h-[539px] 3xl:h-[647px] h-[718px] lg:h-[419px] self-stretch w-[100%] xl:h-[480px]">
            <Image
              src="img_banner_1.svg"
              className="2xl:h-[539px] 3xl:h-[647px] absolute bottom-[0] h-[718px] left-[0] lg:h-[419px] object-cover right-[0] self-stretch top-[0] w-[100%] xl:h-[480px]"
              alt="banner"
            />
            <Row className="-translate-x-1/2 -translate-y-1/2  2xl:bottom-[239px] 2xl:right-[77px] 3xl:bottom-[287px] 3xl:right-[93px] absolute bottom-[319px] items-center justify-center left-[50%] lg:bottom-[186px] lg:right-[60px] px-[0] right-[103.79px] top-[50%] w-[90%] xl:bottom-[212px] xl:right-[69px]">
              <Image
                src="img_prev.svg"
                className="2xl:h-[61px] 3xl:h-[73px] h-[80px] lg:h-[47px] object-contain w-[auto] xl:h-[54px]"
                alt="prev"
              />
              <Image
                src="img_next_1.svg"
                className="2xl:h-[61px] 3xl:h-[73px] h-[80px] lg:h-[47px] object-contain w-[5%] xl:h-[54px]"
                alt="next"
              />
            </Row>
          </Stack>
          <Column className="2xl:mx-[108px] 3xl:mx-[129px] bg-bluegray_100 font-poppins justify-start lg:mx-[84px] mx-[144px] w-[85%] xl:mx-[96px]">
            <Input
              className="2xl:mt-[93px] 2xl:mx-[104px] 2xl:pl-[7px] 2xl:py-[9px] 2xl:text-fs18 3xl:mt-[112px] 3xl:mx-[125px] 3xl:pl-[9px] 3xl:py-[10px] 3xl:text-fs21 bg-white_A700 font-medium font-poppins lg:mt-[72px] lg:mx-[81px] lg:pl-[5px] lg:py-[7px] lg:text-fs14 mt-[125px] mx-[139px] pl-[10px] placeholder:text-gray_800 py-[12.06px] text-fs24 text-gray_800 text-left w-[17%] xl:mt-[83px] xl:mx-[92px] xl:pl-[6px] xl:py-[8px] xl:text-fs16"
              name="Group25"
              placeholder="50% Off Limited Offer"
            ></Input>
            <Text className="2xl:mt-[24px] 2xl:mx-[104px] 2xl:text-fs54 3xl:mt-[28px] 3xl:mx-[125px] 3xl:text-fs64 font-bold font-playfairdisplay lg:mt-[18px] lg:mx-[81px] lg:text-fs42 mt-[32px] mx-[139px] text-fs72 text-gray_800 text-left xl:mt-[21px] xl:mx-[92px] xl:text-fs48">{`Summer Collection`}</Text>
            <Text className="2xl:mt-[30px] 2xl:mx-[104px] 2xl:text-fs13 3xl:mt-[36px] 3xl:mx-[125px] 3xl:text-fs16 font-normal font-poppins leading-lh32 lg:mt-[23px] lg:mx-[81px] lg:text-fs10 mt-[40px] mx-[139px] text-fs18 text-gray_800 text-left w-[42%] xl:mt-[26px] xl:mx-[92px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            <div className="2xl:mb-[93px] 2xl:mt-[60px] 2xl:mx-[104px] 3xl:mb-[112px] 3xl:mt-[72px] 3xl:mx-[125px] bg-transparent border-bw lg:mb-[72px] lg:mt-[46px] lg:mx-[81px] mb-[125px] mt-[80px] mx-[139px] w-[16%] xl:mb-[83px] xl:mt-[53px] xl:mx-[92px] input-wrap">
              <Image
                src="img_arrow_7.svg"
                className="absolute w-[auto] h-[48px] top-[14.06px] bottom-[14.06px] right-[33px] object-contain lg:h-[28px] lg:top-[8px] lg:bottom-[8px] lg:right-[19px] xl:h-[33px] xl:top-[9px] xl:bottom-[9px] xl:right-[22px] 2xl:h-[37px] 2xl:top-[10px] 2xl:bottom-[10px] 2xl:right-[24px] 3xl:h-[44px] 3xl:top-[12px] 3xl:bottom-[12px] 3xl:right-[29px]"
                alt="Arrow"
              />
              <Button className="2xl:pl-[22px] 2xl:pr-[68px] 2xl:py-[10px] 2xl:text-fs18 3xl:pl-[27px] 3xl:pr-[81px] 3xl:py-[12px] 3xl:text-fs21 bg-gray_800 border-bw font-medium font-poppins lg:pl-[17px] lg:pr-[53px] lg:py-[8px] lg:text-fs14 pl-[30px] pr-[91px] py-[14.06px] text-fs24 text-left text-white_A700 w-[100%] xl:pl-[20px] xl:pr-[60px] xl:py-[9px] xl:text-fs16">{`Shop Now`}</Button>
            </div>
          </Column>
        </div>
        <div className="-translate-x-1/2 2xl:bottom-[51px] 3xl:bottom-[61px] absolute bottom-[68px] left-[50%] lg:bottom-[39px] w-[6%] xl:bottom-[45px]"></div>
      </Stack>
      <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-start lg:mt-[18px] mt-[32px] mx-[auto] w-[85%] xl:mt-[21px]">
        <HomepageV1title0
          children={`Featured`}
          children1={`View all`}
          src="img_arrow_8.svg"
          className="items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]"
        />
        <Row className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[32px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[21px]">
          <Grid className="2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 lg:gap-[18px] w-[32%] xl:gap-[21px]">
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_maskgroup_28.svg"
                className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                alt="MaskGroup"
              />
              <Column className="2xl:ml-[31px] 2xl:mr-[30px] 2xl:mt-[12px] 3xl:ml-[37px] 3xl:mr-[36px] 3xl:mt-[14px] font-poppins items-center justify-start lg:ml-[24px] lg:mr-[23px] lg:mt-[9px] ml-[42px] mr-[41px] mt-[16px] w-[67%] xl:ml-[28px] xl:mr-[27px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Green `}
                      <br />
                      {`Warm Jacket`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_maskgroup_29.svg"
                className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                alt="MaskGroup"
              />
              <Column className="2xl:ml-[31px] 2xl:mr-[30px] 2xl:mt-[12px] 3xl:ml-[37px] 3xl:mr-[36px] 3xl:mt-[14px] font-poppins items-center justify-start lg:ml-[24px] lg:mr-[23px] lg:mt-[9px] ml-[42px] mr-[41px] mt-[16px] w-[67%] xl:ml-[28px] xl:mr-[27px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Black`}
                      <br />
                      {`Warm Jacket`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_maskgroup_30.svg"
                className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                alt="MaskGroup"
              />
              <Column className="2xl:ml-[31px] 2xl:mr-[30px] 2xl:mt-[12px] 3xl:ml-[37px] 3xl:mr-[36px] 3xl:mt-[14px] font-poppins items-center justify-start lg:ml-[24px] lg:mr-[23px] lg:mt-[9px] ml-[42px] mr-[41px] mt-[16px] w-[67%] xl:ml-[28px] xl:mr-[27px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Black `}
                      <br />
                      {`Warm Jacket`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_maskgroup_31.svg"
                className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                alt="MaskGroup"
              />
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[51%] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Black`}
                      <br />
                      {`Brief Case`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
          </Grid>
          <Stack className="2xl:h-[577px] 3xl:h-[692px] h-[768px] lg:h-[448px] w-[32%] xl:h-[513px]">
            <Image
              src="img_middlebanner.svg"
              className="2xl:h-[577px] 3xl:h-[692px] absolute bottom-[0] h-[768px] left-[0] lg:h-[448px] object-cover right-[0] self-stretch top-[0] w-[100%] xl:h-[513px]"
              alt="middlebanner"
            />
            <Column className="-translate-x-1/2 2xl:bottom-[41px] 3xl:bottom-[49px] absolute bottom-[55px] font-poppins items-center justify-start left-[50%] lg:bottom-[32px] w-[55%] xl:bottom-[36px]">
              <Text className="2xl:text-fs27 3xl:text-fs32 font-medium leading-lh lg:text-fs21 mx-[auto] self-stretch text-center text-fs36 text-gray_800 w-[100%] xl:text-fs24">
                {
                  <>
                    {`Brown `}
                    <br />
                    {`Casual Sneaker`}
                  </>
                }
              </Text>
              <Text className="2xl:mt-[12px] 2xl:text-fs27 3xl:mt-[14px] 3xl:text-fs32 font-medium lg:mt-[9px] lg:text-fs21 mt-[16px] mx-[auto] text-fs36 text-gray_500 text-left xl:mt-[10px] xl:text-fs24">{`$299`}</Text>
              <Button className="2xl:mt-[36px] 2xl:px-[22px] 2xl:py-[13px] 2xl:text-fs13 3xl:mt-[43px] 3xl:px-[27px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:mt-[28px] lg:px-[17px] lg:py-[10px] lg:text-fs10 mt-[48px] mx-[auto] px-[30px] py-[18.045px] text-center text-fs18 text-white_A700 w-[70%] xl:mt-[32px] xl:px-[20px] xl:py-[12px] xl:text-fs12">{`Add to Cart`}</Button>
            </Column>
          </Stack>
          <Grid className="2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 lg:gap-[18px] w-[32%] xl:gap-[21px]">
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_maskgroup_32.svg"
                className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                alt="MaskGroup"
              />
              <Column className="2xl:ml-[31px] 2xl:mr-[30px] 2xl:mt-[12px] 3xl:ml-[37px] 3xl:mr-[36px] 3xl:mt-[14px] font-poppins items-center justify-start lg:ml-[24px] lg:mr-[23px] lg:mt-[9px] ml-[42px] mr-[41px] mt-[16px] w-[67%] xl:ml-[28px] xl:mr-[27px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Blue Grey `}
                      <br />
                      {`Warm Jacket`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_maskgroup_33.svg"
                className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                alt="MaskGroup"
              />
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[59%] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Blue Denim `}
                      <br />
                      {`Jacket`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="justify-start w-[100%]">
              <Stack className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] self-stretch w-[100%] xl:h-[164px]">
                <Image
                  src="img_maskgroup_34.svg"
                  className="2xl:h-[184px] 3xl:h-[221px] absolute h-[245px] lg:h-[143px] object-cover self-stretch w-[auto] xl:h-[164px]"
                  alt="MaskGroup"
                />
              </Stack>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-end lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                <Column className="2xl:mx-[12px] 3xl:mx-[14px] font-poppins items-center justify-start lg:mx-[9px] mx-[16px] w-[77%] xl:mx-[10px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                    {
                      <>
                        {`Modern Classic`}
                        <br />
                        {`Watch`}
                      </>
                    }
                  </Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
            </Column>
            <Column className="justify-start w-[100%]">
              <Stack className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] self-stretch w-[100%] xl:h-[164px]">
                <Image
                  src="img_maskgroup_35.svg"
                  className="2xl:h-[184px] 3xl:h-[221px] absolute h-[245px] lg:h-[143px] object-cover self-stretch w-[auto] xl:h-[164px]"
                  alt="MaskGroup"
                />
              </Stack>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-end lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                <Column className="2xl:mx-[22px] 3xl:mx-[27px] font-poppins items-center justify-start lg:mx-[17px] mx-[30px] w-[71%] xl:mx-[20px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                    {
                      <>
                        {`Casual `}
                        <br />
                        {`Classic Watch`}
                      </>
                    }
                  </Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
            </Column>
          </Grid>
        </Row>
      </Column>
      <Stack className="2xl:h-[320px] 2xl:mt-[75px] 3xl:h-[384px] 3xl:mt-[90px] h-[426px] lg:h-[249px] lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:h-[285px] xl:mt-[66px]">
        <Column className="2xl:left-[24px] 2xl:top-[24px] 3xl:left-[28px] 3xl:top-[28px] absolute font-poppins justify-start left-[32px] lg:left-[18px] lg:top-[18px] top-[32px] w-[14%] xl:left-[21px] xl:top-[21px]">
          <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`New Arrival`}</Text>
          <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal leading-lh32 lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-fs18 text-left text-white_A700 w-[100%] xl:mt-[10px] xl:text-fs12">{`Lorem ipsum dolor sit amet consectetur.`}</Text>
        </Column>
        <Stack className="2xl:h-[320px] 3xl:h-[384px] absolute bottom-[0] h-[426px] left-[0] lg:h-[249px] right-[0] self-stretch top-[0] w-[100%] xl:h-[285px]">
          <div className="2xl:h-[320px] 3xl:h-[384px] absolute bg-gray_800 h-[426px] left-[0] lg:h-[249px] w-[24%] xl:h-[285px]"></div>
          <List
            className="-translate-y-1/2 2xl:gap-[19px] 3xl:gap-[23px] absolute flex-wrap gap-[26.570007px] grid grid-cols-4 lg:gap-[15px] min-h-[auto] overflow-x-hidden overflow-y-hidden right-[0] top-[50%] w-[84%] xl:gap-[17px]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 items-center justify-center shadow-bs2 w-[100%]">
              <div className="2xl:h-[151px] 2xl:mt-[28px] 2xl:mx-[44px] 3xl:h-[181px] 3xl:mt-[33px] 3xl:mx-[53px] bg-bluegray_100 h-[200px] lg:h-[117px] lg:mt-[21px] lg:mx-[34px] ml-[59.410004px] mr-[59.409973px] mt-[37.5px] w-[63%] xl:h-[134px] xl:mt-[25px] xl:mx-[39px]"></div>
              <Column className="2xl:mb-[28px] 2xl:mt-[12px] 3xl:mb-[33px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[21px] lg:mt-[9px] mb-[37.5px] mt-[16px] mx-[auto] w-[58%] xl:mb-[25px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Black Briefcase`}</Text>
                <Text className="2xl:mt-[6px] 2xl:mx-[52px] 2xl:text-fs13 3xl:mt-[7px] 3xl:mx-[62px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:mx-[40px] lg:text-fs10 ml-[69.49997px] mr-[69.50006px] mt-[8px] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:mx-[46px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center justify-center shadow-bs2 w-[100%]">
              <div className="2xl:h-[151px] 2xl:mt-[28px] 3xl:h-[181px] 3xl:mt-[33px] bg-bluegray_100 h-[200px] lg:h-[117px] lg:mt-[21px] mt-[37.5px] mx-[auto] w-[63%] xl:h-[134px] xl:mt-[25px]"></div>
              <Column className="2xl:mb-[28px] 2xl:mt-[12px] 3xl:mb-[33px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[21px] lg:mt-[9px] mb-[37.5px] mt-[16px] mx-[auto] w-[35%] xl:mb-[25px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Pink Shirt`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center justify-center mb-[1px] shadow-bs2 w-[100%]">
              <div className="2xl:h-[151px] 2xl:mt-[27px] 2xl:mx-[44px] 3xl:h-[181px] 3xl:mt-[33px] 3xl:mx-[53px] bg-bluegray_100 h-[200px] lg:h-[117px] lg:mt-[21px] lg:mx-[34px] ml-[59.41992px] mr-[59.400146px] mt-[37.140015px] w-[63%] xl:h-[134px] xl:mt-[24px] xl:mx-[39px]"></div>
              <Column className="2xl:mb-[27px] 2xl:mt-[12px] 3xl:mb-[33px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[21px] lg:mt-[9px] mb-[37.140137px] mt-[15.999756px] mx-[auto] w-[46%] xl:mb-[24px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Gray T-shirt`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center justify-center mt-[1px] shadow-bs2 w-[100%]">
              <div className="2xl:h-[151px] 2xl:mt-[27px] 2xl:mx-[44px] 3xl:h-[181px] 3xl:mt-[33px] 3xl:mx-[53px] bg-bluegray_100 h-[200px] lg:h-[117px] lg:mt-[21px] lg:mx-[34px] ml-[59.409912px] mr-[59.410034px] mt-[37.140015px] w-[63%] xl:h-[134px] xl:mt-[24px] xl:mx-[39px]"></div>
              <Column className="2xl:mb-[27px] 2xl:mt-[12px] 3xl:mb-[33px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[21px] lg:mt-[9px] mb-[37.139893px] mt-[16.000244px] mx-[auto] w-[44%] xl:mb-[24px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Red Flannel`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
          </List>
        </Stack>
      </Stack>
      <Row className="2xl:ml-[108px] 2xl:mr-[107px] 2xl:mt-[75px] 3xl:ml-[129px] 3xl:mr-[128px] 3xl:mt-[90px] items-center justify-start lg:ml-[84px] lg:mr-[83px] lg:mt-[58px] ml-[144px] mr-[143px] mt-[100px] w-[86%] xl:ml-[96px] xl:mr-[95px] xl:mt-[66px]">
        <Column className="bg-bluegray_100 font-poppins items-center justify-center w-[49%]">
          <Text className="2xl:ml-[61px] 2xl:mr-[368px] 2xl:my-[106px] 2xl:text-fs27 3xl:ml-[74px] 3xl:mr-[441px] 3xl:my-[127px] 3xl:text-fs32 font-normal leading-lh lg:ml-[48px] lg:mr-[286px] lg:my-[82px] lg:text-fs21 ml-[82.44px] mr-[490.56px] my-[142px] text-fs36 text-left text-white_A700 w-[29%] xl:ml-[55px] xl:mr-[327px] xl:my-[94px] xl:text-fs24">
            <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
              <>
                {`Casual`}
                <br />
                {``}
              </>
            </span>
            <span className="text-white_A700 text-fs48 font-playfairdisplay text-left font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43">
              <>{`Collection`}</>
            </span>
          </Text>
        </Column>
        <Column className="2xl:ml-[24px] 3xl:ml-[28px] bg-bluegray_100 font-poppins items-center justify-center lg:ml-[18px] ml-[32px] w-[50%] xl:ml-[21px]">
          <Text className="2xl:mb-[115px] 2xl:ml-[59px] 2xl:mr-[371px] 2xl:mt-[114px] 2xl:text-fs27 3xl:mb-[138px] 3xl:ml-[71px] 3xl:mr-[445px] 3xl:mt-[137px] 3xl:text-fs32 font-normal leading-lh lg:ml-[46px] lg:mr-[288px] lg:my-[89px] lg:text-fs21 mb-[153.26001px] ml-[79.640015px] mr-[494.36px] mt-[153px] text-fs36 text-left text-white_A700 w-[29%] xl:ml-[53px] xl:mr-[329px] xl:my-[102px] xl:text-fs24">
            <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
              <>
                {`Big Vibe `}
                <br />
                {``}
              </>
            </span>
            <span className="text-white_A700 text-fs48 font-playfairdisplay text-left font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43">
              <>{`Collection`}</>
            </span>
          </Text>
        </Column>
      </Row>
      <Stack className="2xl:h-[272px] 2xl:mt-[75px] 3xl:h-[326px] 3xl:mt-[90px] h-[362px] lg:h-[212px] lg:mt-[58px] mt-[100px] mx-[auto] self-stretch w-[100%] xl:h-[242px] xl:mt-[66px]">
        <List
          className="-translate-x-1/2 2xl:gap-[24px] 3xl:gap-[28px] absolute bottom-[0] flex-wrap gap-[32px] grid grid-cols-4 left-[50%] lg:gap-[18px] min-h-[auto] overflow-x-hidden overflow-y-hidden w-[85%] xl:gap-[21px]"
          orientation="horizontal"
        >
          <Row className="bg-white_A700 items-center justify-start shadow-bs3 w-[100%]">
            <Image
              src="img_truck_1.svg"
              className="2xl:h-[37px] 2xl:ml-[34px] 2xl:my-[63px] 3xl:h-[44px] 3xl:ml-[41px] 3xl:my-[76px] h-[48px] lg:h-[28px] lg:ml-[27px] lg:my-[49px] ml-[46.5px] my-[84.5px] object-contain w-[auto] xl:h-[33px] xl:ml-[31px] xl:my-[56px]"
              alt="Truck"
            />
            <Column className="2xl:ml-[24px] 2xl:mr-[34px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:mr-[41px] 3xl:my-[57px] font-poppins justify-start lg:ml-[18px] lg:mr-[27px] lg:my-[37px] ml-[32px] mr-[46.5px] my-[64px] w-[55%] xl:ml-[21px] xl:mr-[31px] xl:my-[42px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-bold lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Free Delivery`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-normal leading-lh lg:mt-[4px] lg:text-fs10 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[5px] xl:text-fs12">
                {
                  <>
                    {`This free shipping`}
                    <br />
                    {`only for selected region`}
                  </>
                }
              </Text>
            </Column>
          </Row>
          <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
            <Image
              src="img_card_1.svg"
              className="2xl:h-[37px] 2xl:ml-[34px] 2xl:my-[63px] 3xl:h-[44px] 3xl:ml-[41px] 3xl:my-[76px] h-[48px] lg:h-[28px] lg:ml-[27px] lg:my-[49px] ml-[46.5px] my-[84.5px] object-contain w-[auto] xl:h-[33px] xl:ml-[31px] xl:my-[56px]"
              alt="Card"
            />
            <Column className="2xl:ml-[24px] 2xl:mr-[34px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:mr-[41px] 3xl:my-[57px] font-poppins justify-start lg:ml-[18px] lg:mr-[27px] lg:my-[37px] ml-[32px] mr-[46.5px] my-[64px] w-[55%] xl:ml-[21px] xl:mr-[31px] xl:my-[42px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-bold lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Payment Method`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-normal leading-lh lg:mt-[4px] lg:text-fs10 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[5px] xl:text-fs12">
                {
                  <>
                    {`This free shipping`}
                    <br />
                    {`only for selected region`}
                  </>
                }
              </Text>
            </Column>
          </Row>
          <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
            <Image
              src="img_broken_1.svg"
              className="2xl:h-[37px] 2xl:ml-[34px] 2xl:my-[63px] 3xl:h-[44px] 3xl:ml-[41px] 3xl:my-[76px] h-[48px] lg:h-[28px] lg:ml-[27px] lg:my-[49px] ml-[46.5px] my-[84.5px] object-contain w-[auto] xl:h-[33px] xl:ml-[31px] xl:my-[56px]"
              alt="Broken"
            />
            <Column className="2xl:ml-[24px] 2xl:mr-[34px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:mr-[41px] 3xl:my-[57px] font-poppins justify-start lg:ml-[18px] lg:mr-[27px] lg:my-[37px] ml-[32px] mr-[46.5px] my-[64px] w-[55%] xl:ml-[21px] xl:mr-[31px] xl:my-[42px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-bold lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Warranty`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-normal leading-lh lg:mt-[4px] lg:text-fs10 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[5px] xl:text-fs12">
                {
                  <>
                    {`This free shipping`}
                    <br />
                    {`only for selected region`}
                  </>
                }
              </Text>
            </Column>
          </Row>
          <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
            <Image
              src="img_support_1.svg"
              className="2xl:h-[37px] 2xl:ml-[34px] 2xl:my-[63px] 3xl:h-[44px] 3xl:ml-[41px] 3xl:my-[76px] h-[48px] lg:h-[28px] lg:ml-[27px] lg:my-[49px] ml-[46.5px] my-[84.5px] object-contain w-[auto] xl:h-[33px] xl:ml-[31px] xl:my-[56px]"
              alt="Support"
            />
            <Column className="2xl:ml-[24px] 2xl:mr-[34px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:mr-[41px] 3xl:my-[57px] font-poppins justify-start lg:ml-[18px] lg:mr-[27px] lg:my-[37px] ml-[32px] mr-[46.5px] my-[64px] w-[55%] xl:ml-[21px] xl:mr-[31px] xl:my-[42px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-bold lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Customer Support`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-normal leading-lh lg:mt-[4px] lg:text-fs10 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[5px] xl:text-fs12">
                {
                  <>
                    {`This free shipping`}
                    <br />
                    {`only for selected region`}
                  </>
                }
              </Text>
            </Column>
          </Row>
        </List>
        <Column className="absolute bg-gray_800 font-poppins items-center justify-start self-stretch top-[0] w-[100%]">
          <Text className="2xl:mb-[163px] 2xl:ml-[108px] 2xl:mr-[1189px] 2xl:mt-[41px] 2xl:text-fs18 3xl:mb-[196px] 3xl:ml-[129px] 3xl:mr-[1427px] 3xl:mt-[49px] 3xl:text-fs21 font-bold lg:mb-[127px] lg:ml-[84px] lg:mr-[924px] lg:mt-[32px] lg:text-fs14 mb-[218px] ml-[144px] mr-[1585px] mt-[55px] text-fs24 text-left text-white_A700 xl:mb-[145px] xl:ml-[96px] xl:mr-[1057px] xl:mt-[36px] xl:text-fs16">{`Why Choose Us`}</Text>
        </Column>
      </Stack>
      <Column className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:mt-[66px]">
        <HomepageV1title0
          children={`Popular this Week`}
          children1={`View all`}
          src="img_arrow_5.svg"
          className="items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]"
        />
        <List
          className="2xl:gap-[24px] 2xl:mt-[24px] 3xl:gap-[28px] 3xl:mt-[28px] flex-wrap gap-[32px] grid grid-cols-6 lg:gap-[18px] lg:mt-[18px] max-w-[1630px] min-h-[auto] mr-[1px] mt-[32px] overflow-x-hidden overflow-y-hidden w-[100%] xl:gap-[21px] xl:mt-[21px]"
          orientation="horizontal"
        >
          <Column className="items-center justify-start w-[100%]">
            <Image
              src="img_maskgroup_36.svg"
              className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[18px] 2xl:mr-[17px] 2xl:mt-[12px] 3xl:ml-[21px] 3xl:mr-[20px] 3xl:mt-[14px] font-poppins items-center justify-start lg:ml-[14px] lg:mr-[13px] lg:mt-[9px] ml-[24px] mr-[23px] mt-[16px] w-[81%] xl:ml-[16px] xl:mr-[15px] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Black Adventure`}
                    <br />
                    {`Boots`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] w-[57%] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Image
              src="img_maskgroup_37.svg"
              className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
              alt="MaskGroup"
            />
            <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[65%] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Black Formal`}
                    <br />
                    {`Highheels`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] w-[72%] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Image
              src="img_maskgroup_38.svg"
              className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[30px] 2xl:mr-[29px] 2xl:mt-[12px] 3xl:ml-[36px] 3xl:mr-[35px] 3xl:mt-[14px] font-poppins items-center justify-start lg:ml-[23px] lg:mr-[22px] lg:mt-[9px] ml-[40px] mr-[39px] mt-[16px] w-[68%] xl:mt-[10px] xl:mx-[26px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Brown `}
                    <br />
                    {`Casual Shoes`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] w-[68%] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="justify-start w-[100%]">
            <Stack className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] self-stretch w-[100%] xl:h-[164px]">
              <Image
                src="img_maskgroup_39.svg"
                className="2xl:h-[184px] 3xl:h-[221px] absolute h-[245px] lg:h-[143px] object-cover self-stretch w-[auto] xl:h-[164px]"
                alt="MaskGroup"
              />
            </Stack>
            <Column className="2xl:mt-[12px] 2xl:mx-[37px] 3xl:mt-[14px] 3xl:mx-[45px] font-poppins items-center justify-start lg:mt-[9px] lg:mx-[29px] mt-[16px] mx-[50px] w-[53%] xl:mt-[10px] xl:mx-[33px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Gray `}
                    <br />
                    {`Longpants`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] w-[88%] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Image
              src="img_maskgroup_40.svg"
              className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[35px] 2xl:mr-[34px] 2xl:mt-[12px] 3xl:ml-[42px] 3xl:mr-[41px] 3xl:mt-[14px] font-poppins items-center justify-start lg:ml-[27px] lg:mr-[26px] lg:mt-[9px] ml-[47px] mr-[46px] mt-[16px] w-[63%] xl:ml-[31px] xl:mr-[30px] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Green`}
                    <br />
                    {`Sport Jacket`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] w-[74%] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Image
              src="img_maskgroup_41.svg"
              className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
              alt="MaskGroup"
            />
            <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[59%] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Blue Denim `}
                    <br />
                    {`Skirt`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] w-[79%] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
        </List>
      </Column>
      <Image
        src="img_brand_1.svg"
        className="2xl:h-[52px] 2xl:mt-[75px] 3xl:h-[62px] 3xl:mt-[90px] h-[68.29px] lg:h-[40px] lg:mt-[58px] mt-[100px] mx-[auto] object-contain w-[51%] xl:h-[46px] xl:mt-[66px]"
        alt="brand"
      />
      <footer className="2xl:mt-[75px] 3xl:mt-[90px] lg:mt-[58px] mt-[100px] mx-[auto] self-stretch w-[100%] xl:mt-[66px]">
        <Column className="bg-gray_800 font-poppins items-center justify-start mx-[auto] self-stretch w-[100%]">
          <Line className="2xl:mt-[24px] 3xl:mt-[28px] bg-gray_100 h-[1px] lg:mt-[18px] mt-[32px] mx-[auto] w-[85%] xl:mt-[21px]" />
          <Row className="2xl:mt-[23px] 3xl:mt-[27px] justify-evenly lg:mt-[18px] mt-[31px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[20px]">
            <Column className="2xl:mb-[16px] 3xl:mb-[19px] font-poppins justify-start lg:mb-[12px] mb-[22px] w-[13%] xl:mb-[14px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Contacts`}</Text>
              <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                <Column className="items-center justify-start mx-[auto] self-stretch w-[100%]">
                  <Row className="font-poppins items-center justify-start mx-[auto] self-stretch w-[100%]">
                    <Image
                      src="img_call_1.svg"
                      className="2xl:h-[19px] 2xl:my-[3px] 3xl:h-[22px] 3xl:my-[3px] h-[24px] lg:h-[14px] lg:my-[2px] my-[4px] object-contain w-[auto] xl:h-[17px] xl:my-[2px]"
                      alt="Call"
                    />
                    <Text className="2xl:ml-[6px] 2xl:text-fs13 3xl:ml-[7px] 3xl:text-fs16 font-normal lg:ml-[4px] lg:text-fs10 ml-[8px] text-fs18 text-left text-white_A700 xl:ml-[5px] xl:text-fs12">{`+1234567890`}</Text>
                  </Row>
                  <Row className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]">
                    <Image
                      src="img_email.svg"
                      className="2xl:h-[19px] 2xl:my-[3px] 3xl:h-[22px] 3xl:my-[3px] h-[24px] lg:h-[14px] lg:my-[2px] my-[4px] object-contain w-[auto] xl:h-[17px] xl:my-[2px]"
                      alt="Email"
                    />
                    <Text className="2xl:ml-[6px] 2xl:text-fs13 3xl:ml-[7px] 3xl:text-fs16 font-normal lg:ml-[4px] lg:text-fs10 ml-[8px] text-fs18 text-left text-white_A700 xl:ml-[5px] xl:text-fs12">{`elliye@support.com`}</Text>
                  </Row>
                </Column>
              </Column>
              <Text className="2xl:mr-[7px] 2xl:mt-[36px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[43px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:mt-[28px] lg:text-fs14 mr-[10px] mt-[48px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:mt-[32px] xl:text-fs16">{`Social Media`}</Text>
              <Image
                src="img_sosmedia_1.svg"
                className="2xl:h-[19px] 2xl:mr-[7px] 2xl:mt-[24px] 3xl:h-[22px] 3xl:mr-[9px] 3xl:mt-[28px] h-[24px] lg:h-[14px] lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] object-contain w-[49%] xl:h-[17px] xl:mr-[6px] xl:mt-[21px]"
                alt="sosmedia"
              />
            </Column>
            <Column className="font-poppins justify-start w-[13%]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Product Links`}</Text>
              <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] font-poppins justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[47%] xl:mr-[6px] xl:mt-[21px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Categories`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`New Arrival`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Features`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Collections`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Discount`}</Text>
                <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`Special Offer`}</Text>
              </Column>
            </Column>
            <Column className="font-poppins justify-start w-[13%]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Company`}</Text>
              <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] font-poppins justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[60%] xl:mr-[6px] xl:mt-[21px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`About`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Blog`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Careers`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Services`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Privacy Policy`}</Text>
                <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`Terms of service`}</Text>
              </Column>
            </Column>
            <Column className="2xl:mb-[75px] 3xl:mb-[90px] font-poppins justify-start lg:mb-[58px] mb-[101px] w-[20%] xl:mb-[67px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Join our Newsletter`}</Text>
              <Text className="2xl:mt-[18px] 2xl:text-fs13 3xl:mt-[21px] 3xl:text-fs16 font-normal leading-lh lg:mt-[14px] lg:text-fs10 mt-[24px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[16px] xl:text-fs12">{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
              <Column className="2xl:mt-[26px] 3xl:mt-[31px] items-center lg:mt-[20px] mt-[35px] mx-[auto] self-stretch w-[100%] xl:mt-[23px]">
                <Row className="bg-gray_800 border border-solid border-white_A700 font-poppins items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]">
                  <Text className="2xl:ml-[18px] 2xl:my-[12px] 2xl:text-fs13 3xl:mb-[15px] 3xl:ml-[21px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:ml-[14px] lg:my-[9px] lg:text-fs10 mb-[17px] ml-[24px] mt-[16px] opacity-op5 text-bluegray_100 text-center text-fs18 tracking-ls1 w-[40%] xl:mb-[11px] xl:ml-[16px] xl:mt-[10px] xl:text-fs12">{`Enter your email`}</Text>
                  <Image
                    src="img_submit.svg"
                    className="2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:h-[35px] object-contain w-[auto] xl:h-[41px]"
                    alt="submit"
                  />
                </Row>
              </Column>
            </Column>
          </Row>
          <Text className="2xl:mb-[24px] 2xl:mt-[48px] 2xl:text-fs10 3xl:mb-[28px] 3xl:mt-[57px] 3xl:text-fs12 font-normal lg:mb-[18px] lg:mt-[37px] lg:text-fs8 mb-[32px] mt-[64px] mx-[auto] text-bluegray_100 text-fs14 text-left xl:mb-[21px] xl:mt-[42px] xl:text-fs9">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
        </Column>
      </footer>
    </Column>
  );
};

export default HomepageV4Page;
