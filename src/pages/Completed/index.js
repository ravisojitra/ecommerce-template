import React from "react";

import { Column } from "components/Column";
import { Completed1 } from "components/Completed1";
import { Completedbreadcrumb } from "components/Completedbreadcrumb";
import { Row } from "components/Row";
import { Completedprogress } from "components/Completedprogress";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { ProductListfooter } from "components/ProductListfooter";

const CompletedPage = () => {
  return (
    <Column className="bg-white_A700 justify-start ml-[auto] mr-[auto] w-[100%]">
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
      <Column className="2xl:mt-[75px] 3xl:mt-[90px] items-center lg:mt-[58px] mt-[100px] mx-[auto] self-stretch w-[100%] xl:mt-[66px]">
        <Completedprogress
          children={`1`}
          children1={`Shopping Cart`}
          children2={`2`}
          children3={`Checkout`}
          children4={`3`}
          children5={`Completed`}
          className="items-center justify-start max-w-[1604px] mx-[auto] w-[84%]"
        />
        <Column className="2xl:mt-[150px] 3xl:mt-[180px] font-poppins items-center justify-start lg:mt-[116px] mt-[200px] mx-[auto] self-stretch w-[100%] xl:mt-[133px]">
          <Text className="2xl:text-fs48 3xl:text-fs57 font-bold lg:text-fs37 mx-[auto] text-fs64 text-gray_800 text-left xl:text-fs42">{`Checkout Complete!`}</Text>
          <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal leading-lh32 lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-center text-fs18 text-gray_800 w-[36%] xl:mt-[10px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
          <Button className="2xl:mt-[48px] 2xl:px-[22px] 2xl:py-[13px] 2xl:text-fs13 3xl:mt-[57px] 3xl:px-[27px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-medium lg:mt-[37px] lg:px-[17px] lg:py-[10px] lg:text-fs10 mt-[64px] mx-[auto] px-[30px] py-[18.045px] text-center text-fs18 text-white_A700 w-[13%] xl:mt-[42px] xl:px-[20px] xl:py-[12px] xl:text-fs12">{`Go Shopping Again`}</Button>
        </Column>
        <ProductListfooter
          children={`Elliye`}
          children1={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}
          src1="img_call_2.svg"
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
          src3="img_submit_2.svg"
          children19={`Copyright © 2021 Elliye. All Right Reseved`}
          className="2xl:mt-[150px] 3xl:mt-[180px] lg:mt-[116px] mt-[200px] mx-[auto] self-stretch w-[100%] xl:mt-[133px]"
        />
      </Column>
    </Column>
  );
};

export default CompletedPage;
