import React from "react";

import { Column } from "components/Column";
import { Completed1 } from "components/Completed1";
import { Completedbreadcrumb } from "components/Completedbreadcrumb";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Completedprogress } from "components/Completedprogress";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { ProductListfooter } from "components/ProductListfooter";

const CheckoutPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="justify-start self-stretch w-[100%]">
        <Completed1
          children={`Elliye`}
          children1={`Login`}
          className="items-center mx-[auto] self-stretch w-[100%]"
        />
        <Completedbreadcrumb
          children={`Home`}
          children1={`>`}
          children2={`Shopping Cart`}
          children3={`>`}
          children4={`Checkout`}
          className="2xl:mt-[24px] 2xl:mx-[108px] 3xl:mt-[28px] 3xl:mx-[129px] items-center justify-start lg:mt-[18px] lg:mx-[84px] max-w-[360px] mt-[32px] mx-[144px] w-[19%] xl:mt-[21px] xl:mx-[96px]"
        />
        <Column className="2xl:mt-[30px] 3xl:mt-[36px] font-poppins items-center lg:mt-[23px] mt-[41px] mx-[auto] self-stretch w-[100%] xl:mt-[27px]">
          <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 mx-[auto] text-fs36 text-gray_800 text-left xl:text-fs24">{`Checkout`}</Text>
          <Completedprogress
            children={`1`}
            children1={`Shopping Cart`}
            children2={`2`}
            children3={`Checkout`}
            children4={`3`}
            children5={`Completed`}
            className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] max-w-[1604px] mt-[100px] mx-[auto] w-[84%] xl:mt-[66px]"
          />
          <Row className="2xl:mt-[60px] 3xl:mt-[72px] items-center justify-between lg:mt-[46px] mt-[80px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[53px]">
            <Column className="2xl:ml-[108px] 3xl:ml-[129px] font-poppins justify-start lg:ml-[84px] ml-[144px] w-[35%] xl:ml-[96px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-medium lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Buyer Info`}</Text>
              <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                <Line className="bg-bluegray_100 h-[1px] mr-[1px] w-[100%]" />
                <Column className="2xl:mt-[23px] 3xl:mt-[27px] font-poppins justify-start lg:mt-[18px] ml-[1px] mt-[31px] w-[100%] xl:mt-[20px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Full Name`}</Text>
                  <Input
                    className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                    name="Group66"
                    placeholder="Full Name"
                  ></Input>
                </Column>
                <Column className="2xl:mt-[24px] 3xl:mt-[28px] font-poppins justify-start lg:mt-[18px] ml-[1px] mt-[32px] w-[100%] xl:mt-[21px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-center text-fs18 text-gray_500 w-[12%] xl:mr-[6px] xl:text-fs12">{`Address`}</Text>
                  <Input
                    className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                    name="Group68"
                    placeholder="Address"
                  ></Input>
                </Column>
                <Column className="2xl:mt-[24px] 3xl:mt-[28px] font-poppins justify-start lg:mt-[18px] mr-[1px] mt-[32px] w-[100%] xl:mt-[21px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-center text-fs18 text-gray_500 w-[12%] xl:mr-[6px] xl:text-fs12">{`Contact`}</Text>
                  <Input
                    className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                    name="Group72"
                    placeholder="Contact"
                  ></Input>
                </Column>
                <Column className="2xl:mt-[24px] 3xl:mt-[28px] font-poppins justify-start lg:mt-[18px] mr-[1px] mt-[32px] w-[100%] xl:mt-[21px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-center text-fs18 text-gray_500 w-[6%] xl:mr-[6px] xl:text-fs12">{`City`}</Text>
                  <Input
                    className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                    name="Group78"
                    placeholder="City"
                  ></Input>
                </Column>
                <Row className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[32px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[21px]">
                  <Column className="font-poppins justify-start w-[59%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-center text-fs18 text-gray_500 w-[13%] xl:mr-[6px] xl:text-fs12">{`State`}</Text>
                    <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]">
                      <Row className="border border-bluegray_100 border-solid font-poppins items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]">
                        <Text className="2xl:ml-[24px] 2xl:my-[12px] 2xl:text-fs13 3xl:mb-[15px] 3xl:ml-[28px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:ml-[18px] lg:my-[9px] lg:text-fs10 mb-[17px] ml-[32px] mt-[16px] text-center text-fs18 text-gray_500 w-[28%] xl:mb-[11px] xl:ml-[21px] xl:mt-[10px] xl:text-fs12">{`Select State`}</Text>
                        <Image
                          src="img_chevrondown.svg"
                          className="2xl:h-[19px] 2xl:mr-[24px] 2xl:my-[13px] 3xl:h-[22px] 3xl:mr-[28px] 3xl:my-[16px] h-[24px] lg:h-[14px] lg:mr-[18px] lg:my-[10px] mr-[32px] my-[18px] object-contain w-[auto] xl:h-[17px] xl:mr-[21px] xl:my-[12px]"
                          alt="chevrondown"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="font-poppins justify-start mr-[1px] w-[38%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-center text-fs18 text-gray_500 w-[33%] xl:mr-[6px] xl:text-fs12">{`Zip Code`}</Text>
                    <Input
                      className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                      name="Group80"
                      placeholder="Zip Code"
                    ></Input>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="2xl:mr-[108px] 3xl:mr-[129px] font-poppins justify-start lg:mr-[84px] mr-[144px] w-[42%] xl:mr-[96px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-medium lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Payment Method`}</Text>
              <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                <Line className="bg-bluegray_100 h-[1px] mx-[auto] self-stretch w-[100%]" />
                <Row className="2xl:mt-[23px] 3xl:mt-[27px] font-poppins items-center justify-between lg:mt-[18px] mt-[31px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[20px]">
                  <Row className="border border-bluegray_100 border-solid items-center justify-center w-[31%]">
                    <Image
                      src="img_card_2.svg"
                      className="2xl:h-[31px] 2xl:mb-[23px] 2xl:ml-[31px] 2xl:mt-[24px] 3xl:h-[37px] 3xl:mb-[27px] 3xl:ml-[37px] 3xl:mt-[28px] h-[40px] lg:h-[24px] lg:ml-[24px] lg:my-[18px] mb-[31px] ml-[42px] mt-[32px] object-contain w-[auto] xl:h-[27px] xl:mb-[20px] xl:ml-[28px] xl:mt-[21px]"
                      alt="Card"
                    />
                    <Text className="2xl:mb-[27px] 2xl:ml-[12px] 2xl:mr-[31px] 2xl:mt-[29px] 2xl:text-fs13 3xl:mb-[33px] 3xl:ml-[14px] 3xl:mr-[37px] 3xl:mt-[35px] 3xl:text-fs16 font-normal lg:mb-[21px] lg:ml-[9px] lg:mr-[24px] lg:mt-[22px] lg:text-fs10 mb-[37px] ml-[16px] mr-[42px] mt-[39px] text-fs18 text-gray_800 text-left xl:mb-[24px] xl:ml-[10px] xl:mr-[28px] xl:mt-[26px] xl:text-fs12">{`Credit Card`}</Text>
                  </Row>
                  <Row className="bg-gray_800 border border-bluegray_100 border-solid items-center justify-center w-[31%]">
                    <Image
                      src="img_transfer.svg"
                      className="2xl:h-[31px] 2xl:mb-[23px] 2xl:ml-[24px] 2xl:mt-[24px] 3xl:h-[37px] 3xl:mb-[27px] 3xl:ml-[29px] 3xl:mt-[28px] h-[40px] lg:h-[24px] lg:ml-[19px] lg:my-[18px] mb-[31px] ml-[33px] mt-[32px] object-contain w-[auto] xl:h-[27px] xl:mb-[20px] xl:ml-[22px] xl:mt-[21px]"
                      alt="transfer"
                    />
                    <Text className="2xl:ml-[12px] 2xl:mr-[24px] 2xl:my-[28px] 2xl:text-fs13 3xl:ml-[14px] 3xl:mr-[29px] 3xl:my-[34px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:mr-[19px] lg:my-[22px] lg:text-fs10 ml-[16px] mr-[33px] my-[38px] text-fs18 text-left text-white_A700 xl:ml-[10px] xl:mr-[22px] xl:my-[25px] xl:text-fs12">{`Bank Transfer`}</Text>
                  </Row>
                  <div className="bg-transparent border-bw w-[31%] input-wrap">
                    <Image
                      src="img_paypal.svg"
                      className="absolute w-[auto] h-[40px] top-[33.545px] bottom-[32.545px] left-[64px] object-contain lg:h-[24px] lg:top-[19px] lg:bottom-[18px] lg:left-[37px] xl:h-[27px] xl:top-[22px] xl:bottom-[21px] xl:left-[42px] 2xl:h-[31px] 2xl:top-[25px] 2xl:bottom-[24px] 2xl:left-[48px] 3xl:h-[37px] 3xl:top-[30px] 3xl:bottom-[29px] 3xl:left-[57px]"
                      alt="paypal"
                    />
                    <Button className="2xl:pb-[24px] 2xl:pl-[85px] 2xl:pr-[22px] 2xl:pt-[25px] 2xl:text-fs13 3xl:pb-[29px] 3xl:pl-[102px] 3xl:pr-[27px] 3xl:pt-[30px] 3xl:text-fs16 bg-transparent border border-bluegray_100 border-solid font-normal lg:pb-[18px] lg:pl-[66px] lg:pr-[17px] lg:pt-[19px] lg:text-fs10 pb-[32.545px] pl-[114px] pr-[30px] pt-[33.545px] text-center text-fs18 text-gray_800 w-[100%] xl:pb-[21px] xl:pl-[76px] xl:pr-[20px] xl:pt-[22px] xl:text-fs12">{`Paypal`}</Button>
                  </div>
                </Row>
                <Column className="2xl:mt-[24px] 3xl:mt-[28px] font-poppins justify-start lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Name on Card`}</Text>
                  <Input
                    className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                    name="Group70"
                    placeholder="Name on Card"
                  ></Input>
                </Column>
                <Row className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[32px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[21px]">
                  <Column className="font-poppins justify-start w-[66%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Card Number`}</Text>
                    <Input
                      className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                      name="Group74"
                      placeholder="Card Number"
                    ></Input>
                  </Column>
                  <Column className="font-poppins justify-start w-[31%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`CVV`}</Text>
                    <Input
                      className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                      name="Group76"
                      placeholder="CVV"
                    ></Input>
                  </Column>
                </Row>
                <Row className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[32px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[21px]">
                  <Column className="font-poppins justify-start w-[48%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Month`}</Text>
                    <div className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border-bw lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px] input-wrap">
                      <Image
                        src="img_chevrondown.svg"
                        className="absolute w-[auto] h-[24px] top-[17.545px] bottom-[18.545px] right-[32px] object-contain lg:h-[14px] lg:top-[10px] lg:bottom-[10px] lg:right-[18px] xl:h-[17px] xl:top-[11px] xl:bottom-[12px] xl:right-[21px] 2xl:h-[19px] 2xl:top-[13px] 2xl:bottom-[13px] 2xl:right-[24px] 3xl:h-[22px] 3xl:top-[15px] 3xl:bottom-[16px] 3xl:right-[28px]"
                        alt="chevron-down"
                      />
                      <Button className="2xl:pl-[22px] 2xl:pr-[49px] 2xl:py-[13px] 2xl:text-fs13 3xl:pb-[16px] 3xl:pl-[27px] 3xl:pr-[59px] 3xl:pt-[15px] 3xl:text-fs16 bg-transparent border border-bluegray_100 border-solid font-normal lg:pl-[17px] lg:pr-[38px] lg:py-[10px] lg:text-fs10 pb-[18.545px] pl-[30px] pr-[66px] pt-[17.545px] text-fs18 text-gray_500 text-left w-[100%] xl:pb-[12px] xl:pl-[20px] xl:pr-[44px] xl:pt-[11px] xl:text-fs12">{`Select Month`}</Button>
                    </div>
                  </Column>
                  <Column className="font-poppins justify-start w-[48%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Year`}</Text>
                    <div className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border-bw lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px] input-wrap">
                      <Image
                        src="img_chevrondown.svg"
                        className="absolute w-[auto] h-[24px] top-[18.545px] bottom-[17.545px] right-[32px] object-contain lg:h-[14px] lg:top-[10px] lg:bottom-[10px] lg:right-[18px] xl:h-[17px] xl:top-[12px] xl:bottom-[11px] xl:right-[21px] 2xl:h-[19px] 2xl:top-[13px] 2xl:bottom-[13px] 2xl:right-[24px] 3xl:h-[22px] 3xl:top-[16px] 3xl:bottom-[15px] 3xl:right-[28px]"
                        alt="chevron-down"
                      />
                      <Button className="2xl:pl-[22px] 2xl:pr-[49px] 2xl:py-[13px] 2xl:text-fs13 3xl:pb-[15px] 3xl:pl-[27px] 3xl:pr-[59px] 3xl:pt-[16px] 3xl:text-fs16 bg-transparent border border-bluegray_100 border-solid font-normal lg:pl-[17px] lg:pr-[38px] lg:py-[10px] lg:text-fs10 pb-[17.545px] pl-[30px] pr-[66px] pt-[18.545px] text-fs18 text-gray_500 text-left w-[100%] xl:pb-[11px] xl:pl-[20px] xl:pr-[44px] xl:pt-[12px] xl:text-fs12">{`Select Year`}</Button>
                    </div>
                  </Column>
                </Row>
              </Column>
              <Column className="2xl:mt-[56px] 3xl:mt-[67px] font-poppins items-end lg:mt-[43px] mt-[75px] self-stretch w-[100%] xl:mt-[50px]">
                <Button className="2xl:ml-[7px] 2xl:px-[22px] 2xl:py-[13px] 2xl:text-fs13 3xl:ml-[9px] 3xl:px-[27px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-medium lg:ml-[5px] lg:px-[17px] lg:py-[10px] lg:text-fs10 ml-[10px] px-[30px] py-[18.045px] text-center text-fs18 text-white_A700 w-[31%] xl:ml-[6px] xl:px-[20px] xl:py-[12px] xl:text-fs12">{`Checkout`}</Button>
              </Column>
            </Column>
          </Row>
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
      </Column>
    </Column>
  );
};

export default CheckoutPage;
