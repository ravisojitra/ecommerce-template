import { Column } from "components/Column";
import { CheckBox } from "components/CheckBox";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";

export const CategorieswithSidebarlist = (props) => {
  return (
    <Column className={`  ${props?.className} `}>
      <CheckBox
        className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal font-poppins lg:mr-[5px] lg:text-fs10 mr-[10px] text-colors2 text-fs18 text-left w-[67%] xl:mr-[6px] xl:text-fs12"
        inputClassName="border-bw3 border-colors3 border-solid mr-[5px]"
        label={props?.label}
        name={props?.name}
      ></CheckBox>
      <Row className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] items-center justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[87%] xl:mr-[6px] xl:mt-[16px]">
        <Image
          className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] my-[1px] object-contain w-[auto] xl:h-[17px]"
          src={props?.src}
          alt={props?.alt}
        />
        <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-normal font-poppins lg:ml-[9px] lg:text-fs10 ml-[16px] text-colors text-fs18 text-left xl:ml-[10px] xl:text-fs12">
          {props?.children}
        </Text>
      </Row>
      <CheckBox
        className="2xl:mr-[7px] 2xl:mt-[18px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[21px] 3xl:text-fs16 font-normal font-poppins lg:mr-[5px] lg:mt-[14px] lg:text-fs10 mr-[10px] mt-[24px] text-colors2 text-fs18 text-left w-[90%] xl:mr-[6px] xl:mt-[16px] xl:text-fs12"
        inputClassName="border-bw3 border-colors3 border-solid mr-[5px]"
        label={props?.label1}
        name={props?.name1}
      ></CheckBox>
      <CheckBox
        className="2xl:mr-[6px] 2xl:mt-[18px] 2xl:text-fs13 3xl:mr-[7px] 3xl:mt-[21px] 3xl:text-fs16 font-normal font-poppins lg:mr-[4px] lg:mt-[14px] lg:text-fs10 mr-[8px] mt-[24px] text-colors2 text-fs18 text-left w-[96%] xl:mr-[5px] xl:mt-[16px] xl:text-fs12"
        inputClassName="border-bw3 border-colors3 border-solid mr-[5px]"
        label={props?.label2}
        name={props?.name2}
      ></CheckBox>
      <Column className="2xl:mt-[18px] 3xl:mt-[21px] items-center lg:mt-[14px] mt-[24px] mx-[auto] self-stretch w-[100%] xl:mt-[16px]">
        <CheckBox
          className="2xl:text-fs13 3xl:text-fs16 font-normal font-poppins lg:text-fs10 mx-[auto] self-stretch text-colors2 text-fs18 text-left w-[100%] xl:text-fs12"
          inputClassName="border-bw3 border-colors3 border-solid mr-[5px]"
          label={props?.label3}
          name={props?.name3}
        ></CheckBox>
      </Column>
    </Column>
  );
};

CategorieswithSidebarlist.defaultProps = {
  label: "",
  name: "Group44",
  src: "img_checkedbox_1.svg",
  alt: "Checkedbox",
  children: "",
  label1: "",
  name1: "Group45",
  label2: "",
  name2: "Group46",
  label3: "",
  name3: "Group43",
};
