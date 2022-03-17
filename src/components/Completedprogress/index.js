import { Row } from "components/Row";
import { Column } from "components/Column";
import { Text } from "components/Text";
import { Line } from "components/Line";

export const Completedprogress = (props) => {
  return (
    <Row className={`  ${props?.className} `}>
      <Row className="items-center justify-start w-[16%]">
        <Column className="border-2 border-colors border-solid items-center justify-start rounded-radius28 w-[22%]">
          <Text className="2xl:ml-[18px] 2xl:mr-[17px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:mr-[20px] 3xl:my-[9px] 3xl:text-fs21 font-medium font-poppins lg:ml-[14px] lg:mr-[13px] lg:my-[5px] lg:text-fs14 ml-[24px] mr-[23px] my-[10px] text-colors text-fs24 text-left xl:ml-[16px] xl:mr-[15px] xl:my-[6px] xl:text-fs16">
            {props?.children}
          </Text>
        </Column>
        <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium font-poppins lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-colors text-fs24 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">
          {props?.children1}
        </Text>
      </Row>
      <Row className="2xl:ml-[15px] 3xl:ml-[18px] items-center justify-center lg:ml-[12px] ml-[21px] w-[68%] xl:ml-[14px]">
        <Line className="2xl:mb-[19px] 2xl:mt-[21px] 3xl:mb-[23px] 3xl:mt-[25px] bg-colors h-[2px] lg:mb-[15px] lg:mt-[16px] mb-[26px] mt-[28px] w-[36%] xl:mb-[17px] xl:mt-[18px]" />
        <Row className="2xl:ml-[42px] 3xl:ml-[51px] items-center justify-center lg:ml-[33px] ml-[57px] w-[19%] xl:ml-[38px]">
          <Column className="border-2 border-colors border-solid items-center justify-start rounded-radius28 w-[29%]">
            <Text className="2xl:my-[7px] 2xl:text-fs18 3xl:my-[9px] 3xl:text-fs21 font-medium font-poppins lg:my-[5px] lg:text-fs14 mx-[auto] my-[10px] text-colors text-fs24 text-left xl:my-[6px] xl:text-fs16">
              {props?.children2}
            </Text>
          </Column>
          <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium font-poppins lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-colors text-fs24 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">
            {props?.children3}
          </Text>
        </Row>
        <Line className="2xl:mb-[19px] 2xl:ml-[42px] 2xl:mt-[21px] 3xl:mb-[23px] 3xl:ml-[50px] 3xl:mt-[25px] bg-colors h-[2px] lg:mb-[15px] lg:ml-[32px] lg:mt-[16px] mb-[26px] ml-[56px] mt-[28px] w-[36%] xl:mb-[17px] xl:ml-[37px] xl:mt-[18px]" />
      </Row>
      <Row className="2xl:ml-[24px] 3xl:ml-[28px] items-center justify-start lg:ml-[18px] ml-[32px] w-[14%] xl:ml-[21px]">
        <Column className="border-2 border-colors border-solid items-center justify-start rounded-radius28 w-[26%]">
          <Text className="2xl:mx-[15px] 2xl:my-[7px] 2xl:text-fs18 3xl:mx-[18px] 3xl:my-[9px] 3xl:text-fs21 font-medium font-poppins lg:ml-[12px] lg:mr-[11px] lg:my-[5px] lg:text-fs14 ml-[21px] mr-[20px] my-[10px] text-colors text-fs24 text-left xl:ml-[14px] xl:mr-[13px] xl:my-[6px] xl:text-fs16">
            {props?.children4}
          </Text>
        </Column>
        <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium font-poppins lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-colors text-fs24 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">
          {props?.children5}
        </Text>
      </Row>
    </Row>
  );
};

Completedprogress.defaultProps = {
  children: "",
  children1: "",
  children2: "",
  children3: "",
  children4: "",
  children5: "",
};
