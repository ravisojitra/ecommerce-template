import { Row } from "components/Row";
import { Text } from "components/Text";

export const Completedbreadcrumb = (props) => {
  return (
    <Row className={`  ${props?.className} `}>
      <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
        <Text className="2xl:text-fs13 3xl:text-fs16 font-medium font-poppins lg:text-fs10 text-colors2 text-fs18 text-left xl:text-fs12">
          {props?.children}
        </Text>
        <Text className="2xl:text-fs13 3xl:text-fs16 font-medium font-poppins lg:text-fs10 text-colors3 text-fs18 text-left xl:text-fs12">
          {props?.children1}
        </Text>
        <Text className="2xl:text-fs13 3xl:text-fs16 font-medium font-poppins lg:text-fs10 text-colors2 text-fs18 text-left xl:text-fs12">
          {props?.children2}
        </Text>
        <Text className="2xl:text-fs13 3xl:text-fs16 font-medium font-poppins lg:text-fs10 text-colors3 text-fs18 text-left xl:text-fs12">
          {props?.children3}
        </Text>
        <Text className="2xl:text-fs13 3xl:text-fs16 font-medium font-poppins lg:text-fs10 text-colors text-fs18 text-left xl:text-fs12">
          {props?.children4}
        </Text>
      </Row>
    </Row>
  );
};

Completedbreadcrumb.defaultProps = {
  children: "",
  children1: "",
  children2: "",
  children3: "",
  children4: "",
};
