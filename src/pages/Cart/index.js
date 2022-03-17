import React from "react";

import { Column } from "components/Column";
import { Checkout1 } from "components/Checkout1";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { List } from "components/List";
import { Line } from "components/Line";
import { Checkout03 } from "components/Checkout03";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { ProductListfooter } from "components/ProductListfooter";

const CartPage = () => {
  return (
    <Column className="bg-white_A700 font-poppins justify-start ml-[auto] mr-[auto] w-[100%]">
      <Checkout1
        children={`Elliye`}
        children1={`Login`}
        className="mx-[auto] self-stretch w-[100%]"
      />
      <Column className="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
        <Row className="2xl:mx-[108px] 3xl:mx-[129px] items-center justify-start lg:mx-[84px] max-w-[229px] mx-[144px] w-[12%] xl:mx-[96px]">
          <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">{`Home`}</Text>
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-bluegray_100 text-fs18 text-left xl:text-fs12">{`>`}</Text>
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Shopping Cart`}</Text>
          </Row>
        </Row>
      </Column>
      <Text className="2xl:mt-[30px] 2xl:text-fs27 3xl:mt-[36px] 3xl:text-fs32 font-bold lg:mt-[23px] lg:text-fs21 mt-[41px] mx-[auto] text-fs36 text-gray_800 text-left xl:mt-[27px] xl:text-fs24">{`Shopping Cart`}</Text>
      <Row className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[84%] xl:mt-[66px]">
        <List
          className="2xl:gap-[42px] 3xl:gap-[51px] flex-wrap gap-[57px] grid grid-cols-2 lg:gap-[33px] min-h-[auto] overflow-x-hidden overflow-y-hidden w-[85%] xl:gap-[38px]"
          orientation="horizontal"
        >
          <Row className="font-poppins items-center justify-between px-[0] w-[100%]">
            <Row className="items-center justify-start w-[39%]">
              <Column className="border-2 border-gray_800 border-solid items-center justify-start rounded-radius28 w-[22%]">
                <Text className="2xl:ml-[18px] 2xl:mr-[17px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:mr-[20px] 3xl:my-[9px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:mr-[13px] lg:my-[5px] lg:text-fs14 ml-[24px] mr-[23px] my-[10px] text-fs24 text-gray_800 text-left xl:ml-[16px] xl:mr-[15px] xl:my-[6px] xl:text-fs16">{`1`}</Text>
              </Column>
              <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-fs24 text-gray_800 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">{`Shopping Cart`}</Text>
            </Row>
            <Line className="2xl:mb-[19px] 2xl:mt-[21px] 3xl:mb-[23px] 3xl:mt-[25px] bg-gray_800 h-[2px] lg:mb-[15px] lg:mt-[16px] mb-[26px] mt-[28px] w-[59%] xl:mb-[17px] xl:mt-[18px]" />
          </Row>
          <Row className="font-poppins items-center justify-between px-[0] w-[100%]">
            <Row className="items-center justify-start w-[31%]">
              <Column className="border-2 border-bluegray_100 border-solid items-center justify-start rounded-radius28 w-[29%]">
                <Text className="2xl:my-[7px] 2xl:text-fs18 3xl:my-[9px] 3xl:text-fs21 font-medium lg:my-[5px] lg:text-fs14 mx-[auto] my-[10px] text-bluegray_100 text-fs24 text-left xl:my-[6px] xl:text-fs16">{`2`}</Text>
              </Column>
              <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-bluegray_100 text-fs24 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">{`Checkout`}</Text>
            </Row>
            <Line className="2xl:mb-[19px] 2xl:mt-[21px] 3xl:mb-[23px] 3xl:mt-[25px] bg-bluegray_100 h-[2px] lg:mb-[15px] lg:mt-[16px] mb-[26px] mt-[28px] w-[61%] xl:mb-[17px] xl:mt-[18px]" />
          </Row>
        </List>
        <Checkout03
          children={`3`}
          children1={`Completed`}
          className="2xl:ml-[24px] 3xl:ml-[28px] items-center justify-start lg:ml-[18px] ml-[32px] w-[14%] xl:ml-[21px]"
        />
      </Row>
      <Column className="2xl:mt-[60px] 2xl:mx-[108px] 3xl:mt-[72px] 3xl:mx-[129px] justify-start lg:mt-[46px] lg:mx-[84px] mt-[80px] mx-[144px] w-[85%] xl:mt-[53px] xl:mx-[96px]">
        <Column className="items-center mx-[auto] self-stretch w-[100%]">
          <Column className="items-center justify-start mx-[auto] self-stretch w-[100%]">
            <Column className="items-center justify-start mx-[auto] self-stretch w-[100%]">
              <Column className="font-poppins items-center justify-start mx-[auto] self-stretch w-[100%]">
                <Row className="justify-between mx-[auto] px-[0] self-stretch w-[100%]">
                  <Text className="2xl:mb-[3px] 2xl:text-fs13 3xl:mb-[3px] 3xl:text-fs16 font-medium lg:mb-[2px] lg:text-fs10 mb-[4px] text-fs18 text-gray_500 text-left xl:mb-[2px] xl:text-fs12">{`Product`}</Text>
                  <Row className="2xl:mr-[253px] 2xl:mt-[3px] 3xl:mr-[304px] 3xl:mt-[3px] font-poppins items-center justify-center lg:mr-[197px] lg:mt-[2px] mr-[338px] mt-[4px] w-[39%] xl:mr-[225px] xl:mt-[2px]">
                    <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">{`Quantity`}</Text>
                    <Text className="2xl:ml-[173px] 2xl:text-fs13 3xl:ml-[208px] 3xl:text-fs16 font-medium lg:ml-[134px] lg:text-fs10 ml-[231px] text-fs18 text-gray_500 text-left xl:ml-[154px] xl:text-fs12">{`Price`}</Text>
                    <Text className="2xl:ml-[174px] 2xl:text-fs13 3xl:ml-[208px] 3xl:text-fs16 font-medium lg:ml-[135px] lg:text-fs10 ml-[232px] text-fs18 text-gray_500 text-left xl:ml-[154px] xl:text-fs12">{`Total`}</Text>
                  </Row>
                </Row>
                <Line className="2xl:mt-[24px] 3xl:mt-[28px] bg-bluegray_100 h-[1px] lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]" />
              </Column>
              <List
                className="2xl:mt-[24px] 3xl:mt-[28px] flex-wrap gap-[0] lg:mt-[18px] min-h-[auto] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]"
                orientation="vertical"
              >
                <Column className="2xl:my-[12px] 3xl:my-[14px] font-poppins items-center justify-start lg:my-[9px] mx-[auto] my-[16px] self-stretch w-[100%] xl:my-[10px]">
                  <Row className="items-center justify-start mr-[1px] w-[100%]">
                    <Image
                      src="img_image.svg"
                      className="2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:h-[117px] object-contain w-[auto] xl:h-[134px]"
                      alt="image"
                    />
                    <Text className="2xl:ml-[49px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[59px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[38px] lg:my-[47px] lg:text-fs14 ml-[66px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[44px] xl:my-[54px] xl:text-fs16">{`Gray T-shirt`}</Text>
                    <Stack className="2xl:h-[37px] 2xl:ml-[187px] 2xl:my-[57px] 3xl:h-[44px] 3xl:ml-[225px] 3xl:my-[68px] h-[48px] lg:h-[28px] lg:ml-[145px] lg:my-[44px] ml-[250px] my-[76px] w-[11%] xl:h-[33px] xl:ml-[166px] xl:my-[50px]">
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
                    <Text className="2xl:ml-[104px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[125px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[81px] lg:my-[47px] lg:text-fs14 ml-[139px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[92px] xl:my-[54px] xl:text-fs16">{`$100.99`}</Text>
                    <Text className="2xl:ml-[139px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[167px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[108px] lg:my-[47px] lg:text-fs14 ml-[186px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[124px] xl:my-[54px] xl:text-fs16">{`$100.99`}</Text>
                    <Image
                      src="img_.svg"
                      className="2xl:h-[26px] 2xl:mb-[61px] 2xl:ml-[192px] 2xl:mt-[63px] 3xl:h-[31px] 3xl:mb-[73px] 3xl:ml-[231px] 3xl:mt-[75px] h-[33.94px] lg:h-[20px] lg:mb-[47px] lg:ml-[149px] lg:mt-[49px] mb-[82.06px] ml-[257px] mt-[84px] object-contain w-[auto] xl:h-[23px] xl:mb-[54px] xl:ml-[171px] xl:mt-[56px]"
                      alt=""
                    />
                  </Row>
                  <Line className="2xl:mt-[24px] 3xl:mt-[28px] bg-bluegray_100 h-[1px] lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]" />
                </Column>
                <Column className="2xl:my-[12px] 3xl:my-[14px] font-poppins items-center justify-start lg:my-[9px] mx-[auto] my-[16px] self-stretch w-[100%] xl:my-[10px]">
                  <Row className="items-center justify-start mr-[1px] w-[100%]">
                    <Image
                      src="img_image.svg"
                      className="2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:h-[117px] object-contain w-[auto] xl:h-[134px]"
                      alt="image"
                    />
                    <Text className="2xl:ml-[49px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[59px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[38px] lg:my-[47px] lg:text-fs14 ml-[66px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[44px] xl:my-[54px] xl:text-fs16">{`Red Flannel`}</Text>
                    <Stack className="2xl:h-[37px] 2xl:ml-[191px] 2xl:my-[57px] 3xl:h-[44px] 3xl:ml-[229px] 3xl:my-[68px] h-[48px] lg:h-[28px] lg:ml-[148px] lg:my-[44px] ml-[255px] my-[76px] w-[11%] xl:h-[33px] xl:ml-[170px] xl:my-[50px]">
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
                    <Text className="2xl:ml-[104px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[125px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[81px] lg:my-[47px] lg:text-fs14 ml-[139px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[92px] xl:my-[54px] xl:text-fs16">{`$100.99`}</Text>
                    <Text className="2xl:ml-[139px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[167px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[108px] lg:my-[47px] lg:text-fs14 ml-[186px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[124px] xl:my-[54px] xl:text-fs16">{`$100.99`}</Text>
                    <Image
                      src="img_.svg"
                      className="2xl:h-[26px] 2xl:ml-[192px] 2xl:my-[62px] 3xl:h-[31px] 3xl:ml-[231px] 3xl:my-[74px] h-[33.94px] lg:h-[20px] lg:ml-[149px] lg:my-[48px] mb-[83.06px] ml-[257px] mt-[83px] object-contain w-[auto] xl:h-[23px] xl:ml-[171px] xl:my-[55px]"
                      alt=""
                    />
                  </Row>
                  <Line className="2xl:mt-[24px] 3xl:mt-[28px] bg-bluegray_100 h-[1px] lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]" />
                </Column>
              </List>
            </Column>
            <Row className="2xl:mt-[24px] 3xl:mt-[28px] justify-between lg:mt-[18px] mt-[32px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[21px]">
              <Row className="2xl:mb-[27px] 3xl:mb-[33px] border border-bluegray_100 border-solid font-poppins items-center justify-between lg:mb-[21px] mb-[37px] px-[0] w-[29%] xl:mb-[24px]">
                <Text className="2xl:ml-[12px] 2xl:my-[12px] 2xl:text-fs13 3xl:mb-[15px] 3xl:ml-[14px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[9px] lg:text-fs10 mb-[17px] ml-[16px] mt-[16px] opacity-op5 text-center text-fs18 text-gray_500 tracking-ls1 w-[39%] xl:mb-[11px] xl:ml-[10px] xl:mt-[10px] xl:text-fs12">{`Enter coupon code`}</Text>
                <Button className="2xl:px-[12px] 2xl:py-[13px] 2xl:text-fs13 3xl:px-[14px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-normal lg:px-[9px] lg:py-[10px] lg:text-fs10 px-[16px] py-[18.045px] text-center text-fs18 text-white_A700 w-[30%] xl:px-[10px] xl:py-[12px] xl:text-fs12">{`Apply Code`}</Button>
              </Row>
              <Column className="font-poppins justify-start w-[9%]">
                <Text className="2xl:ml-[72px] 2xl:mr-[2px] 2xl:text-fs13 3xl:ml-[87px] 3xl:mr-[2px] 3xl:text-fs16 font-medium lg:ml-[56px] lg:mr-[1px] lg:text-fs10 ml-[97px] mr-[3px] text-fs18 text-gray_500 text-left xl:ml-[64px] xl:mr-[2px] xl:text-fs12">{`Total`}</Text>
                <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                  <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 self-stretch text-fs36 text-gray_800 text-left xl:text-fs24">{`$202.00`}</Text>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
        <Row className="2xl:ml-[917px] 2xl:mt-[60px] 3xl:ml-[1100px] 3xl:mt-[72px] font-poppins items-center justify-end lg:ml-[712px] lg:mt-[46px] max-w-[410px] ml-[1222px] mt-[80px] w-[26%] xl:ml-[815px] xl:mt-[53px]">
          <Input
            className="2xl:pl-[12px] 2xl:py-[9px] 2xl:text-fs13 3xl:pl-[14px] 3xl:py-[10px] 3xl:text-fs16 bg-transparent border border-gray_800 border-solid font-medium lg:pl-[9px] lg:py-[7px] lg:text-fs10 pl-[16px] placeholder:text-gray_800 py-[12.045px] text-fs18 text-gray_800 text-left w-[51%] xl:pl-[10px] xl:py-[8px] xl:text-fs12"
            name="Group57"
            placeholder="Continue Shopping"
          ></Input>
          <Button className="2xl:ml-[24px] 2xl:px-[22px] 2xl:py-[9px] 2xl:text-fs13 3xl:ml-[28px] 3xl:px-[27px] 3xl:py-[10px] 3xl:text-fs16 bg-gray_800 border-bw font-medium lg:ml-[18px] lg:px-[17px] lg:py-[7px] lg:text-fs10 ml-[32px] px-[30px] py-[12.045px] text-center text-fs18 text-white_A700 w-[42%] xl:ml-[21px] xl:px-[20px] xl:py-[8px] xl:text-fs12">{`Checkout`}</Button>
        </Row>
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

export default CartPage;
