import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { HomepageV1title0 } from "components/HomepageV1title0";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";
import { ProductListfooter } from "components/ProductListfooter";

const HomepageV2Page = () => {
  const navigate = useNavigate();

  const handleNavigate3 = () => navigate("/homepagev4");

  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <header className="mx-[auto] self-stretch w-[100%]">
        <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] self-stretch w-[100%]">
          <Row className="2xl:mt-[18px] 3xl:mt-[21px] items-center justify-start lg:mt-[14px] mt-[24px] mx-[auto] w-[85%] xl:mt-[16px]">
            <Row className="2xl:mb-[8px] 2xl:mt-[4px] 3xl:mb-[9px] 3xl:mt-[5px] items-center justify-start lg:mb-[6px] lg:mt-[3px] mb-[11px] mt-[6px] w-[7%] xl:mb-[7px] xl:mt-[4px]">
              <Image
                src="img_group19.svg"
                className="2xl:h-[19px] 2xl:my-[4px] 3xl:h-[22px] 3xl:my-[5px] h-[24px] lg:h-[14px] lg:my-[3px] my-[6px] object-contain w-[35%] xl:h-[17px] xl:my-[4px]"
                alt="Group19"
              />
              <Text className="2xl:ml-[6px] 2xl:text-fs18 3xl:ml-[7px] 3xl:text-fs21 font-bold lg:ml-[4px] lg:text-fs14 ml-[8px] text-fs24 text-gray_800 text-left xl:ml-[5px] xl:text-fs16">{`Elliye`}</Text>
            </Row>
            <Row className="2xl:mb-[3px] 2xl:ml-[308px] 3xl:mb-[4px] 3xl:ml-[370px] bg-white_A700 border-2 border-gray_100 border-solid items-center justify-center lg:mb-[2px] lg:ml-[239px] mb-[5px] ml-[411px] w-[36%] xl:mb-[3px] xl:ml-[274px]">
              <Text className="2xl:mb-[8px] 2xl:ml-[24px] 2xl:mt-[7px] 2xl:text-fs13 3xl:ml-[28px] 3xl:my-[9px] 3xl:text-fs16 font-normal lg:mb-[6px] lg:ml-[18px] lg:mt-[5px] lg:text-fs10 mb-[11px] ml-[32px] mt-[10px] opacity-op5 text-center text-fs18 text-gray_500 w-[19%] xl:mb-[7px] xl:ml-[21px] xl:mt-[6px] xl:text-fs12">{`Search here`}</Text>
              <Image
                src="img_search.svg"
                className="2xl:h-[37px] 2xl:ml-[297px] 3xl:h-[44px] 3xl:ml-[357px] h-[48px] lg:h-[28px] lg:ml-[231px] ml-[397px] object-contain w-[auto] xl:h-[33px] xl:ml-[264px]"
                alt="search"
              />
            </Row>
            <Image
              src="img_icon_5.svg"
              className="2xl:h-[19px] 2xl:mb-[12px] 2xl:ml-[228px] 2xl:mt-[9px] 3xl:h-[22px] 3xl:mb-[15px] 3xl:ml-[273px] 3xl:mt-[10px] h-[24px] lg:h-[14px] lg:mb-[9px] lg:ml-[177px] lg:mt-[7px] mb-[17px] ml-[304px] mt-[12px] object-contain w-[5%] xl:h-[17px] xl:mb-[11px] xl:ml-[202px] xl:mt-[8px]"
              alt="icon"
            />
            <Button
              className="common-pointer 2xl:ml-[24px] 2xl:px-[22px] 2xl:py-[12px] 2xl:text-fs10 3xl:ml-[28px] 3xl:px-[27px] 3xl:py-[15px] 3xl:text-fs12 bg-gray_800 border-bw font-bold lg:ml-[18px] lg:px-[17px] lg:py-[10px] lg:text-fs8 ml-[32px] px-[30px] py-[17.205px] text-center text-fs14 text-white_A700 w-[7%] xl:ml-[21px] xl:px-[20px] xl:py-[11px] xl:text-fs9"
              onClick={handleNavigate3}
            >{`Login`}</Button>
          </Row>
          <Line className="2xl:mt-[14px] 3xl:mt-[17px] bg-gray_100 h-[1px] lg:mt-[11px] mt-[19px] mx-[auto] w-[85%] xl:mt-[12px]" />
          <Row className="2xl:mb-[18px] 2xl:mt-[17px] 3xl:mb-[21px] 3xl:mt-[20px] items-center justify-center lg:mb-[14px] lg:mt-[13px] mb-[24px] mt-[23px] mx-[auto] w-[41%] xl:mb-[16px] xl:mt-[15px]">
            <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Categories`}</Text>
              <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`New Arrival`}</Text>
              <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Features`}</Text>
              <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Collections`}</Text>
              <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Discount`}</Text>
            </Row>
          </Row>
        </Column>
      </header>
      <Stack className="2xl:h-[563px] 3xl:h-[676px] h-[750px] lg:h-[438px] mx-[auto] self-stretch w-[100%] xl:h-[501px]">
        <div className="2xl:bottom-[24px] 2xl:left-[108px] 3xl:bottom-[28px] 3xl:left-[129px] absolute bottom-[32px] left-[144px] lg:bottom-[18px] lg:left-[84px] w-[6%] xl:bottom-[21px] xl:left-[96px]"></div>
        <div className="absolute bottom-[0] left-[0] right-[0] self-stretch top-[0] w-[100%]">
          <Column className="bg-bluegray_100 font-poppins justify-end self-stretch w-[100%]">
            <Column className="2xl:mt-[88px] 2xl:mx-[108px] 3xl:mt-[106px] 3xl:mx-[129px] justify-start lg:mt-[68px] lg:mx-[84px] mt-[118px] mx-[144px] w-[42%] xl:mt-[78px] xl:mx-[96px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-medium font-poppins lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`50% Off Limited Offer`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs96 3xl:mt-[7px] 3xl:text-fs115 font-bold font-playfairdisplay lg:mt-[4px] lg:text-fs74 mt-[8px] self-stretch text-fs128 text-left text-white_A700 xl:mt-[5px] xl:text-fs85">
                {
                  <>
                    {`Summer `}
                    <br />
                    {`Collection`}
                  </>
                }
              </Text>
            </Column>
            <div className="2xl:mt-[60px] 2xl:mx-[108px] 3xl:mt-[72px] 3xl:mx-[129px] bg-transparent border-bw lg:mt-[46px] lg:mx-[84px] mt-[80px] mx-[144px] w-[13%] xl:mt-[53px] xl:mx-[96px] input-wrap">
              <Image
                src="img_arrow.svg"
                className="absolute w-[auto] h-[48px] top-[14.06px] bottom-[14.06px] right-[33px] object-contain lg:h-[28px] lg:top-[8px] lg:bottom-[8px] lg:right-[19px] xl:h-[33px] xl:top-[9px] xl:bottom-[9px] xl:right-[22px] 2xl:h-[37px] 2xl:top-[10px] 2xl:bottom-[10px] 2xl:right-[24px] 3xl:h-[44px] 3xl:top-[12px] 3xl:bottom-[12px] 3xl:right-[29px]"
                alt="Arrow"
              />
              <Button className="2xl:pl-[22px] 2xl:pr-[68px] 2xl:py-[10px] 2xl:text-fs18 3xl:pl-[27px] 3xl:pr-[81px] 3xl:py-[12px] 3xl:text-fs21 bg-gray_800 border-bw font-medium lg:pl-[17px] lg:pr-[53px] lg:py-[8px] lg:text-fs14 pl-[30px] pr-[91px] py-[14.06px] text-fs24 text-left text-white_A700 w-[100%] xl:pl-[20px] xl:pr-[60px] xl:py-[9px] xl:text-fs16">{`Shop Now`}</Button>
            </div>
            <Column className="2xl:mb-[24px] 3xl:mb-[28px] items-end lg:mb-[18px] mb-[32px] self-stretch w-[100%] xl:mb-[21px]">
              <Row className="2xl:ml-[7px] 3xl:ml-[9px] items-center justify-end lg:ml-[5px] ml-[10px] shadow-bs w-[57%] xl:ml-[6px]">
                <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                  <Image
                    src="img_sweater_1.svg"
                    className="2xl:h-[43px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:mt-[18px] mt-[31px] mx-[auto] object-contain w-[auto] xl:h-[38px] xl:mt-[20px]"
                    alt="Sweater"
                  />
                  <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Jacket`}</Text>
                </Column>
                <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                  <Image
                    src="img_tshirt_1.svg"
                    className="2xl:h-[43px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:mt-[18px] mt-[31px] mx-[auto] object-contain w-[auto] xl:h-[38px] xl:mt-[20px]"
                    alt="Tshirt"
                  />
                  <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shirt`}</Text>
                </Column>
                <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                  <Image
                    src="img_pants_1.svg"
                    className="2xl:h-[43px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:mt-[18px] mt-[31px] mx-[auto] object-contain w-[auto] xl:h-[38px] xl:mt-[20px]"
                    alt="Pants"
                  />
                  <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Pants`}</Text>
                </Column>
                <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-gray_800 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                  <Image
                    src="img_boot_1.svg"
                    className="2xl:h-[43px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:mt-[18px] mt-[31px] mx-[auto] object-contain w-[auto] xl:h-[38px] xl:mt-[20px]"
                    alt="Boot"
                  />
                  <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shoes`}</Text>
                </Column>
                <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                  <Image
                    src="img_dress_1.svg"
                    className="2xl:h-[43px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:mt-[18px] mt-[31px] mx-[auto] object-contain w-[auto] xl:h-[38px] xl:mt-[20px]"
                    alt="Dress"
                  />
                  <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Dress`}</Text>
                </Column>
                <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                  <Image
                    src="img_belt_1.svg"
                    className="2xl:h-[43px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:mt-[18px] mt-[31px] mx-[auto] object-contain w-[auto] xl:h-[38px] xl:mt-[20px]"
                    alt="Belt"
                  />
                  <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Accesories`}</Text>
                </Column>
                <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-end justify-center lg:ml-[9px] ml-[16px] w-[3%] xl:ml-[10px]">
                  <Line className="2xl:h-[43px] 2xl:ml-[7px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:ml-[9px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:ml-[5px] lg:mt-[18px] ml-[10px] mt-[31px] w-[1px] xl:h-[38px] xl:ml-[6px] xl:mt-[20px]" />
                  <Text className="2xl:mb-[22px] 2xl:ml-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:ml-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:ml-[5px] lg:mt-[9px] lg:text-fs10 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:ml-[6px] xl:mt-[10px] xl:text-fs12">{`Skirt`}</Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </div>
      </Stack>
      <Image
        src="img_brands.svg"
        className="2xl:h-[76px] 2xl:mt-[75px] 3xl:h-[91px] 3xl:mt-[90px] h-[100px] lg:h-[59px] lg:mt-[58px] mt-[100px] mx-[auto] object-contain w-[57%] xl:h-[67px] xl:mt-[66px]"
        alt="brands"
      />
      <Row className="2xl:ml-[108px] 2xl:mr-[107px] 2xl:mt-[75px] 3xl:ml-[129px] 3xl:mr-[128px] 3xl:mt-[90px] items-center justify-start lg:ml-[84px] lg:mr-[83px] lg:mt-[58px] ml-[144px] mr-[143px] mt-[100px] w-[86%] xl:ml-[96px] xl:mr-[95px] xl:mt-[66px]">
        <Column className="items-center justify-start w-[49%]">
          <Column className="bg-bluegray_100 font-poppins items-center justify-start mx-[auto] self-stretch w-[100%]">
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
          <Column className="2xl:mt-[24px] 3xl:mt-[28px] bg-bluegray_100 font-poppins items-center justify-end lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
            <Text className="2xl:mb-[103px] 2xl:ml-[67px] 2xl:mr-[362px] 2xl:mt-[109px] 2xl:text-fs27 3xl:mb-[124px] 3xl:ml-[81px] 3xl:mr-[434px] 3xl:mt-[131px] 3xl:text-fs32 font-normal leading-lh lg:mb-[80px] lg:ml-[52px] lg:mr-[281px] lg:mt-[85px] lg:text-fs21 mb-[138px] ml-[90.25px] mr-[482.75px] mt-[146px] text-fs36 text-gray_800 text-left w-[29%] xl:mb-[92px] xl:ml-[60px] xl:mr-[322px] xl:mt-[97px] xl:text-fs24">
              <span className="text-gray_800 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                <>
                  {`Summer `}
                  <br />
                  {``}
                </>
              </span>
              <span className="text-gray_800 text-fs48 font-playfairdisplay text-left font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43">
                <>{`Collection`}</>
              </span>
            </Text>
          </Column>
        </Column>
        <Column className="2xl:ml-[24px] 3xl:ml-[28px] bg-bluegray_100 font-poppins items-center justify-start lg:ml-[18px] ml-[32px] w-[50%] xl:ml-[21px]">
          <Text className="2xl:mb-[309px] 2xl:ml-[59px] 2xl:mr-[371px] 2xl:mt-[227px] 2xl:text-fs27 3xl:mb-[371px] 3xl:ml-[71px] 3xl:mr-[445px] 3xl:mt-[273px] 3xl:text-fs32 font-normal leading-lh lg:mb-[240px] lg:ml-[46px] lg:mr-[288px] lg:mt-[177px] lg:text-fs21 mb-[412.31995px] ml-[79.640015px] mr-[494.36px] mt-[303.68005px] text-fs36 text-left text-white_A700 w-[29%] xl:mb-[275px] xl:ml-[53px] xl:mr-[329px] xl:mt-[202px] xl:text-fs24">
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
      <Column className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:mt-[66px]">
        <HomepageV1title0
          children={`Featured`}
          children1={`View all`}
          src="img_arrow_5.svg"
          className="items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]"
        />
        <Row className="2xl:mt-[23px] 3xl:mt-[27px] items-center justify-between lg:mt-[18px] mt-[31px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[20px]">
          <Stack className="2xl:h-[577px] 3xl:h-[692px] font-poppins h-[768px] lg:h-[448px] w-[33%] xl:h-[513px]">
            <Image
              src="img_maskgroup_9.svg"
              className="2xl:h-[577px] 3xl:h-[692px] absolute bottom-[0] h-[768px] left-[0] lg:h-[448px] object-cover right-[0] self-stretch top-[0] w-[100%] xl:h-[513px]"
              alt="MaskGroup"
            />
            <Text className="-translate-x-1/2 2xl:text-fs27 2xl:top-[42px] 3xl:text-fs32 3xl:top-[50px] absolute font-normal leading-lh left-[50%] lg:text-fs21 lg:top-[32px] text-center text-fs36 text-gray_800 top-[56px] w-[62%] xl:text-fs24 xl:top-[37px]">
              <span className="text-gray_800 text-fs36 font-poppins text-center font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                <>
                  {`Discover Our `}
                  <br />
                  {``}
                </>
              </span>
              <span className="text-gray_800 text-fs36 font-poppins text-center font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                <>{`Featured Product`}</>
              </span>
            </Text>
          </Stack>
          <List
            className="flex-wrap gap-[0] min-h-[auto] w-[66%]"
            orientation="vertical"
          >
            <Row className="2xl:my-[12px] 3xl:my-[14px] items-center justify-between lg:my-[9px] mx-[auto] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
              <Column className="items-center justify-start w-[23%]">
                <Image
                  src="img_maskgroup_10.svg"
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
              <Column className="items-center justify-start w-[23%]">
                <Image
                  src="img_maskgroup_11.svg"
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
              <Column className="items-center justify-start w-[23%]">
                <Image
                  src="img_maskgroup_12.svg"
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
              <Column className="items-center justify-start w-[23%]">
                <Image
                  src="img_maskgroup_13.svg"
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
            </Row>
            <Row className="2xl:my-[12px] 3xl:my-[14px] justify-between lg:my-[9px] mx-[auto] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
              <Column className="items-center justify-start w-[23%]">
                <Image
                  src="img_maskgroup_14.svg"
                  className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                  alt="MaskGroup"
                />
                <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[46%] xl:mt-[10px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                    {
                      <>
                        {`Casual `}
                        <br />
                        {`Pink Shirt`}
                      </>
                    }
                  </Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="2xl:mb-[27px] 3xl:mb-[32px] items-center justify-start lg:mb-[21px] mb-[36px] w-[23%] xl:mb-[24px]">
                <Image
                  src="img_maskgroup_15.svg"
                  className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                  alt="MaskGroup"
                />
                <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[60%] xl:mt-[10px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">{`Gray T-shirt`}</Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[23%]">
                <Image
                  src="img_maskgroup_16.svg"
                  className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                  alt="MaskGroup"
                />
                <Column className="2xl:ml-[31px] 2xl:mr-[30px] 2xl:mt-[12px] 3xl:ml-[37px] 3xl:mr-[36px] 3xl:mt-[14px] font-poppins items-center justify-start lg:ml-[24px] lg:mr-[23px] lg:mt-[9px] ml-[42px] mr-[41px] mt-[16px] w-[67%] xl:ml-[28px] xl:mr-[27px] xl:mt-[10px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                    {
                      <>
                        {`Purple `}
                        <br />
                        {`Warm Jacket`}
                      </>
                    }
                  </Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="2xl:mb-[27px] 3xl:mb-[32px] items-center justify-start lg:mb-[21px] mb-[36px] w-[23%] xl:mb-[24px]">
                <Image
                  src="img_maskgroup_17.svg"
                  className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                  alt="MaskGroup"
                />
                <Column className="2xl:mt-[12px] 2xl:mx-[39px] 3xl:ml-[47px] 3xl:mr-[46px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] lg:mx-[30px] ml-[53px] mr-[52px] mt-[16px] w-[58%] xl:ml-[35px] xl:mr-[34px] xl:mt-[10px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Red Flannel`}</Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
            </Row>
          </List>
        </Row>
      </Column>
      <Stack className="2xl:h-[435px] 2xl:mt-[75px] 3xl:h-[522px] 3xl:mt-[90px] h-[579px] lg:h-[338px] lg:mt-[58px] mt-[100px] mx-[auto] self-stretch w-[100%] xl:h-[387px] xl:mt-[66px]">
        <Column className="absolute bg-gray_800 font-poppins items-center justify-start self-stretch top-[0] w-[100%]">
          <Text className="2xl:mb-[235px] 2xl:ml-[108px] 2xl:mr-[1154px] 2xl:mt-[33px] 2xl:text-fs27 3xl:mb-[282px] 3xl:ml-[129px] 3xl:mr-[1385px] 3xl:mt-[40px] 3xl:text-fs32 font-bold lg:mb-[183px] lg:ml-[84px] lg:mr-[897px] lg:mt-[26px] lg:text-fs21 mb-[314px] ml-[144px] mr-[1538px] mt-[45px] text-fs36 text-left text-white_A700 xl:mb-[209px] xl:ml-[96px] xl:mr-[1026px] xl:mt-[30px] xl:text-fs24">{`Limited Offer`}</Text>
        </Column>
        <List
          className="-translate-x-1/2 2xl:gap-[24px] 3xl:gap-[28px] absolute bottom-[0] flex-wrap gap-[32px] grid grid-cols-2 left-[50%] lg:gap-[18px] min-h-[auto] overflow-x-hidden overflow-y-hidden w-[85%] xl:gap-[21px]"
          orientation="horizontal"
        >
          <Row className="bg-gray_100 items-center justify-start shadow-bs1 w-[100%]">
            <Column className="2xl:ml-[24px] 2xl:my-[24px] 3xl:ml-[28px] 3xl:my-[28px] font-poppins items-center justify-start lg:ml-[18px] lg:my-[18px] ml-[32px] my-[32px] w-[35%] xl:ml-[21px] xl:my-[21px]">
              <Image
                src="img_maskgroup_18.svg"
                className="2xl:h-[210px] 3xl:h-[252px] h-[279px] lg:h-[163px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[187px]"
                alt="MaskGroup"
              />
              <Button className="2xl:ml-[30px] 2xl:mr-[29px] 2xl:mt-[24px] 2xl:px-[22px] 2xl:py-[13px] 2xl:text-fs13 3xl:ml-[36px] 3xl:mr-[35px] 3xl:mt-[28px] 3xl:px-[27px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:ml-[23px] lg:mr-[22px] lg:mt-[18px] lg:px-[17px] lg:py-[10px] lg:text-fs10 ml-[40px] mr-[39px] mt-[32px] px-[30px] py-[18.045px] text-center text-fs18 text-white_A700 w-[72%] xl:mt-[21px] xl:mx-[26px] xl:px-[20px] xl:py-[12px] xl:text-fs12">{`Add to Cart`}</Button>
            </Column>
            <Column className="2xl:ml-[36px] 2xl:mr-[42px] 2xl:my-[58px] 3xl:ml-[43px] 3xl:mr-[50px] 3xl:my-[70px] font-poppins justify-start lg:ml-[28px] lg:mr-[32px] lg:my-[45px] ml-[48px] mr-[56px] my-[78px] w-[49%] xl:ml-[32px] xl:mr-[37px] xl:my-[52px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-normal lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-gray_800 text-left xl:mr-[6px] xl:text-fs16">{`Limited Deals`}</Text>
              <Column className="2xl:mt-[18px] 3xl:mt-[21px] items-center lg:mt-[14px] mt-[24px] mx-[auto] self-stretch w-[100%] xl:mt-[16px]">
                <Row className="items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]">
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[28%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`08`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:ml-[21px] 2xl:mr-[20px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:ml-[25px] 3xl:mr-[24px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:ml-[16px] lg:mr-[15px] lg:mt-[4px] lg:text-fs10 mb-[18px] ml-[28px] mr-[27px] mt-[8px] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:mt-[5px] xl:mx-[18px] xl:text-fs12">{`Hours`}</Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[28%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`58`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:mt-[4px] lg:text-fs10 mb-[18px] mt-[8px] mx-[auto] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Minutes`}</Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[28%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`18`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:ml-[11px] 2xl:mr-[10px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:ml-[13px] 3xl:mr-[12px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:mt-[4px] lg:mx-[8px] lg:text-fs10 mb-[18px] ml-[15px] mr-[14px] mt-[8px] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:ml-[10px] xl:mr-[9px] xl:mt-[5px] xl:text-fs12">{`Seconds`}</Text>
                  </Column>
                </Row>
              </Column>
              <Text className="2xl:mr-[7px] 2xl:mt-[18px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[21px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:mt-[14px] lg:text-fs14 mr-[10px] mt-[24px] text-fs24 text-gray_800 text-left xl:mr-[6px] xl:mt-[16px] xl:text-fs16">{`Black Warm Jacket`}</Text>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]">
                <Row className="font-poppins items-center justify-start mx-[auto] self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-normal lg:text-fs14 text-fs24 text-gray_500 text-left xl:text-fs16">{`$299`}</Text>
                  <Text className="2xl:ml-[18px] 2xl:mr-[185px] 2xl:text-fs18 3xl:ml-[21px] 3xl:mr-[222px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:mr-[144px] lg:text-fs14 ml-[24px] mr-[247px] text-fs24 text-gray_800 text-left xl:ml-[16px] xl:mr-[164px] xl:text-fs16">{`$199`}</Text>
                </Row>
              </Column>
            </Column>
          </Row>
          <Row className="bg-gray_100 items-center justify-center shadow-bs1 w-[100%]">
            <Column className="2xl:ml-[24px] 2xl:my-[24px] 3xl:ml-[28px] 3xl:my-[28px] font-poppins items-center justify-start lg:ml-[18px] lg:my-[18px] ml-[32px] my-[32px] w-[35%] xl:ml-[21px] xl:my-[21px]">
              <Image
                src="img_maskgroup_19.svg"
                className="2xl:h-[210px] 3xl:h-[252px] h-[279px] lg:h-[163px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[187px]"
                alt="MaskGroup"
              />
              <Button className="2xl:ml-[30px] 2xl:mr-[29px] 2xl:mt-[24px] 2xl:px-[22px] 2xl:py-[13px] 2xl:text-fs13 3xl:ml-[36px] 3xl:mr-[35px] 3xl:mt-[28px] 3xl:px-[27px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:ml-[23px] lg:mr-[22px] lg:mt-[18px] lg:px-[17px] lg:py-[10px] lg:text-fs10 ml-[40px] mr-[39px] mt-[32px] px-[30px] py-[18.045px] text-center text-fs18 text-white_A700 w-[72%] xl:mt-[21px] xl:mx-[26px] xl:px-[20px] xl:py-[12px] xl:text-fs12">{`Add to Cart`}</Button>
            </Column>
            <Column className="2xl:ml-[36px] 2xl:mr-[42px] 2xl:my-[58px] 3xl:ml-[43px] 3xl:mr-[50px] 3xl:my-[70px] font-poppins justify-start lg:ml-[28px] lg:mr-[32px] lg:my-[45px] ml-[48px] mr-[56px] my-[78px] w-[49%] xl:ml-[32px] xl:mr-[37px] xl:my-[52px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-normal lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-gray_800 text-left xl:mr-[6px] xl:text-fs16">{`Limited Deals`}</Text>
              <Column className="2xl:mt-[18px] 3xl:mt-[21px] items-center lg:mt-[14px] mt-[24px] mx-[auto] self-stretch w-[100%] xl:mt-[16px]">
                <Row className="items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]">
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[28%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`08`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:ml-[21px] 2xl:mr-[20px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:ml-[25px] 3xl:mr-[24px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:ml-[16px] lg:mr-[15px] lg:mt-[4px] lg:text-fs10 mb-[18px] ml-[28px] mr-[27px] mt-[8px] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:mt-[5px] xl:mx-[18px] xl:text-fs12">{`Hours`}</Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[28%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`58`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:mt-[4px] lg:text-fs10 mb-[18px] mt-[8px] mx-[auto] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Minutes`}</Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[28%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`18`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:ml-[11px] 2xl:mr-[10px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:ml-[13px] 3xl:mr-[12px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:mt-[4px] lg:mx-[8px] lg:text-fs10 mb-[18px] ml-[15px] mr-[14px] mt-[8px] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:ml-[10px] xl:mr-[9px] xl:mt-[5px] xl:text-fs12">{`Seconds`}</Text>
                  </Column>
                </Row>
              </Column>
              <Text className="2xl:mr-[7px] 2xl:mt-[18px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[21px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:mt-[14px] lg:text-fs14 mr-[10px] mt-[24px] text-fs24 text-gray_800 text-left xl:mr-[6px] xl:mt-[16px] xl:text-fs16">{`Casual Grey Shoes`}</Text>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]">
                <Row className="font-poppins items-center justify-start mx-[auto] self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-normal lg:text-fs14 text-fs24 text-gray_500 text-left xl:text-fs16">{`$399`}</Text>
                  <Text className="2xl:ml-[17px] 2xl:mr-[185px] 2xl:text-fs18 3xl:ml-[20px] 3xl:mr-[222px] 3xl:text-fs21 font-medium lg:ml-[13px] lg:mr-[144px] lg:text-fs14 ml-[23px] mr-[247px] text-fs24 text-gray_800 text-left xl:ml-[15px] xl:mr-[164px] xl:text-fs16">{`$199`}</Text>
                </Row>
              </Column>
            </Column>
          </Row>
        </List>
      </Stack>
      <Row className="2xl:ml-[108px] 2xl:mr-[106px] 2xl:mt-[75px] 3xl:ml-[129px] 3xl:mr-[127px] 3xl:mt-[90px] items-center justify-start lg:ml-[84px] lg:mr-[82px] lg:mt-[58px] ml-[144px] mr-[142px] mt-[100px] w-[86%] xl:ml-[96px] xl:mr-[94px] xl:mt-[66px]">
        <Column className="font-poppins justify-start w-[50%]">
          <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-bold lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[6px] xl:text-fs24">{`New Arrival`}</Text>
          <Column className="2xl:mt-[58px] 3xl:mt-[70px] items-center lg:mt-[45px] mt-[78.5px] mx-[auto] self-stretch w-[100%] xl:mt-[52px]">
            <List
              className="2xl:ml-[18px] 3xl:ml-[21px] flex-wrap gap-[0] lg:ml-[14px] min-h-[auto] ml-[24px] w-[98%] xl:ml-[16px]"
              orientation="vertical"
            >
              <Row className="2xl:my-[46px] 3xl:my-[56px] font-poppins items-center justify-start lg:my-[36px] mx-[auto] my-[62.5px] self-stretch w-[100%] xl:my-[41px]">
                <Image
                  src="img_maskgroup_20.svg"
                  className="2xl:h-[81px] 3xl:h-[97px] h-[107px] lg:h-[63px] object-contain w-[auto] xl:h-[72px]"
                  alt="MaskGroup"
                />
                <Column className="2xl:ml-[12px] 2xl:my-[10px] 3xl:ml-[14px] 3xl:my-[12px] justify-start lg:ml-[9px] lg:my-[7px] ml-[16px] my-[13.5px] w-[29%] xl:ml-[10px] xl:my-[9px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Checkered Jacket`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
                <Image
                  src="img_maskgroup_21.svg"
                  className="2xl:h-[81px] 2xl:ml-[56px] 3xl:h-[97px] 3xl:ml-[67px] h-[107px] lg:h-[63px] lg:ml-[43px] ml-[75px] object-contain w-[auto] xl:h-[72px] xl:ml-[50px]"
                  alt="MaskGroup"
                />
                <Column className="2xl:ml-[12px] 2xl:my-[10px] 3xl:ml-[14px] 3xl:my-[12px] font-poppins justify-start lg:ml-[9px] lg:my-[7px] ml-[16px] my-[13.5px] w-[31%] xl:ml-[10px] xl:my-[9px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Blue Woman Denim`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Row>
              <Row className="2xl:mr-[48px] 2xl:my-[46px] 3xl:mr-[57px] 3xl:my-[56px] font-poppins items-center justify-start lg:mr-[37px] lg:my-[36px] mr-[64px] my-[62.5px] w-[92%] xl:mr-[42px] xl:my-[41px]">
                <Image
                  src="img_maskgroup_22.svg"
                  className="2xl:h-[81px] 3xl:h-[97px] h-[107px] lg:h-[63px] object-contain w-[auto] xl:h-[72px]"
                  alt="MaskGroup"
                />
                <Column className="2xl:ml-[12px] 2xl:my-[10px] 3xl:ml-[14px] 3xl:my-[12px] justify-start lg:ml-[9px] lg:my-[7px] ml-[16px] my-[13.5px] w-[24%] xl:ml-[10px] xl:my-[9px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Orange Jeans`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
                <Image
                  src="img_maskgroup_23.svg"
                  className="2xl:h-[81px] 2xl:ml-[93px] 3xl:h-[97px] 3xl:ml-[111px] h-[107px] lg:h-[63px] lg:ml-[72px] ml-[124px] object-contain w-[auto] xl:h-[72px] xl:ml-[82px]"
                  alt="MaskGroup"
                />
                <Column className="2xl:ml-[12px] 2xl:my-[10px] 3xl:ml-[14px] 3xl:my-[12px] font-poppins justify-start lg:ml-[9px] lg:my-[7px] ml-[16px] my-[13.5px] w-[25%] xl:ml-[10px] xl:my-[9px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Classic Watch`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Row>
            </List>
            <Row className="2xl:mt-[58px] 3xl:mt-[70px] font-poppins items-center justify-center lg:mt-[45px] mt-[78.5px] mx-[auto] w-[14%] xl:mt-[52px]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 my-[1px] text-fs18 text-gray_800 text-left xl:text-fs12">{`View all`}</Text>
              <Image
                src="img_arrow_6.svg"
                className="2xl:h-[24px] 2xl:ml-[6px] 3xl:h-[28px] 3xl:ml-[7px] h-[31px] lg:h-[19px] lg:ml-[4px] ml-[8px] object-contain w-[30%] xl:h-[21px] xl:ml-[5px]"
                alt="Arrow"
              />
            </Row>
          </Column>
        </Column>
        <Column className="2xl:ml-[22px] 3xl:ml-[27px] font-poppins justify-start lg:ml-[17px] ml-[30px] w-[50%] xl:ml-[20px]">
          <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-bold lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[6px] xl:text-fs24">{`Popular This Week`}</Text>
          <List
            className="2xl:mt-[57px] 2xl:mx-[18px] 3xl:mt-[68px] 3xl:mx-[21px] flex-wrap gap-[0] lg:mt-[44px] lg:mx-[14px] min-h-[auto] mt-[76px] mx-[24px] w-[86%] xl:mt-[50px] xl:mx-[16px]"
            orientation="vertical"
          >
            <Row className="2xl:mr-[5px] 2xl:my-[45px] 3xl:mr-[6px] 3xl:my-[54px] items-center justify-start lg:mr-[4px] lg:my-[35px] mr-[7px] my-[60px] w-[99%] xl:mr-[4px] xl:my-[40px]">
              <Image
                src="img_maskgroup_24.svg"
                className="2xl:h-[81px] 2xl:my-[1px] 3xl:h-[97px] 3xl:my-[2px] h-[107px] lg:h-[63px] lg:my-[1px] my-[2.5px] object-contain w-[auto] xl:h-[72px] xl:my-[1px]"
                alt="MaskGroup"
              />
              <Column className="2xl:ml-[12px] 3xl:ml-[14px] justify-start lg:ml-[9px] ml-[16px] w-[20%] xl:ml-[10px]">
                <Column className="items-center mx-[auto] self-stretch w-[100%]">
                  <Column className="font-poppins justify-start mx-[auto] self-stretch w-[100%]">
                    <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Blue Jeans`}</Text>
                    <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[85%] xl:mr-[6px] xl:mt-[10px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
              </Column>
              <Image
                src="img_maskgroup_25.svg"
                className="2xl:h-[81px] 2xl:ml-[122px] 2xl:my-[1px] 3xl:h-[97px] 3xl:ml-[146px] 3xl:my-[2px] h-[107px] lg:h-[63px] lg:ml-[95px] lg:my-[1px] ml-[163px] my-[2.5px] object-contain w-[auto] xl:h-[72px] xl:ml-[108px] xl:my-[1px]"
                alt="MaskGroup"
              />
              <Column className="2xl:ml-[12px] 3xl:ml-[14px] justify-start lg:ml-[9px] ml-[16px] w-[21%] xl:ml-[10px]">
                <Column className="items-center mx-[auto] self-stretch w-[100%]">
                  <Column className="font-poppins justify-start mx-[auto] self-stretch w-[100%]">
                    <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Wristwatch`}</Text>
                    <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[82%] xl:mr-[6px] xl:mt-[10px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="2xl:my-[45px] 3xl:my-[54px] items-center justify-start lg:my-[35px] mx-[auto] my-[60px] self-stretch w-[100%] xl:my-[40px]">
              <Image
                src="img_maskgroup_26.svg"
                className="2xl:h-[81px] 2xl:my-[1px] 3xl:h-[97px] 3xl:my-[2px] h-[107px] lg:h-[63px] lg:my-[1px] my-[2.5px] object-contain w-[auto] xl:h-[72px] xl:my-[1px]"
                alt="MaskGroup"
              />
              <Column className="2xl:ml-[12px] 3xl:ml-[14px] justify-start lg:ml-[9px] ml-[16px] w-[27%] xl:ml-[10px]">
                <Column className="items-center mx-[auto] self-stretch w-[100%]">
                  <Column className="font-poppins justify-start mx-[auto] self-stretch w-[100%]">
                    <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Elegant Jacket`}</Text>
                    <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[63%] xl:mr-[6px] xl:mt-[10px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
              </Column>
              <Image
                src="img_maskgroup_27.svg"
                className="2xl:h-[81px] 2xl:ml-[87px] 2xl:my-[1px] 3xl:h-[97px] 3xl:ml-[104px] 3xl:my-[2px] h-[107px] lg:h-[63px] lg:ml-[67px] lg:my-[1px] ml-[116px] my-[2.5px] object-contain w-[auto] xl:h-[72px] xl:ml-[77px] xl:my-[1px]"
                alt="MaskGroup"
              />
              <Column className="2xl:ml-[12px] 3xl:ml-[14px] justify-start lg:ml-[9px] ml-[16px] w-[22%] xl:ml-[10px]">
                <Column className="items-center mx-[auto] self-stretch w-[100%]">
                  <Column className="font-poppins justify-start mx-[auto] self-stretch w-[100%]">
                    <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Gray Watch`}</Text>
                    <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[78%] xl:mr-[6px] xl:mt-[10px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
              </Column>
            </Row>
          </List>
          <Column className="2xl:mt-[57px] 3xl:mt-[68px] items-center lg:mt-[44px] mt-[76px] mx-[auto] self-stretch w-[100%] xl:mt-[50px]">
            <Row className="font-poppins items-center justify-center mx-[auto] w-[14%]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 my-[1px] text-fs18 text-gray_800 text-left xl:text-fs12">{`View all`}</Text>
              <Image
                src="img_arrow_6.svg"
                className="2xl:h-[24px] 2xl:ml-[6px] 3xl:h-[28px] 3xl:ml-[7px] h-[31px] lg:h-[19px] lg:ml-[4px] ml-[8px] object-contain w-[30%] xl:h-[21px] xl:ml-[5px]"
                alt="Arrow"
              />
            </Row>
          </Column>
        </Column>
      </Row>
      <Row className="2xl:mt-[75px] 3xl:mt-[90px] bg-gray_100 font-poppins items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] self-stretch w-[100%] xl:mt-[66px]">
        <Image
          src="img_truck.svg"
          className="2xl:h-[37px] 2xl:ml-[108px] 2xl:my-[63px] 3xl:h-[44px] 3xl:ml-[129px] 3xl:my-[76px] h-[48px] lg:h-[28px] lg:ml-[84px] lg:my-[49px] ml-[144px] my-[84.5px] object-contain w-[auto] xl:h-[33px] xl:ml-[96px] xl:my-[56px]"
          alt="Truck"
        />
        <Column className="2xl:ml-[24px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:my-[57px] justify-start lg:ml-[18px] lg:my-[37px] ml-[32px] my-[64px] w-[11%] xl:ml-[21px] xl:my-[42px]">
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
        <Image
          src="img_card.svg"
          className="2xl:h-[37px] 2xl:ml-[93px] 2xl:my-[63px] 3xl:h-[44px] 3xl:ml-[112px] 3xl:my-[76px] h-[48px] lg:h-[28px] lg:ml-[72px] lg:my-[49px] ml-[125px] my-[84.5px] object-contain w-[auto] xl:h-[33px] xl:ml-[83px] xl:my-[56px]"
          alt="Card"
        />
        <Column className="2xl:ml-[24px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:my-[57px] justify-start lg:ml-[18px] lg:my-[37px] ml-[32px] my-[64px] w-[11%] xl:ml-[21px] xl:my-[42px]">
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
        <Image
          src="img_broken.svg"
          className="2xl:h-[37px] 2xl:ml-[93px] 2xl:my-[63px] 3xl:h-[44px] 3xl:ml-[112px] 3xl:my-[76px] h-[48px] lg:h-[28px] lg:ml-[72px] lg:my-[49px] ml-[125px] my-[84.5px] object-contain w-[auto] xl:h-[33px] xl:ml-[83px] xl:my-[56px]"
          alt="Broken"
        />
        <Column className="2xl:ml-[24px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:my-[57px] justify-start lg:ml-[18px] lg:my-[37px] ml-[32px] my-[64px] w-[11%] xl:ml-[21px] xl:my-[42px]">
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
        <Image
          src="img_support.svg"
          className="2xl:h-[37px] 2xl:ml-[93px] 2xl:my-[63px] 3xl:h-[44px] 3xl:ml-[112px] 3xl:my-[76px] h-[48px] lg:h-[28px] lg:ml-[72px] lg:my-[49px] ml-[125px] my-[84.5px] object-contain w-[auto] xl:h-[33px] xl:ml-[83px] xl:my-[56px]"
          alt="Support"
        />
        <Column className="2xl:ml-[24px] 2xl:mr-[177px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:mr-[213px] 3xl:my-[57px] font-poppins justify-start lg:ml-[18px] lg:mr-[138px] lg:my-[37px] ml-[32px] mr-[237px] my-[64px] w-[11%] xl:ml-[21px] xl:mr-[158px] xl:my-[42px]">
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
      <ProductListfooter
        children={`Elliye`}
        children1={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}
        src1="img_call.svg"
        children2={`+1234567890`}
        children3={`elliye@support.com`}
        children4={`Product Links`}
        children5={`Categories`}
        children6={`New Arrival`}
        children7={`Features`}
        children8={`Collections`}
        children9={`Company`}
        children10={`About`}
        children11={`Blog`}
        children12={`Careers`}
        children13={`Services`}
        children14={`Privacy Policy`}
        children15={`Terms of service`}
        children16={`Join our Newsletter`}
        children17={`Drop your email below to get update, promotions, coupons, and more!`}
        children18={`Enter your email`}
        src3="img_submit.svg"
        children19={`Copyright © 2021 Elliye. All Right Reseved`}
        className="mx-[auto] self-stretch w-[100%]"
      />
    </Column>
  );
};

export default HomepageV2Page;
