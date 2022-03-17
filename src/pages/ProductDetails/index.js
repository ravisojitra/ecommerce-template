import React from "react";

import { Column } from "components/Column";
import { CategorieswithSidebar1 } from "components/CategorieswithSidebar1";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { List } from "components/List";
import { ProductListfooter } from "components/ProductListfooter";

const ProductDetailsPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <CategorieswithSidebar1
        children={`Elliye`}
        children1={`Search here`}
        children2={`Login`}
        className="mx-[auto] self-stretch w-[100%]"
      />
      <Row className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-start lg:mt-[18px] mt-[32px] mx-[auto] w-[85%] xl:mt-[21px]">
        <Image
          src="img_preview.svg"
          className="2xl:h-[520px] 2xl:mb-[3px] 3xl:h-[624px] 3xl:mb-[4px] h-[692px] lg:h-[404px] lg:mb-[2px] mb-[5px] object-contain w-[50%] xl:h-[462px] xl:mb-[3px]"
          alt="preview"
        />
        <Column className="2xl:ml-[24px] 3xl:ml-[28px] font-poppins justify-start lg:ml-[18px] ml-[32px] w-[50%] xl:ml-[21px]">
          <Column className="items-center mx-[auto] self-stretch w-[100%]">
            <Column className="justify-start self-stretch w-[100%]">
              <Row className="2xl:mr-[7px] 3xl:mr-[9px] font-poppins items-center justify-start lg:mr-[5px] mr-[10px] w-[39%] xl:mr-[6px]">
                <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">{`Featured`}</Text>
                <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-bluegray_100 text-fs18 text-left xl:ml-[10px] xl:text-fs12">{`>`}</Text>
                <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:text-fs12">{`Purple Warm Jacket`}</Text>
              </Row>
              <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs42 3xl:mr-[9px] 3xl:text-fs50 font-bold leading-lh lg:mr-[5px] lg:text-fs32 mr-[10px] text-fs56 text-gray_800 text-left w-[49%] xl:mr-[6px] xl:text-fs37">
                    {
                      <>
                        {`Purple Warm `}
                        <br />
                        {`Zip Jacket`}
                      </>
                    }
                  </Text>
                  <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                    <Column className="font-poppins justify-start self-stretch w-[100%]">
                      <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-normal lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_500 text-left xl:mr-[6px] xl:text-fs24">{`$299`}</Text>
                      <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                        <Line className="bg-bluegray_100 h-[1px] mx-[auto] self-stretch w-[100%]" />
                      </Column>
                    </Column>
                  </Column>
                  <Text className="2xl:mt-[24px] 2xl:text-fs13 3xl:mt-[28px] 3xl:text-fs16 font-normal leading-lh32 lg:mt-[18px] lg:text-fs10 mt-[32px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[21px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
                </Column>
              </Column>
            </Column>
          </Column>
          <Row className="2xl:mr-[7px] 2xl:mt-[42px] 3xl:mr-[9px] 3xl:mt-[50px] items-center justify-start lg:mr-[5px] lg:mt-[32px] mr-[10px] mt-[56px] w-[35%] xl:mr-[6px] xl:mt-[37px]">
            <Text className="2xl:mb-[8px] 2xl:mt-[7px] 2xl:text-fs13 3xl:my-[9px] 3xl:text-fs16 font-medium lg:mb-[6px] lg:mt-[5px] lg:text-fs10 mb-[11px] mt-[10px] text-fs18 text-gray_800 text-left xl:mb-[7px] xl:mt-[6px] xl:text-fs12">{`Quantity`}</Text>
            <Stack className="2xl:h-[37px] 2xl:ml-[18px] 3xl:h-[44px] 3xl:ml-[21px] font-poppins h-[48px] lg:h-[28px] lg:ml-[14px] ml-[24px] w-[63%] xl:h-[33px] xl:ml-[16px]">
              <Image
                src="img_increase.svg"
                className="2xl:h-[37px] 3xl:h-[44px] absolute h-[48px] lg:h-[28px] object-contain right-[0] w-[auto] xl:h-[33px]"
                alt="increase"
              />
              <Image
                src="img_decrease.svg"
                className="2xl:h-[37px] 3xl:h-[44px] absolute h-[48px] left-[0] lg:h-[28px] object-contain w-[auto] xl:h-[33px]"
                alt="decrease"
              />
              <Button className="2xl:px-[22px] 2xl:py-[9px] 2xl:text-fs13 3xl:px-[27px] 3xl:py-[10px] 3xl:text-fs16 absolute bg-transparent border border-bluegray_100 border-solid bottom-[0] font-medium left-[0] lg:px-[17px] lg:py-[7px] lg:text-fs10 px-[30px] py-[12.045px] right-[0] self-stretch text-center text-fs18 text-gray_800 top-[0] w-[100%] xl:px-[20px] xl:py-[8px] xl:text-fs12">{`1`}</Button>
            </Stack>
          </Row>
          <div className="2xl:mr-[7px] 2xl:mt-[42px] 3xl:mr-[9px] 3xl:mt-[50px] bg-transparent border-bw lg:mr-[5px] lg:mt-[32px] mr-[10px] mt-[56px] w-[31%] xl:mr-[6px] xl:mt-[37px] input-wrap">
            <Image
              src="img_cart.svg"
              className="absolute w-[auto] h-[32px] top-[20.045px] bottom-[20.045px] right-[45.5px] object-contain lg:h-[19px] lg:top-[11px] lg:bottom-[11px] lg:right-[26px] xl:h-[22px] xl:top-[13px] xl:bottom-[13px] xl:right-[30px] 2xl:h-[25px] 2xl:top-[15px] 2xl:bottom-[15px] 2xl:right-[34px] 3xl:h-[29px] 3xl:top-[18px] 3xl:bottom-[18px] 3xl:right-[40px]"
              alt="Cart"
            />
            <Button className="2xl:pl-[22px] 2xl:pr-[65px] 2xl:py-[15px] 2xl:text-fs13 3xl:pl-[27px] 3xl:pr-[78px] 3xl:py-[18px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:pl-[17px] lg:pr-[51px] lg:py-[11px] lg:text-fs10 pl-[30px] pr-[87.5px] py-[20.045px] text-fs18 text-left text-white_A700 w-[100%] xl:pl-[20px] xl:pr-[58px] xl:py-[13px] xl:text-fs12">{`Add to Cart`}</Button>
          </div>
        </Column>
      </Row>
      <Column className="2xl:mt-[137px] 3xl:mt-[164px] items-center justify-start lg:mt-[106px] mt-[183px] mx-[auto] w-[85%] xl:mt-[122px]">
        <Row className="font-poppins items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]">
          <Row className="items-center justify-between px-[0] w-[25%]">
            <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 text-fs36 text-gray_800 text-left xl:text-fs24">{`Similiar Product`}</Text>
            <Text className="2xl:mb-[10px] 2xl:mt-[9px] 2xl:text-fs13 3xl:mb-[12px] 3xl:mt-[11px] 3xl:text-fs16 font-medium lg:mb-[8px] lg:mt-[7px] lg:text-fs10 mb-[14px] mt-[13px] text-fs18 text-gray_500 text-left xl:mb-[9px] xl:mt-[8px] xl:text-fs12">{`View all`}</Text>
          </Row>
          <Image
            src="img_button_1.svg"
            className="2xl:h-[37px] 2xl:my-[2px] 3xl:h-[44px] 3xl:my-[2px] h-[48px] lg:h-[28px] lg:my-[1px] my-[3px] object-contain w-[7%] xl:h-[33px] xl:my-[2px]"
            alt="button"
          />
        </Row>
        <List
          className="2xl:gap-[24px] 2xl:mt-[24px] 3xl:gap-[28px] 3xl:mt-[28px] flex-wrap gap-[32px] grid grid-cols-4 lg:gap-[18px] lg:mt-[18px] min-h-[auto] mt-[32px] mx-[auto] overflow-x-hidden overflow-y-hidden self-stretch w-[100%] xl:gap-[21px] xl:mt-[21px]"
          orientation="horizontal"
        >
          <Column className="items-center justify-center w-[100%]">
            <div className="2xl:h-[188px] 2xl:mt-[61px] 3xl:h-[226px] 3xl:mt-[73px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81.5px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
            <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[48%] xl:mb-[54px] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Black Briefcase`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-center w-[100%]">
            <div className="2xl:h-[188px] 2xl:mt-[61px] 3xl:h-[226px] 3xl:mt-[73px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81.5px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
            <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[29%] xl:mb-[54px] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Pink Shirt`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-center mb-[1px] w-[100%]">
            <div className="2xl:h-[188px] 2xl:mt-[60px] 3xl:h-[226px] 3xl:mt-[72px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
            <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[38%] xl:mb-[54px] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Gray T-shirt`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-center mt-[1px] w-[100%]">
            <div className="2xl:h-[188px] 2xl:mt-[60px] 3xl:h-[226px] 3xl:mt-[72px] bg-bluegray_100 h-[250px] lg:h-[146px] lg:mt-[47px] mt-[81px] mx-[auto] w-[66%] xl:h-[167px] xl:mt-[54px]"></div>
            <Column className="2xl:mb-[15px] 2xl:mt-[12px] 3xl:mb-[18px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[11px] lg:mt-[9px] mb-[20px] mt-[16px] mx-[auto] w-[37%] xl:mb-[13px] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Red Flannel`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
        </List>
      </Column>
      <ProductListfooter
        children={`Elliye`}
        children1={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}
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
        children19={`Copyright © 2021 Elliye. All Right Reseved`}
        className="2xl:mt-[75px] 3xl:mt-[90px] lg:mt-[58px] mt-[100px] mx-[auto] self-stretch w-[100%] xl:mt-[66px]"
      />
    </Column>
  );
};

export default ProductDetailsPage;
