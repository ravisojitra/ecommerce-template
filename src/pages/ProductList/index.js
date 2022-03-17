import React from "react";

import { Column } from "components/Column";
import { CategorieswithSidebar1 } from "components/CategorieswithSidebar1";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { Input } from "components/Input";
import { Image } from "components/Image";
import { CategorieswithSidebarlist } from "components/CategorieswithSidebarlist";
import { Line } from "components/Line";
import { List } from "components/List";
import { CategorieswithSidebar11 } from "components/CategorieswithSidebar11";
import { Grid } from "components/Grid";
import { Button } from "components/Button";
import { ProductListfooter } from "components/ProductListfooter";

const ProductListPage = () => {
  return (
    <Column className="bg-white_A700 font-poppins justify-start ml-[auto] mr-[auto] w-[100%]">
      <CategorieswithSidebar1
        children={`Elliye`}
        children1={`Search here`}
        children2={`Login`}
        className="mx-[auto] self-stretch w-[100%]"
      />
      <Column className="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
        <Row className="2xl:mx-[108px] 3xl:mx-[129px] items-center justify-start lg:mx-[84px] max-w-[202px] mx-[144px] w-[11%] xl:mx-[96px]">
          <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">{`Home`}</Text>
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-bluegray_100 text-fs18 text-left xl:text-fs12">{`>`}</Text>
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Product List`}</Text>
          </Row>
        </Row>
      </Column>
      <Text className="2xl:mt-[30px] 2xl:text-fs27 3xl:mt-[36px] 3xl:text-fs32 font-bold lg:mt-[23px] lg:text-fs21 mt-[41px] mx-[auto] text-fs36 text-gray_800 text-left xl:mt-[27px] xl:text-fs24">{`Product List`}</Text>
      <Row className="2xl:mt-[45px] 3xl:mt-[54px] justify-start lg:mt-[35px] mt-[60px] mx-[auto] w-[85%] xl:mt-[40px]">
        <Column className="2xl:mb-[422px] 3xl:mb-[506px] font-poppins justify-start lg:mb-[328px] mb-[563px] w-[16%] xl:mb-[375px]">
          <Column className="items-center mx-[auto] self-stretch w-[100%]">
            <Stack className="2xl:h-[407px] 3xl:h-[489px] font-poppins h-[542px] lg:h-[317px] mx-[auto] self-stretch w-[100%] xl:h-[362px]">
              <Column className="absolute justify-start self-stretch top-[0] w-[100%]">
                <Input
                  className="2xl:pb-[23px] 2xl:text-fs13 3xl:pb-[28px] 3xl:text-fs16 bg-transparent font-medium lg:pb-[18px] lg:text-fs10 pb-[31.545px] pl-[0] placeholder:text-gray_800 pt-[1px] self-stretch text-fs18 text-gray_800 text-left w-[100%] xl:pb-[21px] xl:text-fs12"
                  name="Group34"
                  placeholder="Categories"
                ></Input>
                <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[60%] xl:mr-[6px] xl:mt-[21px]">
                  <Row className="2xl:mr-[7px] 3xl:mr-[9px] font-poppins items-center justify-start lg:mr-[5px] mr-[10px] w-[74%] xl:mr-[6px]">
                    <Image
                      src="img_sweater_3.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:h-[19px] object-contain w-[auto] xl:h-[22px]"
                      alt="Sweater"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Jacket`}</Text>
                  </Row>
                  <Row className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[61%] xl:mr-[6px] xl:mt-[16px]">
                    <Image
                      src="img_tshirt_3.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:h-[19px] object-contain w-[auto] xl:h-[22px]"
                      alt="Tshirt"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_800 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Shirt`}</Text>
                  </Row>
                  <Row className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[68%] xl:mr-[6px] xl:mt-[16px]">
                    <Image
                      src="img_pants_3.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:h-[19px] object-contain w-[auto] xl:h-[22px]"
                      alt="Pants"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Pants`}</Text>
                  </Row>
                  <Row className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[71%] xl:mr-[6px] xl:mt-[16px]">
                    <Image
                      src="img_boot_3.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:h-[19px] object-contain w-[auto] xl:h-[22px]"
                      alt="Boot"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Shoes`}</Text>
                  </Row>
                  <Row className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[68%] xl:mr-[6px] xl:mt-[16px]">
                    <Image
                      src="img_dress_3.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:h-[19px] object-contain w-[auto] xl:h-[22px]"
                      alt="Dress"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Dress`}</Text>
                  </Row>
                  <Column className="2xl:mt-[18px] 3xl:mt-[21px] items-center lg:mt-[14px] mt-[24px] mx-[auto] self-stretch w-[100%] xl:mt-[16px]">
                    <Row className="font-poppins items-center justify-start mx-[auto] self-stretch w-[100%]">
                      <Image
                        src="img_belt_3.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:h-[19px] object-contain w-[auto] xl:h-[22px]"
                        alt="Belt"
                      />
                      <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Accesories`}</Text>
                    </Row>
                  </Column>
                  <Row className="2xl:mb-[38px] 2xl:mr-[7px] 2xl:mt-[18px] 3xl:mb-[45px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mb-[29px] lg:mr-[5px] lg:mt-[14px] mb-[51px] mr-[10px] mt-[24px] w-[59%] xl:mb-[34px] xl:mr-[6px] xl:mt-[16px]">
                    <Image
                      src="img_skirt_1.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:h-[19px] object-contain w-[auto] xl:h-[22px]"
                      alt="Skirt"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Skirt`}</Text>
                  </Row>
                </Column>
              </Column>
              <div className="absolute bg-transparent bottom-[0] self-stretch w-[100%] input-wrap">
                <div className="input-wrap">
                  <Image
                    src="img_chevrondown.svg"
                    className="absolute w-[auto] h-[24px] top-[3.045px] bottom-[35.045px] left-[0] object-contain lg:h-[14px] lg:top-[1px] lg:bottom-[20px] xl:h-[17px] xl:top-[2px] xl:bottom-[23px] 2xl:h-[19px] 2xl:top-[2px] 2xl:bottom-[26px] 3xl:h-[22px] 3xl:top-[2px] 3xl:bottom-[31px]"
                    alt="chevron-down"
                  />
                  <Input
                    className="-translate-x-1/2 2xl:pb-[26px] 2xl:pl-[25px] 2xl:pt-[2px] 2xl:text-fs13 3xl:pb-[31px] 3xl:pl-[30px] 3xl:pt-[2px] 3xl:text-fs16 bg-transparent font-normal left-[50%] lg:pb-[20px] lg:pl-[19px] lg:pt-[1px] lg:text-fs10 pb-[35.045px] pl-[34px] placeholder:text-gray_500 pt-[3.045px] text-fs18 text-gray_500 text-left w-[100%] xl:pb-[23px] xl:pl-[22px] xl:pt-[2px] xl:text-fs12"
                    name="Group35"
                    placeholder="View more"
                  ></Input>
                </div>
              </div>
            </Stack>
          </Column>
          <Text className="2xl:mr-[7px] 2xl:mt-[24px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[28px] 3xl:text-fs16 font-medium lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:mt-[21px] xl:text-fs12">{`Filter by Price`}</Text>
          <CategorieswithSidebarlist
            label={`All Price`}
            name="Group36"
            src="img_checkedbox.svg"
            children={`$100 - $250`}
            label1={`$250 - $500`}
            name1="Group37"
            label2={`$750 - $1.000`}
            name2="Group38"
            label3={`$1000 - $1.500`}
            name3="Group39"
            className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] justify-start lg:mr-[5px] lg:mt-[18px] max-w-[166px] mr-[10px] mt-[32px] w-[68%] xl:mr-[6px] xl:mt-[21px]"
          />
          <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
            <Line className="bg-bluegray_100 h-[1px] mx-[auto] self-stretch w-[100%]" />
          </Column>
          <Text className="2xl:mr-[7px] 2xl:mt-[23px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[27px] 3xl:text-fs16 font-medium lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[31px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:mt-[20px] xl:text-fs12">{`Filter by Rating`}</Text>
          <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[79%] xl:mr-[6px] xl:mt-[21px]">
            <Row className="2xl:mr-[7px] 3xl:mr-[9px] items-center justify-start lg:mr-[5px] mr-[10px] w-[34%] xl:mr-[6px]">
              <Image
                src="img_checkbox.svg"
                className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                alt="Checkbox"
              />
              <Image
                src="img_star1.svg"
                className="2xl:h-[19px] 2xl:ml-[12px] 3xl:h-[22px] 3xl:ml-[14px] bg-yellow_400 h-[24px] lg:h-[14px] lg:ml-[9px] ml-[16px] object-contain w-[auto] xl:h-[17px] xl:ml-[10px]"
                alt="Star1"
              />
            </Row>
            <Row className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] items-center justify-start lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[50%] xl:mr-[6px] xl:mt-[10px]">
              <Image
                src="img_checkbox.svg"
                className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                alt="Checkbox"
              />
              <Row className="2xl:ml-[12px] 3xl:ml-[14px] items-center justify-between lg:ml-[9px] ml-[16px] px-[0] w-[59%] xl:ml-[10px]">
                <Image
                  src="img_star1.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                  alt="Star1"
                />
                <Image
                  src="img_star1.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                  alt="Star2"
                />
              </Row>
            </Row>
            <List
              className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] flex-wrap gap-[0] lg:mr-[5px] lg:mt-[9px] min-h-[auto] mr-[10px] mt-[16px] w-[84%] xl:mr-[6px] xl:mt-[10px]"
              orientation="vertical"
            >
              <Row className="2xl:mr-[24px] 2xl:my-[6px] 3xl:mr-[28px] 3xl:my-[7px] items-center justify-between lg:mr-[18px] lg:my-[4px] mr-[32px] my-[8px] px-[0] w-[80%] xl:mr-[21px] xl:my-[5px]">
                <Image
                  src="img_checkbox.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                  alt="Checkbox"
                />
                <Row className="items-center justify-between px-[0] w-[69%]">
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star1"
                  />
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star2"
                  />
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star3"
                  />
                </Row>
              </Row>
              <Row className="2xl:my-[6px] 3xl:my-[7px] items-center justify-between lg:my-[4px] mx-[auto] my-[8px] px-[0] self-stretch w-[100%] xl:my-[5px]">
                <Image
                  src="img_checkedbox.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                  alt="Checkedbox"
                />
                <Row className="items-center justify-between px-[0] w-[75%]">
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star1"
                  />
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star2"
                  />
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star3"
                  />
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star5"
                  />
                </Row>
              </Row>
            </List>
            <CategorieswithSidebar11 className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]" />
          </Column>
        </Column>
        <Column className="2xl:ml-[24px] 3xl:ml-[28px] items-center justify-start lg:ml-[18px] ml-[32px] w-[84%] xl:ml-[21px]">
          <Row className="font-poppins items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">
              <span className="text-gray_500 text-fs18 font-poppins text-left font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                <>{`Viewing `}</>
              </span>
              <span className="text-gray_800 text-fs18 font-poppins text-left font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                <>{`20`}</>
              </span>
              <span className="text-gray_500 text-fs18 font-poppins text-left font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                <>{` of `}</>
              </span>
              <span className="text-gray_800 text-fs18 font-poppins text-left font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                <>{`160`}</>
              </span>
              <span className="text-gray_500 text-fs18 font-poppins text-left font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                <>{` product`}</>
              </span>
            </Text>
            <Row className="font-poppins items-center justify-between px-[0] w-[18%]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">
                <span className="text-gray_500 text-fs18 font-poppins text-left font-normal lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                  <>{`Sort by: `}</>
                </span>
                <span className="text-gray_800 text-fs18 font-poppins text-left font-normal lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                  <>{`Newest Items`}</>
                </span>
              </Text>
              <Image
                src="img_chevrondown_1.svg"
                className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] my-[1px] object-contain w-[auto] xl:h-[17px]"
                alt="chevrondown"
              />
            </Row>
          </Row>
          <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-start lg:mt-[18px] mr-[1px] mt-[32px] w-[100%] xl:mt-[21px]">
            <Column className="items-center justify-start mx-[auto] self-stretch w-[100%]">
              <List
                className="flex-wrap gap-[0] min-h-[auto] mx-[auto] self-stretch w-[100%]"
                orientation="vertical"
              >
                <Row className="2xl:my-[12px] 3xl:my-[14px] items-center justify-between lg:my-[9px] mx-[auto] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
                  <Column className="items-center justify-start w-[19%]">
                    <Image
                      src="img_maskgroup_42.svg"
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
                  <Column className="items-center justify-start w-[19%]">
                    <Image
                      src="img_maskgroup_43.svg"
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
                  <Column className="items-center justify-start w-[19%]">
                    <Image
                      src="img_maskgroup_44.svg"
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
                  <Column className="items-center justify-start w-[19%]">
                    <Image
                      src="img_maskgroup_45.svg"
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
                  <Column className="items-center justify-start w-[19%]">
                    <Image
                      src="img_maskgroup_46.svg"
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
                </Row>
                <Row className="2xl:my-[12px] 3xl:my-[14px] justify-between lg:my-[9px] mx-[auto] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
                  <Column className="items-center justify-start w-[19%]">
                    <Image
                      src="img_maskgroup_47.svg"
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
                  <Column className="2xl:mb-[27px] 3xl:mb-[32px] items-center justify-start lg:mb-[21px] mb-[36px] w-[19%] xl:mb-[24px]">
                    <Image
                      src="img_maskgroup_48.svg"
                      className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                      alt="MaskGroup"
                    />
                    <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[60%] xl:mt-[10px]">
                      <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">{`Gray T-shirt`}</Text>
                      <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                    </Column>
                  </Column>
                  <Column className="2xl:mb-[27px] 3xl:mb-[32px] items-center justify-start lg:mb-[21px] mb-[36px] w-[19%] xl:mb-[24px]">
                    <Image
                      src="img_maskgroup_49.svg"
                      className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                      alt="MaskGroup"
                    />
                    <Column className="2xl:mt-[12px] 2xl:mx-[39px] 3xl:ml-[47px] 3xl:mr-[46px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] lg:mx-[30px] ml-[53px] mr-[52px] mt-[16px] w-[58%] xl:ml-[35px] xl:mr-[34px] xl:mt-[10px]">
                      <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Red Flannel`}</Text>
                      <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start w-[19%]">
                    <Image
                      src="img_maskgroup_50.svg"
                      className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                      alt="MaskGroup"
                    />
                    <Column className="2xl:ml-[41px] 2xl:mr-[40px] 2xl:mt-[12px] 3xl:ml-[49px] 3xl:mr-[48px] 3xl:mt-[14px] font-poppins items-center justify-start lg:ml-[32px] lg:mr-[31px] lg:mt-[9px] ml-[55px] mr-[54px] mt-[16px] w-[56%] xl:mt-[10px] xl:mx-[36px]">
                      <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                        {
                          <>
                            {`Casual `}
                            <br />
                            {`Grey Shoes`}
                          </>
                        }
                      </Text>
                      <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                    </Column>
                  </Column>
                  <Column className="2xl:mb-[27px] 3xl:mb-[32px] items-center justify-start lg:mb-[21px] mb-[36px] w-[19%] xl:mb-[24px]">
                    <Image
                      src="img_maskgroup_51.svg"
                      className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                      alt="MaskGroup"
                    />
                    <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[56%] xl:mt-[10px]">
                      <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">{`Pink Jacket`}</Text>
                      <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                    </Column>
                  </Column>
                </Row>
              </List>
              <Grid className="2xl:gap-[24px] 2xl:mt-[24px] 3xl:gap-[28px] 3xl:mt-[28px] gap-[32px] grid grid-cols-5 lg:gap-[18px] lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:gap-[21px] xl:mt-[21px]">
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_52.svg"
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
                    src="img_maskgroup_53.svg"
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
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_54.svg"
                    className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                    alt="MaskGroup"
                  />
                  <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[77%] xl:mt-[10px]">
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
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_55.svg"
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
                    <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_56.svg"
                    className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                    alt="MaskGroup"
                  />
                  <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[71%] xl:mt-[10px]">
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
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_57.svg"
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
                    <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="justify-start w-[100%]">
                  <Stack className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] self-stretch w-[100%] xl:h-[164px]">
                    <Image
                      src="img_maskgroup_58.svg"
                      className="2xl:h-[184px] 3xl:h-[221px] absolute h-[245px] lg:h-[143px] object-cover self-stretch w-[auto] xl:h-[164px]"
                      alt="MaskGroup"
                    />
                  </Stack>
                  <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-end lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                    <Column className="2xl:mx-[28px] 3xl:mx-[34px] font-poppins items-center justify-start lg:mx-[22px] mx-[38px] w-[65%] xl:mx-[25px]">
                      <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                        {
                          <>
                            {`Black Formal`}
                            <br />
                            {`Highheels`}
                          </>
                        }
                      </Text>
                      <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_59.svg"
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
                    <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_60.svg"
                    className="2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:h-[143px] mx-[auto] object-cover self-stretch w-[auto] xl:h-[164px]"
                    alt="MaskGroup"
                  />
                  <Column className="2xl:ml-[44px] 2xl:mr-[43px] 2xl:mt-[12px] 3xl:ml-[53px] 3xl:mr-[52px] 3xl:mt-[14px] font-poppins items-center justify-start lg:ml-[34px] lg:mr-[33px] lg:mt-[9px] ml-[59px] mr-[58px] mt-[16px] w-[53%] xl:ml-[39px] xl:mr-[38px] xl:mt-[10px]">
                    <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                      {
                        <>
                          {`Gray `}
                          <br />
                          {`Longpants`}
                        </>
                      }
                    </Text>
                    <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_61.svg"
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
                    <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                  </Column>
                </Column>
              </Grid>
            </Column>
            <Row className="2xl:ml-[397px] 2xl:mr-[395px] 2xl:mt-[42px] 3xl:ml-[477px] 3xl:mr-[474px] 3xl:mt-[50px] items-center justify-center lg:ml-[309px] lg:mr-[307px] lg:mt-[32px] ml-[530px] mr-[527px] mt-[56px] w-[22%] xl:ml-[353px] xl:mr-[351px] xl:mt-[37px]">
              <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
                <Image
                  src="img_chevrondown_2.svg"
                  className="2xl:h-[19px] 2xl:my-[10px] 3xl:h-[22px] 3xl:my-[12px] h-[24px] lg:h-[14px] lg:my-[7px] my-[13.5px] object-contain w-[auto] xl:h-[17px] xl:my-[9px]"
                  alt="chevrondown"
                />
                <Button className="2xl:pb-[10px] 2xl:pl-[16px] 2xl:pr-[15px] 2xl:pt-[9px] 2xl:text-fs13 3xl:pb-[12px] 3xl:pl-[19px] 3xl:pr-[18px] 3xl:pt-[11px] 3xl:text-fs16 bg-gray_800 border-bw font-normal lg:px-[12px] lg:py-[7px] lg:text-fs10 my-[1px] pb-[13.545px] pl-[22px] pr-[21.069946px] pt-[12.545px] text-center text-fs18 text-white_A700 w-[17%] xl:pb-[9px] xl:pt-[8px] xl:px-[14px] xl:text-fs12">{`1`}</Button>
                <Button className="2xl:px-[15px] 2xl:py-[10px] 2xl:text-fs13 3xl:px-[18px] 3xl:py-[12px] 3xl:text-fs16 bg-transparent border-2 border-gray_500 border-solid font-normal lg:px-[11px] lg:py-[7px] lg:text-fs10 pl-[20px] pr-[20.109985px] py-[13.545px] text-center text-fs18 text-gray_500 w-[18%] xl:px-[13px] xl:py-[9px] xl:text-fs12">{`2`}</Button>
                <Button className="2xl:px-[15px] 2xl:py-[10px] 2xl:text-fs13 3xl:px-[18px] 3xl:py-[12px] 3xl:text-fs16 bg-transparent border-2 border-gray_500 border-solid font-normal lg:px-[11px] lg:py-[7px] lg:text-fs10 pl-[20px] pr-[20.109985px] py-[13.545px] text-center text-fs18 text-gray_500 w-[18%] xl:px-[13px] xl:py-[9px] xl:text-fs12">{`3`}</Button>
                <Image
                  src="img_chevrondown_3.svg"
                  className="2xl:h-[19px] 2xl:my-[10px] 3xl:h-[22px] 3xl:my-[12px] h-[24px] lg:h-[14px] lg:my-[7px] my-[13.5px] object-contain w-[auto] xl:h-[17px] xl:my-[9px]"
                  alt="chevrondown"
                />
              </Row>
            </Row>
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
  );
};

export default ProductListPage;
