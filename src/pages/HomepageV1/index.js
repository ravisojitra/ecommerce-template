import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { HomepageV1title } from "components/HomepageV1title";
import { Grid } from "components/Grid";
import { HomepageV1title0 } from "components/HomepageV1title0";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";

const HomepageV1Page = () => {
  const navigate = useNavigate();

  const handleNavigate1 = () => navigate("/homepagev2");
  const handleNavigate2 = () => navigate("/homepagev2");

  return (
    <Column className="bg-white_A700 justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center mx-[auto] self-stretch w-[100%]">
        <header className="mx-[auto] self-stretch w-[100%]">
          <Stack className="2xl:h-[72px] 3xl:h-[86px] h-[95px] lg:h-[56px] mx-[auto] self-stretch w-[100%] xl:h-[64px]">
            <Image
              src="img_background.svg"
              className="2xl:h-[72px] 3xl:h-[86px] absolute bottom-[0] h-[95px] left-[0] lg:h-[56px] object-cover right-[0] self-stretch top-[0] w-[100%] xl:h-[64px]"
              alt="background"
            />
            <Row className="-translate-x-1/2 -translate-y-1/2  2xl:bottom-[13px] 2xl:right-[107px] 3xl:bottom-[16px] 3xl:right-[128px] absolute bottom-[18px] items-center justify-center left-[50%] lg:bottom-[10px] lg:right-[83px] px-[0] right-[143px] top-[50%] w-[86%] xl:bottom-[12px] xl:right-[95px]">
              <Row className="2xl:my-[9px] 3xl:my-[10px] font-poppins items-center justify-start lg:my-[7px] my-[12px] w-[7%] xl:my-[8px]">
                <Image
                  src="img_group19.svg"
                  className="2xl:h-[19px] 2xl:my-[4px] 3xl:h-[22px] 3xl:my-[5px] h-[24px] lg:h-[14px] lg:my-[3px] my-[6px] object-contain w-[35%] xl:h-[17px] xl:my-[4px]"
                  alt="Group19"
                />
                <Text className="2xl:ml-[6px] 2xl:text-fs18 3xl:ml-[7px] 3xl:text-fs21 font-bold lg:ml-[4px] lg:text-fs14 ml-[8px] text-fs24 text-gray_800 text-left xl:ml-[5px] xl:text-fs16">{`Elliye`}</Text>
              </Row>
              <Row className="2xl:my-[12px] 3xl:my-[14px] items-center justify-center lg:my-[9px] my-[16.5px] w-[39%] xl:my-[11px]">
                <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
                  <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Categories`}</Text>
                  <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`New Arrival`}</Text>
                  <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Features`}</Text>
                  <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Collections`}</Text>
                </Row>
              </Row>
              <Row className="font-poppins items-center justify-between px-[0] w-[16%]">
                <Image
                  src="img_icon.svg"
                  className="2xl:h-[19px] 2xl:my-[13px] 3xl:h-[22px] 3xl:my-[16px] h-[24px] lg:h-[14px] lg:my-[10px] my-[18px] object-contain w-[33%] xl:h-[17px] xl:my-[12px]"
                  alt="icon"
                />
                <Button
                  className="common-pointer 2xl:px-[21px] 2xl:py-[13px] 2xl:text-fs13 3xl:px-[25px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:px-[16px] lg:py-[10px] lg:text-fs10 px-[28.5px] py-[18.045px] text-center text-fs18 text-white_A700 w-[44%] xl:px-[19px] xl:py-[12px] xl:text-fs12"
                  onClick={handleNavigate1}
                  onClick={handleNavigate2}
                >{`Login`}</Button>
              </Row>
            </Row>
          </Stack>
        </header>
        <Stack className="2xl:h-[526px] 2xl:mt-[64px] 3xl:h-[631px] 3xl:mt-[77px] h-[700px] lg:h-[409px] lg:mt-[50px] mt-[86px] mx-[auto] self-stretch w-[100%] xl:h-[468px] xl:mt-[57px]">
          <div className="absolute bottom-[0] left-[0] right-[0] self-stretch top-[0] w-[100%]">
            <Stack className="2xl:h-[526px] 3xl:h-[631px] bg-gray_100 h-[700px] lg:h-[409px] self-stretch w-[100%] xl:h-[468px]">
              <Stack className="2xl:h-[526px] 3xl:h-[631px] absolute bottom-[0] h-[700px] left-[0] lg:h-[409px] right-[0] self-stretch top-[0] w-[100%] xl:h-[468px]">
                <Image
                  src="img_banner.svg"
                  className="2xl:h-[526px] 3xl:h-[631px] absolute bottom-[0] h-[700px] left-[0] lg:h-[409px] object-cover right-[0] self-stretch top-[0] w-[100%] xl:h-[468px]"
                  alt="banner"
                />
                <Image
                  src="img_button.svg"
                  className="2xl:h-[37px] 2xl:right-[108px] 3xl:h-[44px] 3xl:right-[129px] absolute bottom-[0] h-[48px] lg:h-[28px] lg:right-[84px] object-contain right-[144px] w-[9%] xl:h-[33px] xl:right-[96px]"
                  alt="button"
                />
              </Stack>
              <Column className="-translate-y-1/2 2xl:left-[108px] 3xl:left-[129px] absolute font-playfairdisplay justify-start left-[144px] lg:left-[84px] top-[50%] w-[35%] xl:left-[96px]">
                <Text className="2xl:text-fs72 3xl:text-fs86 font-normal font-playfairdisplay lg:text-fs56 self-stretch text-fs96 text-gray_800 text-left xl:text-fs64">{`Summer Sale`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[24px] 2xl:text-fs48 3xl:mr-[9px] 3xl:mt-[28px] 3xl:text-fs57 font-bold font-poppins lg:mr-[5px] lg:mt-[18px] lg:text-fs37 mr-[10px] mt-[32px] text-fs64 text-gray_800 text-left xl:mr-[6px] xl:mt-[21px] xl:text-fs42">{`50% Off`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[24px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[28px] 3xl:text-fs16 font-normal font-poppins leading-lh32 lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[80%] xl:mr-[6px] xl:mt-[21px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                <div className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] bg-transparent border-bw lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[38%] xl:mr-[6px] xl:mt-[21px] input-wrap">
                  <Image
                    src="img_arrow.svg"
                    className="absolute w-[auto] h-[48px] top-[14.06px] bottom-[14.06px] right-[33px] object-contain lg:h-[28px] lg:top-[8px] lg:bottom-[8px] lg:right-[19px] xl:h-[33px] xl:top-[9px] xl:bottom-[9px] xl:right-[22px] 2xl:h-[37px] 2xl:top-[10px] 2xl:bottom-[10px] 2xl:right-[24px] 3xl:h-[44px] 3xl:top-[12px] 3xl:bottom-[12px] 3xl:right-[29px]"
                    alt="Arrow"
                  />
                  <Button className="2xl:pl-[22px] 2xl:pr-[68px] 2xl:py-[10px] 2xl:text-fs18 3xl:pl-[27px] 3xl:pr-[81px] 3xl:py-[12px] 3xl:text-fs21 bg-gray_800 border-bw font-medium font-poppins lg:pl-[17px] lg:pr-[53px] lg:py-[8px] lg:text-fs14 pl-[30px] pr-[91px] py-[14.06px] text-fs24 text-left text-white_A700 w-[100%] xl:pl-[20px] xl:pr-[60px] xl:py-[9px] xl:text-fs16">{`Shop Now`}</Button>
                </div>
              </Column>
            </Stack>
          </div>
          <div className="-translate-x-1/2 2xl:bottom-[27px] 3xl:bottom-[32px] absolute bottom-[36px] left-[50%] lg:bottom-[21px] w-[6%] xl:bottom-[24px]"></div>
        </Stack>
        <Column className="2xl:mt-[64px] 3xl:mt-[77px] justify-start lg:mt-[50px] mt-[86px] mx-[auto] self-stretch w-[100%] xl:mt-[57px]">
          <HomepageV1title
            children={`Categories`}
            children1={`View all`}
            src="img_arrow_1.svg"
            className="2xl:mr-[7px] 3xl:mr-[9px] items-center justify-start lg:mr-[5px] max-w-[1633px] mr-[10px] w-[86%] xl:mr-[6px]"
          />
          <Row className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] items-center justify-start lg:mr-[5px] lg:mt-[18px] ml-[1px] mr-[10px] mt-[32px] w-[86%] xl:mr-[6px] xl:mt-[21px]">
            <Column className="bg-gray_100 font-poppins items-center justify-center w-[16%]">
              <Image
                src="img_sweater.svg"
                className="2xl:h-[73px] 2xl:ml-[56px] 2xl:mr-[55px] 2xl:mt-[27px] 3xl:h-[87px] 3xl:ml-[67px] 3xl:mr-[66px] 3xl:mt-[32px] h-[96px] lg:h-[56px] lg:mt-[21px] lg:mx-[43px] ml-[75px] mr-[74px] mt-[36px] object-contain w-[auto] xl:h-[65px] xl:ml-[50px] xl:mr-[49px] xl:mt-[24px]"
                alt="Sweater"
              />
              <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Jacket`}</Text>
            </Column>
            <Column className="2xl:ml-[24px] 3xl:ml-[28px] bg-gray_100 font-poppins items-center justify-center lg:ml-[18px] ml-[32px] w-[16%] xl:ml-[21px]">
              <Image
                src="img_tshirt.svg"
                className="2xl:h-[73px] 2xl:mt-[27px] 3xl:h-[87px] 3xl:mt-[32px] h-[96px] lg:h-[56px] lg:mt-[21px] mt-[36px] mx-[auto] object-contain w-[auto] xl:h-[65px] xl:mt-[24px]"
                alt="Tshirt"
              />
              <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Shirt`}</Text>
            </Column>
            <Column className="2xl:ml-[24px] 3xl:ml-[28px] bg-gray_100 font-poppins items-center justify-center lg:ml-[18px] ml-[32px] w-[16%] xl:ml-[21px]">
              <Image
                src="img_pants.svg"
                className="2xl:h-[73px] 2xl:ml-[56px] 2xl:mr-[55px] 2xl:mt-[27px] 3xl:h-[87px] 3xl:ml-[67px] 3xl:mr-[66px] 3xl:mt-[32px] h-[96px] lg:h-[56px] lg:mt-[21px] lg:mx-[43px] ml-[75px] mr-[74px] mt-[36px] object-contain w-[auto] xl:h-[65px] xl:ml-[50px] xl:mr-[49px] xl:mt-[24px]"
                alt="Pants"
              />
              <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Pants`}</Text>
            </Column>
            <Column className="2xl:ml-[24px] 3xl:ml-[28px] bg-gray_800 font-poppins items-center justify-center lg:ml-[18px] ml-[32px] w-[16%] xl:ml-[21px]">
              <Image
                src="img_boot.svg"
                className="2xl:h-[73px] 2xl:mt-[27px] 3xl:h-[87px] 3xl:mt-[32px] h-[96px] lg:h-[56px] lg:mt-[21px] mt-[36px] mx-[auto] object-contain w-[auto] xl:h-[65px] xl:mt-[24px]"
                alt="Boot"
              />
              <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Shoes`}</Text>
            </Column>
            <Column className="2xl:ml-[24px] 3xl:ml-[28px] bg-gray_100 font-poppins items-center justify-center lg:ml-[18px] ml-[32px] w-[16%] xl:ml-[21px]">
              <Image
                src="img_dress.svg"
                className="2xl:h-[73px] 2xl:ml-[56px] 2xl:mr-[55px] 2xl:mt-[27px] 3xl:h-[87px] 3xl:ml-[67px] 3xl:mr-[66px] 3xl:mt-[32px] h-[96px] lg:h-[56px] lg:mt-[21px] lg:mx-[43px] ml-[75px] mr-[74px] mt-[36px] object-contain w-[auto] xl:h-[65px] xl:ml-[50px] xl:mr-[49px] xl:mt-[24px]"
                alt="Dress"
              />
              <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Dress`}</Text>
            </Column>
            <Column className="2xl:ml-[24px] 3xl:ml-[28px] bg-gray_100 font-poppins items-center justify-center lg:ml-[18px] ml-[32px] w-[16%] xl:ml-[21px]">
              <Image
                src="img_belt.svg"
                className="2xl:h-[73px] 2xl:mt-[27px] 3xl:h-[87px] 3xl:mt-[32px] h-[96px] lg:h-[56px] lg:mt-[21px] mt-[36px] mx-[auto] object-contain w-[auto] xl:h-[65px] xl:mt-[24px]"
                alt="Belt"
              />
              <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Accesories`}</Text>
            </Column>
          </Row>
        </Column>
      </Column>
      <Column className="2xl:mr-[7px] 2xl:mt-[64px] 3xl:mr-[9px] 3xl:mt-[77px] items-center justify-start lg:mr-[5px] lg:mt-[50px] mr-[10px] mt-[86px] w-[86%] xl:mr-[6px] xl:mt-[57px]">
        <HomepageV1title
          children={`New Arrivals`}
          children1={`View all`}
          className="items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]"
        />
        <Row className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-between lg:mt-[18px] max-w-[1632px] mr-[1px] mt-[32px] px-[0] w-[100%] xl:mt-[21px]">
          <Row className="bg-gray_100 items-center justify-start w-[50%]">
            <div className="2xl:h-[474px] 2xl:ml-[46px] 2xl:my-[21px] 3xl:h-[569px] 3xl:ml-[55px] 3xl:my-[25px] bg-bluegray_100 h-[631px] lg:h-[369px] lg:ml-[35px] lg:my-[16px] ml-[61.5px] my-[28.5px] w-[48%] xl:h-[421px] xl:ml-[41px] xl:my-[19px]"></div>
            <Column className="2xl:ml-[36px] 2xl:mr-[46px] 2xl:my-[200px] 3xl:ml-[43px] 3xl:mr-[55px] 3xl:my-[239px] font-poppins items-center justify-start lg:ml-[28px] lg:mr-[35px] lg:my-[155px] ml-[48px] mr-[61.5px] my-[266.5px] w-[31%] xl:ml-[32px] xl:mr-[41px] xl:my-[177px]">
              <Column className="items-center justify-start mx-[auto] self-stretch w-[100%]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Purple Warm Jacket`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
              <Button className="2xl:mt-[18px] 2xl:px-[22px] 2xl:py-[13px] 2xl:text-fs13 3xl:mt-[21px] 3xl:px-[27px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:mt-[14px] lg:px-[17px] lg:py-[10px] lg:text-fs10 mt-[24px] mx-[auto] px-[30px] py-[18.045px] text-center text-fs18 text-white_A700 w-[82%] xl:mt-[16px] xl:px-[20px] xl:py-[12px] xl:text-fs12">{`Add to Cart`}</Button>
            </Column>
          </Row>
          <Grid className="2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 lg:gap-[18px] w-[50%] xl:gap-[21px]">
            <Column className="bg-gray_100 items-center justify-center w-[100%]">
              <div className="2xl:h-[133px] 2xl:mt-[24px] 3xl:h-[160px] 3xl:mt-[28px] bg-bluegray_100 h-[177px] lg:h-[104px] lg:mt-[18px] mt-[32px] mx-[auto] w-[47%] xl:h-[119px] xl:mt-[21px]"></div>
              <Column className="2xl:mb-[24px] 2xl:mt-[12px] 3xl:mb-[28px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[18px] lg:mt-[9px] mb-[32px] mt-[16px] mx-[auto] w-[74%] xl:mb-[21px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Blue Grey Warm Jacket`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="bg-gray_100 items-center justify-center w-[100%]">
              <div className="2xl:h-[133px] 2xl:mt-[24px] 3xl:h-[160px] 3xl:mt-[28px] bg-bluegray_100 h-[177px] lg:h-[104px] lg:mt-[18px] mt-[32px] mx-[auto] w-[47%] xl:h-[119px] xl:mt-[21px]"></div>
              <Column className="2xl:mb-[24px] 2xl:mt-[12px] 3xl:mb-[28px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[18px] lg:mt-[9px] mb-[32px] mt-[16px] mx-[auto] w-[44%] xl:mb-[21px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Denim Jacket`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="bg-gray_100 items-center justify-center w-[100%]">
              <div className="2xl:h-[133px] 2xl:mt-[24px] 3xl:h-[160px] 3xl:mt-[28px] bg-bluegray_100 h-[177px] lg:h-[104px] lg:mt-[18px] mt-[32px] mx-[auto] w-[47%] xl:h-[119px] xl:mt-[21px]"></div>
              <Column className="2xl:mb-[24px] 2xl:mt-[12px] 3xl:mb-[28px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[18px] lg:mt-[9px] mb-[32px] mt-[16px] mx-[auto] w-[40%] xl:mb-[21px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Black Jacket`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="bg-gray_100 items-center justify-center w-[100%]">
              <div className="2xl:h-[133px] 2xl:mt-[24px] 3xl:h-[160px] 3xl:mt-[28px] bg-bluegray_100 h-[177px] lg:h-[104px] lg:mt-[18px] mt-[32px] mx-[auto] w-[47%] xl:h-[119px] xl:mt-[21px]"></div>
              <Column className="2xl:mb-[24px] 2xl:mt-[12px] 3xl:mb-[28px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[18px] lg:mt-[9px] mb-[32px] mt-[16px] mx-[auto] w-[60%] xl:mb-[21px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Green Polar Jacket`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
          </Grid>
        </Row>
      </Column>
      <Column className="2xl:mr-[7px] 2xl:mt-[64px] 3xl:mr-[9px] 3xl:mt-[77px] items-center justify-start lg:mr-[5px] lg:mt-[50px] mr-[10px] mt-[86px] w-[85%] xl:mr-[6px] xl:mt-[57px]">
        <HomepageV1title0
          children={`Featured`}
          children1={`View all`}
          src="img_arrow_2.svg"
          className="items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]"
        />
        <List
          className="2xl:mt-[24px] 3xl:mt-[28px] flex-wrap gap-[0] lg:mt-[18px] min-h-[auto] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]"
          orientation="vertical"
        >
          <Row className="2xl:my-[12px] 3xl:my-[14px] items-center justify-between lg:my-[9px] mx-[auto] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
            <Column className="border-2 border-gray_800 border-solid font-poppins items-center justify-center w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[32px] 3xl:h-[226px] 3xl:mt-[39px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[25px] mt-[43.5px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[29px]"></div>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[48%] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Black Briefcase`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
              <Button className="2xl:mb-[32px] 2xl:mt-[12px] 2xl:px-[22px] 2xl:py-[13px] 2xl:text-fs13 3xl:mb-[39px] 3xl:mt-[14px] 3xl:px-[27px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:mb-[25px] lg:mt-[9px] lg:px-[17px] lg:py-[10px] lg:text-fs10 mb-[43.5px] mt-[16px] mx-[auto] px-[30px] py-[18.045px] text-center text-fs18 text-white_A700 w-[53%] xl:mb-[29px] xl:mt-[10px] xl:px-[20px] xl:py-[12px] xl:text-fs12">{`Add to Cart`}</Button>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[61px] 3xl:h-[226px] 3xl:mt-[73px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81.5px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[29%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Pink Shirt`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mb-[1px] w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[60px] 3xl:h-[226px] 3xl:mt-[72px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
              <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[38%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Gray T-shirt`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mb-[1px] w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[60px] 3xl:h-[226px] 3xl:mt-[72px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
              <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[37%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Red Flannel`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
          </Row>
          <Row className="2xl:my-[12px] 3xl:my-[14px] items-center justify-between lg:my-[9px] mx-[auto] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[61px] 3xl:h-[226px] 3xl:mt-[73px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81.5px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[50%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Black Highheels`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[61px] 3xl:h-[226px] 3xl:mt-[73px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81.5px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[60%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Casual Grey Shoes`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[61px] 3xl:h-[226px] 3xl:mt-[73px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81.5px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[41%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Brown Shoes`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mb-[1px] w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[60px] 3xl:h-[226px] 3xl:mt-[72px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
              <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[44%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Business Shirt`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
          </Row>
          <Row className="2xl:my-[12px] 3xl:my-[14px] items-center justify-between lg:my-[9px] mx-[auto] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[61px] 3xl:h-[226px] 3xl:mt-[73px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81.5px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[56%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Grey Warm Pants`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[61px] 3xl:h-[226px] 3xl:mt-[73px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81.5px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[61%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Green Sport Jacket`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mb-[1px] w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[60px] 3xl:h-[226px] 3xl:mt-[72px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
              <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[64%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Purple Warm Jacket`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mb-[1px] w-[24%]">
              <div className="2xl:h-[188px] 2xl:mt-[60px] 3xl:h-[226px] 3xl:mt-[72px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
              <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[63%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Woman Denim Skirt`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
          </Row>
        </List>
      </Column>
      <Column className="2xl:mt-[64px] 3xl:mt-[77px] items-center lg:mt-[50px] mt-[86px] mx-[auto] self-stretch w-[100%] xl:mt-[57px]">
        <Stack className="2xl:h-[409px] 3xl:h-[490px] h-[544px] lg:h-[318px] mx-[auto] self-stretch w-[100%] xl:h-[363px]">
          <Column className="absolute bg-gray_800 font-poppins items-center justify-start self-stretch top-[0] w-[100%]">
            <Text className="2xl:mb-[245px] 2xl:ml-[108px] 2xl:mr-[1050px] 2xl:mt-[33px] 2xl:text-fs27 3xl:mb-[294px] 3xl:ml-[129px] 3xl:mr-[1260px] 3xl:mt-[40px] 3xl:text-fs32 font-bold lg:mb-[190px] lg:ml-[84px] lg:mr-[816px] lg:mt-[26px] lg:text-fs21 mb-[327px] ml-[144px] mr-[1400px] mt-[45px] text-fs36 text-left text-white_A700 xl:mb-[218px] xl:ml-[96px] xl:mr-[934px] xl:mt-[30px] xl:text-fs24">{`Summer Collections`}</Text>
          </Column>
          <Row className="-translate-x-1/2 absolute bottom-[0] items-center justify-start left-[50%] w-[89%]">
            <Row className="items-center justify-between px-[0] w-[97%]">
              <Column className="bg-bluegray_100 font-poppins items-center justify-center w-[33%]">
                <Text className="2xl:ml-[44px] 2xl:mr-[207px] 2xl:my-[109px] 2xl:text-fs27 3xl:ml-[53px] 3xl:mr-[248px] 3xl:my-[131px] 3xl:text-fs32 font-normal leading-lh lg:ml-[34px] lg:mr-[161px] lg:my-[85px] lg:text-fs21 ml-[59px] mr-[276px] my-[146px] text-fs36 text-gray_800 text-left w-[36%] xl:ml-[39px] xl:mr-[184px] xl:my-[97px] xl:text-fs24">
                  <span className="text-gray_800 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>
                      {`Summer `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-gray_800 text-fs36 font-poppins text-left font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Column>
              <Column className="bg-bluegray_100 font-poppins items-center justify-center w-[33%]">
                <Text className="2xl:ml-[39px] 2xl:mr-[211px] 2xl:my-[109px] 2xl:text-fs27 3xl:ml-[47px] 3xl:mr-[253px] 3xl:my-[131px] 3xl:text-fs32 font-normal leading-lh lg:ml-[30px] lg:mr-[164px] lg:my-[85px] lg:text-fs21 ml-[53px] mr-[282px] my-[146px] text-fs36 text-left text-white_A700 w-[36%] xl:ml-[35px] xl:mr-[188px] xl:my-[97px] xl:text-fs24">
                  <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>
                      {`Casual `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-white_A700 text-fs36 font-poppins text-left font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Column>
              <Column className="bg-bluegray_100 font-poppins items-center justify-center w-[33%]">
                <Text className="2xl:ml-[39px] 2xl:mr-[212px] 2xl:my-[109px] 2xl:text-fs27 3xl:ml-[46px] 3xl:mr-[254px] 3xl:my-[131px] 3xl:text-fs32 font-normal leading-lh lg:ml-[30px] lg:mr-[165px] lg:my-[85px] lg:text-fs21 ml-[52px] mr-[283px] my-[146px] text-fs36 text-left text-white_A700 w-[36%] xl:ml-[34px] xl:mr-[188px] xl:my-[97px] xl:text-fs24">
                  <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>
                      {`Big Vibe `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-white_A700 text-fs36 font-poppins text-left font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Column>
            </Row>
            <Image
              src="img_next.svg"
              className="2xl:h-[46px] 2xl:my-[127px] 3xl:h-[55px] 3xl:my-[153px] h-[60px] lg:h-[35px] lg:my-[99px] my-[170px] object-contain w-[auto] xl:h-[41px] xl:my-[113px]"
              alt="next"
            />
          </Row>
        </Stack>
      </Column>
      <Column className="2xl:mr-[7px] 2xl:mt-[64px] 3xl:mr-[9px] 3xl:mt-[77px] items-center justify-start lg:mr-[5px] lg:mt-[50px] mr-[10px] mt-[86px] w-[85%] xl:mr-[6px] xl:mt-[57px]">
        <HomepageV1title0
          children={`Popular This Week`}
          children1={`View all`}
          className="items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]"
        />
        <Grid className="2xl:gap-[24px] 2xl:mt-[24px] 3xl:gap-[28px] 3xl:mt-[28px] gap-[32px] grid grid-cols-3 lg:gap-[18px] lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:gap-[21px] xl:mt-[21px]">
          <Row className="items-center justify-start w-[100%]">
            <Image
              src="img_maskgroup.svg"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[44%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[28px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[34px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[22px] lg:my-[29px] ml-[16px] mr-[38px] my-[50px] w-[43%] xl:ml-[10px] xl:mr-[25px] xl:my-[33px]">
              <Column className="items-center mx-[auto] self-stretch w-[100%]">
                <Column className="font-poppins justify-start mx-[auto] self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Checkered Jacket`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[70%] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_1.svg"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[44%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[58px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[70px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[45px] lg:my-[29px] ml-[16px] mr-[78px] my-[50px] w-[35%] xl:ml-[10px] xl:mr-[52px] xl:my-[33px]">
              <Column className="items-center mx-[auto] self-stretch w-[100%]">
                <Column className="font-poppins justify-start mx-[auto] self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Elegant Jacket`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[85%] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_2.svg"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[44%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[13px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[16px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[10px] lg:my-[29px] ml-[16px] mr-[18px] my-[50px] w-[46%] xl:ml-[10px] xl:mr-[12px] xl:my-[33px]">
              <Column className="items-center mx-[auto] self-stretch w-[100%]">
                <Column className="font-poppins justify-start mx-[auto] self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Blue Woman Denim`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[64%] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-start w-[100%]">
            <Image
              src="img_maskgroup_3.svg"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[44%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[65px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[78px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[50px] lg:my-[29px] ml-[16px] mr-[87px] my-[50px] w-[33%] xl:ml-[10px] xl:mr-[58px] xl:my-[33px]">
              <Column className="items-center mx-[auto] self-stretch w-[100%]">
                <Column className="font-poppins justify-start mx-[auto] self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Orange Jeans`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[89%] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_4.svg"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[44%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[78px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[94px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[61px] lg:my-[29px] ml-[16px] mr-[105px] my-[50px] w-[30%] xl:ml-[10px] xl:mr-[70px] xl:my-[33px]">
              <Column className="2xl:mr-[7px] 3xl:mr-[9px] font-poppins justify-start lg:mr-[5px] mr-[10px] w-[87%] xl:mr-[6px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Blue Jeans`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
              </Column>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]">
                <RatingBar
                  className="mx-[auto] self-stretch w-[100%]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_5.svg"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[44%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[79px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[95px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[61px] lg:my-[29px] ml-[16px] mr-[106px] my-[50px] w-[30%] xl:ml-[10px] xl:mr-[70px] xl:my-[33px]">
              <Column className="2xl:mr-[6px] 3xl:mr-[7px] font-poppins justify-start lg:mr-[4px] mr-[8px] w-[95%] xl:mr-[5px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Gray Watch`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
              </Column>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]">
                <RatingBar
                  className="mx-[auto] self-stretch w-[100%]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Column>
          </Row>
          <Row className="items-center justify-start w-[100%]">
            <Image
              src="img_maskgroup_6.svg"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[44%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[25px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[30px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[19px] lg:my-[29px] ml-[16px] mr-[34px] my-[50px] w-[43%] xl:ml-[10px] xl:mr-[22px] xl:my-[33px]">
              <Column className="items-center mx-[auto] self-stretch w-[100%]">
                <Column className="font-poppins justify-start mx-[auto] self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Black Sport Jacket`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[68%] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_7.svg"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[44%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[78px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[94px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[61px] lg:my-[29px] ml-[16px] mr-[105px] my-[50px] w-[30%] xl:ml-[10px] xl:mr-[70px] xl:my-[33px]">
              <Column className="2xl:mr-[7px] 3xl:mr-[9px] font-poppins justify-start lg:mr-[5px] mr-[10px] w-[91%] xl:mr-[6px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Wristwatch`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
              </Column>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]">
                <RatingBar
                  className="mx-[auto] self-stretch w-[100%]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_8.svg"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[44%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="MaskGroup"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[63px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[76px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[49px] lg:my-[29px] ml-[16px] mr-[85px] my-[50px] w-[34%] xl:ml-[10px] xl:mr-[56px] xl:my-[33px]">
              <Column className="items-center mx-[auto] self-stretch w-[100%]">
                <Column className="font-poppins justify-start mx-[auto] self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Classic Watch`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[88%] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
        </Grid>
      </Column>
      <Column className="2xl:mt-[64px] 3xl:mt-[77px] items-center lg:mt-[50px] mt-[86px] mx-[auto] self-stretch w-[100%] xl:mt-[57px]">
        <Column className="font-poppins justify-start self-stretch w-[100%]">
          <Text className="2xl:mx-[108px] 2xl:text-fs27 3xl:mx-[129px] 3xl:text-fs32 font-bold lg:mx-[84px] lg:text-fs21 mx-[144px] text-fs36 text-gray_800 text-left xl:mx-[96px] xl:text-fs24">{`Why Choose Us`}</Text>
          <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
            <List
              className="2xl:gap-[24px] 3xl:gap-[28px] bg-gray_100 flex-wrap gap-[32px] grid grid-cols-4 lg:gap-[18px] min-h-[auto] mx-[auto] overflow-x-hidden overflow-y-hidden self-stretch w-[100%] xl:gap-[21px]"
              orientation="horizontal"
            >
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_1.svg"
                  className="2xl:h-[91px] 2xl:mt-[47px] 3xl:h-[109px] 3xl:mt-[56px] h-[120px] lg:h-[70px] lg:mt-[36px] mt-[63px] mx-[auto] object-contain w-[auto] xl:h-[81px] xl:mt-[42px]"
                  alt="icon"
                />
                <Column className="2xl:mb-[47px] 2xl:mt-[24px] 2xl:mx-[64px] 3xl:mb-[56px] 3xl:mt-[28px] 3xl:mx-[77px] font-poppins justify-start lg:mb-[36px] lg:mt-[18px] lg:mx-[50px] mb-[63px] mt-[32px] mx-[86.5px] w-[55%] xl:mb-[42px] xl:mt-[21px] xl:mx-[57px]">
                  <Column className="self-stretch w-[100%]">
                    <Text className="2xl:mx-[19px] 2xl:text-fs18 3xl:mx-[22px] 3xl:text-fs21 font-bold lg:mx-[14px] lg:text-fs14 mx-[25.5px] text-fs24 text-gray_800 text-left xl:mx-[17px] xl:text-fs16">{`Free Delivery`}</Text>
                  </Column>
                  <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal leading-lh lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] self-stretch text-center text-fs18 text-gray_500 w-[100%] xl:mt-[10px] xl:text-fs12">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_2.svg"
                  className="2xl:h-[91px] 2xl:mt-[47px] 3xl:h-[109px] 3xl:mt-[56px] h-[120px] lg:h-[70px] lg:mt-[36px] mt-[63px] mx-[auto] object-contain w-[auto] xl:h-[81px] xl:mt-[42px]"
                  alt="icon"
                />
                <Column className="2xl:mb-[47px] 2xl:mt-[24px] 2xl:mx-[64px] 3xl:mb-[56px] 3xl:mt-[28px] 3xl:mx-[77px] font-poppins justify-start lg:mb-[36px] lg:mt-[18px] lg:mx-[50px] mb-[63px] mt-[32px] mx-[86px] w-[56%] xl:mb-[42px] xl:mt-[21px] xl:mx-[57px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Payment Method`}</Text>
                  <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center lg:mt-[9px] mt-[16px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]">
                    <Text className="2xl:text-fs13 3xl:text-fs16 font-normal leading-lh lg:text-fs10 mx-[auto] text-center text-fs18 text-gray_500 w-[100%] xl:text-fs12">
                      {
                        <>
                          {`This free shipping`}
                          <br />
                          {`only for selected region`}
                        </>
                      }
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_3.svg"
                  className="2xl:h-[91px] 2xl:mt-[47px] 3xl:h-[109px] 3xl:mt-[56px] h-[120px] lg:h-[70px] lg:mt-[36px] mt-[63px] mx-[auto] object-contain w-[auto] xl:h-[81px] xl:mt-[42px]"
                  alt="icon"
                />
                <Column className="2xl:mb-[47px] 2xl:mt-[24px] 3xl:mb-[56px] 3xl:mt-[28px] font-poppins items-center justify-start lg:mb-[36px] lg:mt-[18px] mb-[63px] mt-[32px] mx-[auto] w-[55%] xl:mb-[42px] xl:mt-[21px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 mx-[auto] text-fs24 text-gray_800 text-left xl:text-fs16">{`Warranty`}</Text>
                  <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal leading-lh lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] self-stretch text-center text-fs18 text-gray_500 w-[100%] xl:mt-[10px] xl:text-fs12">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_4.svg"
                  className="2xl:h-[91px] 2xl:mt-[47px] 3xl:h-[109px] 3xl:mt-[56px] h-[120px] lg:h-[70px] lg:mt-[36px] mt-[63px] mx-[auto] object-contain w-[auto] xl:h-[81px] xl:mt-[42px]"
                  alt="icon"
                />
                <Column className="2xl:mb-[47px] 2xl:mt-[24px] 2xl:mx-[58px] 3xl:mb-[56px] 3xl:mt-[28px] 3xl:mx-[70px] font-poppins justify-start lg:mb-[36px] lg:mt-[18px] lg:mx-[45px] mb-[63px] mt-[32px] mx-[78px] w-[60%] xl:mb-[42px] xl:mt-[21px] xl:mx-[52px]">
                  <Column className="self-stretch w-[100%]">
                    <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Customer Support`}</Text>
                  </Column>
                  <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal leading-lh lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-center text-fs18 text-gray_500 w-[93%] xl:mt-[10px] xl:text-fs12">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
            </List>
          </Column>
        </Column>
      </Column>
      <Image
        src="img_brand.svg"
        className="2xl:h-[52px] 2xl:mr-[7px] 2xl:mt-[64px] 3xl:h-[62px] 3xl:mr-[9px] 3xl:mt-[77px] h-[68.29px] lg:h-[40px] lg:mr-[5px] lg:mt-[50px] mr-[10px] mt-[86px] object-contain w-[51%] xl:h-[46px] xl:mr-[6px] xl:mt-[57px]"
        alt="brand"
      />
      <Column className="2xl:mt-[64px] 3xl:mt-[77px] items-center lg:mt-[50px] mt-[86px] mx-[auto] self-stretch w-[100%] xl:mt-[57px]">
        <footer className="mx-[auto] self-stretch w-[100%]">
          <Column className="bg-gray_800 font-poppins items-center justify-end mx-[auto] self-stretch w-[100%]">
            <Row className="2xl:mt-[48px] 3xl:mt-[57px] items-center justify-evenly lg:mt-[37px] mt-[64px] px-[0] self-stretch w-[100%] xl:mt-[42px]">
              <Row className="justify-between px-[0] self-stretch w-[100%]">
                <Column className="2xl:mb-[19px] 2xl:ml-[108px] 3xl:mb-[23px] 3xl:ml-[129px] font-poppins justify-start lg:mb-[15px] lg:ml-[84px] mb-[26px] ml-[144px] w-[23%] xl:mb-[17px] xl:ml-[96px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Join our Newsletter`}</Text>
                  <Text className="2xl:mt-[18px] 2xl:text-fs13 3xl:mt-[21px] 3xl:text-fs16 font-normal leading-lh lg:mt-[14px] lg:text-fs10 mt-[24px] self-stretch text-fs18 text-left text-white_A700 w-[100%] xl:mt-[16px] xl:text-fs12">
                    {
                      <>
                        {`Drop your email below to get update about us, `}
                        <br />
                        {`lastest news, tips, and more!`}
                      </>
                    }
                  </Text>
                  <Row className="2xl:mt-[26px] 3xl:mt-[31px] bg-white_A700 font-poppins items-center justify-start lg:mt-[20px] mt-[35px] self-stretch w-[100%] xl:mt-[23px]">
                    <Text className="2xl:ml-[18px] 2xl:my-[12px] 2xl:text-fs13 3xl:mb-[15px] 3xl:ml-[21px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:ml-[14px] lg:my-[9px] lg:text-fs10 mb-[17px] ml-[24px] mt-[16px] opacity-op5 text-center text-fs18 text-gray_500 tracking-ls1 w-[36%] xl:mb-[11px] xl:ml-[16px] xl:mt-[10px] xl:text-fs12">{`Enter your email`}</Text>
                    <Image
                      src="img_arrow_4.svg"
                      className="2xl:h-[24px] 2xl:mb-[11px] 2xl:ml-[120px] 2xl:mr-[42px] 2xl:mt-[10px] 3xl:h-[28px] 3xl:mb-[13px] 3xl:ml-[144px] 3xl:mr-[50px] 3xl:mt-[12px] h-[31px] lg:h-[19px] lg:ml-[93px] lg:mr-[32px] lg:my-[8px] mb-[15px] ml-[161px] mr-[56px] mt-[14px] object-contain w-[8%] xl:h-[21px] xl:mb-[10px] xl:ml-[107px] xl:mr-[37px] xl:mt-[9px]"
                      alt="Arrow"
                    />
                  </Row>
                </Column>
                <Column className="2xl:mb-[14px] 3xl:mb-[17px] font-poppins justify-start lg:mb-[11px] mb-[19px] w-[9%] xl:mb-[12px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-fs24 text-left text-white_A700 xl:text-fs16">{`Product Links`}</Text>
                  <Column className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[61%] xl:mr-[6px] xl:mt-[16px]">
                    <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 mr-[1px] text-fs18 text-left text-white_A700 xl:text-fs12">{`Categories`}</Text>
                    <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-fs18 text-left text-white_A700 xl:mt-[10px] xl:text-fs12">{`New Arrival`}</Text>
                    <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Features`}</Text>
                    <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mr-[1px] mt-[16px] text-fs18 text-left text-white_A700 xl:mt-[10px] xl:text-fs12">{`Collections`}</Text>
                  </Column>
                </Column>
                <Column className="font-poppins justify-start w-[7%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-fs24 text-left text-white_A700 xl:text-fs16">{`Company`}</Text>
                  <Column className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[61%] xl:mr-[6px] xl:mt-[16px]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:text-fs12">{`About`}</Text>
                    <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:mt-[6px] xl:text-fs12">{`Blog`}</Text>
                    <Text className="2xl:mr-[2px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[2px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[1px] lg:mt-[5px] lg:text-fs10 mr-[3px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[2px] xl:mt-[6px] xl:text-fs12">{`Careers`}</Text>
                    <Text className="2xl:mt-[7px] 2xl:text-fs13 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mt-[5px] lg:text-fs10 mr-[1px] mt-[10px] text-fs18 text-left text-white_A700 xl:mt-[6px] xl:text-fs12">{`Contact`}</Text>
                    <Text className="2xl:mt-[7px] 2xl:text-fs13 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mt-[5px] lg:text-fs10 mt-[10px] self-stretch text-fs18 text-left text-white_A700 xl:mt-[6px] xl:text-fs12">{`Services`}</Text>
                  </Column>
                </Column>
                <Column className="2xl:mb-[27px] 3xl:mb-[33px] font-poppins justify-start lg:mb-[21px] mb-[37px] w-[8%] xl:mb-[24px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Support`}</Text>
                  <Column className="2xl:mt-[18px] 3xl:mt-[21px] items-center lg:mt-[14px] mt-[24px] mx-[auto] self-stretch w-[100%] xl:mt-[16px]">
                    <Column className="font-poppins justify-start mx-[auto] self-stretch w-[100%]">
                      <Text className="2xl:mr-[6px] 2xl:text-fs13 3xl:mr-[8px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[9px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:text-fs12">{`Support Center`}</Text>
                      <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:mt-[6px] xl:text-fs12">{`FAQ`}</Text>
                      <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:mt-[6px] xl:text-fs12">{`Privacy Policy`}</Text>
                      <Text className="2xl:mt-[7px] 2xl:text-fs13 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mt-[5px] lg:text-fs10 mt-[10px] self-stretch text-fs18 text-left text-white_A700 xl:mt-[6px] xl:text-fs12">{`Terms of service`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="2xl:mb-[113px] 2xl:mr-[176px] 3xl:mb-[135px] 3xl:mr-[211px] font-poppins justify-start lg:mb-[88px] lg:mr-[137px] mb-[151px] mr-[235px] w-[8%] xl:mb-[100px] xl:mr-[156px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-fs24 text-left text-white_A700 xl:text-fs16">{`Get In Touch`}</Text>
                  <Image
                    src="img_sosmedia.svg"
                    className="2xl:h-[19px] 2xl:mr-[7px] 2xl:mt-[18px] 3xl:h-[22px] 3xl:mr-[9px] 3xl:mt-[21px] h-[24px] lg:h-[14px] lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] object-contain w-[79%] xl:h-[17px] xl:mr-[6px] xl:mt-[16px]"
                    alt="sosmedia"
                  />
                </Column>
              </Row>
            </Row>
            <Text className="2xl:mb-[24px] 2xl:ml-[615px] 2xl:mr-[614px] 2xl:mt-[60px] 2xl:text-fs10 3xl:mb-[28px] 3xl:ml-[738px] 3xl:mr-[737px] 3xl:mt-[72px] 3xl:text-fs12 font-normal lg:mb-[18px] lg:ml-[478px] lg:mr-[477px] lg:mt-[47px] lg:text-fs8 mb-[32px] ml-[820px] mr-[819px] mt-[81px] text-fs14 text-left text-white_A700 xl:mb-[21px] xl:ml-[547px] xl:mr-[546px] xl:mt-[54px] xl:text-fs9">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
          </Column>
        </footer>
      </Column>
    </Column>
  );
};

export default HomepageV1Page;
