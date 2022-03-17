import React from "react";

import { useGoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { CategorieswithSidebar1 } from "components/CategorieswithSidebar1";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { CategorieswithSidebarlist } from "components/CategorieswithSidebarlist";
import { Line } from "components/Line";
import { List } from "components/List";
import { CategorieswithSidebar11 } from "components/CategorieswithSidebar11";
import { Grid } from "components/Grid";
import { ProductListfooter } from "components/ProductListfooter";

const CategorieswithSidebarPage = () => {
  const navigate = useNavigate();

  const { signIn } = useGoogleLogin({
    onSuccess: (res) => {
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    accessType: "offline",
    cookiePolicy: "single_host_origin",
  });
  const handleBackNavigation1 = () => navigate(-1);

  return (
    <Column className="bg-white_A700 font-poppins justify-start ml-[auto] mr-[auto] w-[100%]">
      <CategorieswithSidebar1
        children={`Elliye`}
        children1={`Search here`}
        children2={`Login`}
        onClick={signIn}
        className="mx-[auto] self-stretch w-[100%]"
      />
      <Column className="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
        <Row className="2xl:mx-[108px] 3xl:mx-[129px] items-center justify-start lg:mx-[84px] max-w-[197px] mx-[144px] w-[11%] xl:mx-[96px]">
          <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">{`Home`}</Text>
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-bluegray_100 text-fs18 text-left xl:text-fs12">{`>`}</Text>
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Categories`}</Text>
          </Row>
        </Row>
      </Column>
      <Text
        className="common-pointer 2xl:mt-[30px] 2xl:text-fs27 3xl:mt-[36px] 3xl:text-fs32 font-bold lg:mt-[23px] lg:text-fs21 mt-[41px] mx-[auto] text-fs36 text-gray_800 text-left xl:mt-[27px] xl:text-fs24"
        onClick={handleBackNavigation1}
      >{`Categories`}</Text>
      <Row className="2xl:ml-[111px] 2xl:mr-[105px] 2xl:mt-[56px] 3xl:ml-[133px] 3xl:mr-[126px] 3xl:mt-[67px] justify-start lg:ml-[86px] lg:mr-[81px] lg:mt-[43px] ml-[148px] mr-[140px] mt-[75px] w-[85%] xl:ml-[98px] xl:mr-[93px] xl:mt-[50px]">
        <Column className="2xl:mb-[249px] 3xl:mb-[298px] justify-start lg:mb-[193px] mb-[332px] w-[16%] xl:mb-[221px]">
          <Column className="items-center mx-[auto] self-stretch w-[100%]">
            <Column className="justify-start self-stretch w-[100%]">
              <Column className="items-center mx-[auto] self-stretch w-[100%]">
                <Row className="font-poppins items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]">
                  <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Filter by Price`}</Text>
                  <Image
                    src="img_chevrondown_4.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] my-[1px] object-contain w-[auto] xl:h-[17px]"
                    alt="chevrondown"
                  />
                </Row>
              </Column>
              <CategorieswithSidebarlist
                label={`All Price`}
                children={`$100 - $250`}
                label1={`$250 - $500`}
                label2={`$750 - $1.000`}
                label3={`$1000 - $1.500`}
                className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] justify-start lg:mr-[5px] lg:mt-[18px] max-w-[166px] mr-[10px] mt-[32px] w-[68%] xl:mr-[6px] xl:mt-[21px]"
              />
              <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                <Line className="bg-bluegray_100 h-[1px] mx-[auto] self-stretch w-[100%]" />
              </Column>
            </Column>
            <Row className="2xl:mt-[23px] 3xl:mt-[27px] font-poppins items-center justify-between lg:mt-[18px] mt-[31px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[20px]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Filter by Rating`}</Text>
              <Image
                src="img_chevrondown_5.svg"
                className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] my-[1px] object-contain w-[auto] xl:h-[17px]"
                alt="chevrondown"
              />
            </Row>
          </Column>
          <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[79%] xl:mr-[6px] xl:mt-[21px]">
            <Row className="2xl:mr-[7px] 3xl:mr-[9px] items-center justify-start lg:mr-[5px] mr-[10px] w-[34%] xl:mr-[6px]">
              <Image
                src="img_checkbox.svg"
                className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                alt="Checkbox"
              />
              <Image
                src="img_star1_1.svg"
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
                  src="img_star1_1.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                  alt="Star1"
                />
                <Image
                  src="img_star1_1.svg"
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
                    src="img_star1_1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star1"
                  />
                  <Image
                    src="img_star1_1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star2"
                  />
                  <Image
                    src="img_star1_1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star3"
                  />
                </Row>
              </Row>
              <Row className="2xl:my-[6px] 3xl:my-[7px] items-center justify-between lg:my-[4px] mx-[auto] my-[8px] px-[0] self-stretch w-[100%] xl:my-[5px]">
                <Image
                  src="img_checkedbox_1.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                  alt="Checkedbox"
                />
                <Row className="items-center justify-between px-[0] w-[75%]">
                  <Image
                    src="img_star1_1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star1"
                  />
                  <Image
                    src="img_star1_1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star2"
                  />
                  <Image
                    src="img_star1_1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star3"
                  />
                  <Image
                    src="img_star1_1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] bg-yellow_400 h-[24px] lg:h-[14px] object-contain w-[auto] xl:h-[17px]"
                    alt="Star5"
                  />
                </Row>
              </Row>
            </List>
            <CategorieswithSidebar11 className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] mx-[auto] self-stretch w-[100%] xl:mt-[10px]" />
          </Column>
          <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
            <Line className="bg-bluegray_100 h-[1px] mx-[auto] self-stretch w-[100%]" />
            <Row className="2xl:mt-[24px] 3xl:mt-[28px] font-poppins items-center justify-between lg:mt-[18px] mt-[32px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[21px]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Filter by Brand`}</Text>
              <Image
                src="img_chevrondown_5.svg"
                className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] my-[1px] object-contain w-[auto] xl:h-[17px]"
                alt="chevrondown"
              />
            </Row>
            <Row className="2xl:mt-[24px] 3xl:mt-[28px] font-poppins items-center justify-between lg:mt-[18px] mt-[32px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[21px]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Filter by Size`}</Text>
              <Image
                src="img_chevrondown_5.svg"
                className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] my-[1px] object-contain w-[auto] xl:h-[17px]"
                alt="chevrondown"
              />
            </Row>
          </Column>
        </Column>
        <Grid className="2xl:gap-[24px] 2xl:ml-[24px] 3xl:gap-[28px] 3xl:ml-[28px] gap-[32px] grid grid-cols-2 lg:gap-[18px] lg:ml-[18px] ml-[32px] w-[84%] xl:gap-[21px] xl:ml-[21px]">
          <Row className="bg-gray_100 items-center justify-center w-[100%]">
            <Image
              src="img_sweater_4.svg"
              className="2xl:h-[121px] 2xl:ml-[114px] 2xl:my-[32px] 3xl:h-[145px] 3xl:ml-[137px] 3xl:my-[38px] h-[160px] lg:h-[94px] lg:ml-[89px] lg:my-[25px] ml-[153px] my-[43px] object-contain w-[auto] xl:h-[107px] xl:ml-[102px] xl:my-[28px]"
              alt="Sweater"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[114px] 2xl:my-[51px] 3xl:ml-[14px] 3xl:mr-[136px] 3xl:my-[62px] font-poppins justify-start lg:ml-[9px] lg:mr-[88px] lg:my-[40px] ml-[16px] mr-[152px] my-[69px] w-[28%] xl:ml-[10px] xl:mr-[101px] xl:my-[46px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-bold lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[6px] xl:text-fs24">{`Jacket`}</Text>
              <Text className="2xl:text-fs27 3xl:text-fs32 font-normal lg:text-fs21 self-stretch text-fs36 text-gray_500 text-left xl:text-fs24">{`Collection`}</Text>
            </Column>
          </Row>
          <Row className="bg-gray_100 items-center justify-center w-[100%]">
            <Image
              src="img_tshirt_4.svg"
              className="2xl:h-[121px] 2xl:ml-[114px] 2xl:my-[32px] 3xl:h-[145px] 3xl:ml-[136px] 3xl:my-[38px] h-[160px] lg:h-[94px] lg:ml-[88px] lg:my-[25px] ml-[152px] my-[43px] object-contain w-[auto] xl:h-[107px] xl:ml-[101px] xl:my-[28px]"
              alt="Tshirt"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[114px] 2xl:my-[51px] 3xl:ml-[14px] 3xl:mr-[136px] 3xl:my-[62px] font-poppins justify-start lg:ml-[9px] lg:mr-[88px] lg:my-[40px] ml-[16px] mr-[152px] my-[69px] w-[28%] xl:ml-[10px] xl:mr-[101px] xl:my-[46px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-bold lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[6px] xl:text-fs24">{`Shirt`}</Text>
              <Text className="2xl:text-fs27 3xl:text-fs32 font-normal lg:text-fs21 self-stretch text-fs36 text-gray_500 text-left xl:text-fs24">{`Collection`}</Text>
            </Column>
          </Row>
          <Row className="bg-gray_100 items-center justify-center w-[100%]">
            <Image
              src="img_pants_4.svg"
              className="2xl:h-[121px] 2xl:ml-[114px] 2xl:my-[32px] 3xl:h-[145px] 3xl:ml-[136px] 3xl:my-[38px] h-[160px] lg:h-[94px] lg:ml-[88px] lg:my-[25px] ml-[152px] my-[43px] object-contain w-[auto] xl:h-[107px] xl:ml-[101px] xl:my-[28px]"
              alt="Pants"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[113px] 2xl:my-[51px] 3xl:ml-[14px] 3xl:mr-[135px] 3xl:my-[62px] font-poppins justify-start lg:ml-[9px] lg:mr-[88px] lg:my-[40px] ml-[16px] mr-[151px] my-[69px] w-[28%] xl:ml-[10px] xl:mr-[100px] xl:my-[46px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-bold lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[6px] xl:text-fs24">{`Pants`}</Text>
              <Text className="2xl:text-fs27 3xl:text-fs32 font-normal lg:text-fs21 self-stretch text-fs36 text-gray_500 text-left xl:text-fs24">{`Collection`}</Text>
            </Column>
          </Row>
          <Row className="bg-gray_100 items-center justify-center w-[100%]">
            <Image
              src="img_skirt_2.svg"
              className="2xl:h-[121px] 2xl:ml-[114px] 2xl:my-[32px] 3xl:h-[145px] 3xl:ml-[136px] 3xl:my-[38px] h-[160px] lg:h-[94px] lg:ml-[88px] lg:my-[25px] ml-[152px] my-[43px] object-contain w-[auto] xl:h-[107px] xl:ml-[101px] xl:my-[28px]"
              alt="Skirt"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[114px] 2xl:my-[51px] 3xl:ml-[14px] 3xl:mr-[136px] 3xl:my-[62px] font-poppins justify-start lg:ml-[9px] lg:mr-[88px] lg:my-[40px] ml-[16px] mr-[152px] my-[69px] w-[28%] xl:ml-[10px] xl:mr-[101px] xl:my-[46px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-bold lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[6px] xl:text-fs24">{`Skirt`}</Text>
              <Text className="2xl:text-fs27 3xl:text-fs32 font-normal lg:text-fs21 self-stretch text-fs36 text-gray_500 text-left xl:text-fs24">{`Collection`}</Text>
            </Column>
          </Row>
          <Column className="bg-gray_100 items-center justify-start w-[100%]">
            <Row className="2xl:ml-[114px] 2xl:mr-[113px] 2xl:my-[32px] 3xl:ml-[136px] 3xl:mr-[135px] 3xl:my-[38px] bg-gray_100 items-center justify-center lg:mx-[88px] lg:my-[25px] ml-[152px] mr-[151px] my-[43px] w-[55%] xl:ml-[101px] xl:mr-[100px] xl:my-[28px]">
              <Image
                src="img_dress_4.svg"
                className="2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] object-contain w-[auto] xl:h-[107px]"
                alt="Dress"
              />
              <Column className="2xl:ml-[12px] 2xl:my-[19px] 3xl:ml-[14px] 3xl:my-[23px] font-poppins justify-start lg:ml-[9px] lg:my-[15px] ml-[16px] my-[26px] w-[51%] xl:ml-[10px] xl:my-[17px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-bold lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[6px] xl:text-fs24">{`Dress`}</Text>
                <Text className="2xl:text-fs27 3xl:text-fs32 font-normal lg:text-fs21 self-stretch text-fs36 text-gray_500 text-left xl:text-fs24">{`Collection`}</Text>
              </Column>
            </Row>
          </Column>
          <Column className="bg-gray_100 items-center justify-start w-[100%]">
            <Row className="2xl:ml-[105px] 2xl:mr-[104px] 2xl:my-[32px] 3xl:ml-[126px] 3xl:mr-[125px] 3xl:my-[38px] bg-gray_100 items-center justify-center lg:mx-[81px] lg:my-[25px] ml-[140px] mr-[139px] my-[43px] w-[58%] xl:ml-[93px] xl:mr-[92px] xl:my-[28px]">
              <Image
                src="img_bra_1.svg"
                className="2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] object-contain w-[auto] xl:h-[107px]"
                alt="Bra"
              />
              <Column className="2xl:ml-[12px] 2xl:my-[19px] 3xl:ml-[14px] 3xl:my-[23px] font-poppins justify-start lg:ml-[9px] lg:my-[15px] ml-[16px] my-[26px] w-[54%] xl:ml-[10px] xl:my-[17px]">
                <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 self-stretch text-fs36 text-gray_800 text-left xl:text-fs24">{`Underwear`}</Text>
                <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-normal lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_500 text-left xl:mr-[6px] xl:text-fs24">{`Collection`}</Text>
              </Column>
            </Row>
          </Column>
          <Column className="bg-gray_100 items-center justify-start w-[100%]">
            <Row className="2xl:ml-[114px] 2xl:mr-[113px] 2xl:my-[32px] 3xl:ml-[136px] 3xl:mr-[135px] 3xl:my-[38px] bg-gray_100 items-center justify-center lg:mx-[88px] lg:my-[25px] ml-[152px] mr-[151px] my-[43px] w-[55%] xl:ml-[101px] xl:mr-[100px] xl:my-[28px]">
              <Image
                src="img_boot_4.svg"
                className="2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] object-contain w-[auto] xl:h-[107px]"
                alt="Boot"
              />
              <Column className="2xl:ml-[12px] 2xl:my-[19px] 3xl:ml-[14px] 3xl:my-[23px] font-poppins justify-start lg:ml-[9px] lg:my-[15px] ml-[16px] my-[26px] w-[51%] xl:ml-[10px] xl:my-[17px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-bold lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[6px] xl:text-fs24">{`Shoes`}</Text>
                <Text className="2xl:text-fs27 3xl:text-fs32 font-normal lg:text-fs21 self-stretch text-fs36 text-gray_500 text-left xl:text-fs24">{`Collection`}</Text>
              </Column>
            </Row>
          </Column>
          <Column className="bg-gray_100 items-center justify-start w-[100%]">
            <Row className="2xl:my-[32px] 3xl:my-[38px] bg-gray_100 items-center justify-center lg:my-[25px] mx-[auto] my-[43px] w-[58%] xl:my-[28px]">
              <Image
                src="img_belt_4.svg"
                className="2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] object-contain w-[auto] xl:h-[107px]"
                alt="Belt"
              />
              <Column className="2xl:ml-[12px] 2xl:my-[19px] 3xl:ml-[14px] 3xl:my-[23px] font-poppins justify-start lg:ml-[9px] lg:my-[15px] ml-[16px] my-[26px] w-[54%] xl:ml-[10px] xl:my-[17px]">
                <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 self-stretch text-fs36 text-gray_800 text-left xl:text-fs24">{`Accesories`}</Text>
                <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-normal lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_500 text-left xl:mr-[6px] xl:text-fs24">{`Collection`}</Text>
              </Column>
            </Row>
          </Column>
        </Grid>
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
        className="2xl:mt-[63px] 3xl:mt-[76px] lg:mt-[49px] mt-[85px] mx-[auto] self-stretch w-[100%] xl:mt-[56px]"
      />
    </Column>
  );
};

export default CategorieswithSidebarPage;
