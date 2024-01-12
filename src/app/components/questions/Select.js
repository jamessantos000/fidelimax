"use client";
import PropTypes from "prop-types";
import Text from "../Text";
import Grid from "../Grid";
import Flex from "../Flex";
import Select from "../Select";

const AskSelect = ({ ask, reply, option, onChange }) => {
  const handleReplyChange = (reply) => {
    onChange(reply.target.value);
  };

  return (
    <Grid additionalClass="px-8 gap-4 text-d-blue-secondary">
      <Grid additionalClass="gap-2.5">
        <Text fontWeight={600} fontSize={24} additionalClass="text-d-blue">
          {ask}
        </Text>
      </Grid>
      <Flex additionalClass="justify-between text-center">
        <Select
          value={reply}
          onChange={handleReplyChange}
          additionalClass="w-full h-14 rounded-lg p-4 bg-white"
          additionalStyles={{ border: "1px solid #ACB1BA" }}
          options={option}
        />
      </Flex>
    </Grid>
  );
};

AskSelect.propTypes = {
  ask: PropTypes.string.isRequired,
  reply: PropTypes.number,
  option: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default AskSelect;