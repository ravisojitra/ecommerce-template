import { Row } from "components/Row";
import { Column } from "components/Column";
import { Text } from "components/Text";

export const Checkout03 = (props) => {
  return (
    <Row className={`  ${props?.className} `}>
      <Column className="border-2 border-colors3 border-solid items-center justify-start rounded-radius28 w-[26%]">
        <Text className="2xl:mx-[15px] 2xl:my-[7px] 2xl:text-fs18 3xl:mx-[18px] 3xl:my-[9px] 3xl:text-fs21 font-medium font-poppins lg:ml-[12px] lg:mr-[11px] lg:my-[5px] lg:text-fs14 max-w-[15px] ml-[21px] mr-[20px] my-[10px] text-colors3 text-fs24 text-left xl:ml-[14px] xl:mr-[13px] xl:my-[6px] xl:text-fs16">
          {props?.children}
        </Text>
      </Column>
      <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium font-poppins lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-colors3 text-fs24 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">
        {props?.children1}
      </Text>
    </Row>
  );
};

Checkout03.defaultProps = {
  children: "",
  children1: "",
};
