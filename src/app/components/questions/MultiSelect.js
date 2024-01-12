"use client";
import PropTypes from "prop-types";
import Text from "../Text";
import Grid from "../Grid";
import Flex from "../Flex";

const AskMultiSelect = ({ ask, options, reply, onChange }) => {
  const handleReplyChange = (reply) => {
    onChange(reply.target.innerText);
  };

  return (
    <Grid additionalClass="px-8 gap-4" additionalStyles={{ color: "black" }}>
      <Grid additionalClass="gap-2.5">
        <Text fontWeight={500} fontSize={16} additionalClass="text-d-blue">
          {ask}
        </Text>
      </Grid>
      <Flex additionalClass="text-center flex-wrap gap-2">
        {options.map((option) =>
          Array.isArray(reply) && reply.includes(option.value) ? (
            <Grid
              key={option.value}
              additionalStyles={{
                border: "1px solid #CCD0D6",
              }}
              additionalClass="rounded-500 py-2 px-4 bg-slate-700"
              onChange={handleReplyChange}
            >
              <Text fontWeight={500} fontSize={14} additionalClass="text-white">
                {option.description}
              </Text>
            </Grid>
          ) : (
            <Grid
              key={option.value}
              additionalStyles={{
                border: "1px solid #CCD0D6",
              }}
              additionalClass="rounded-500 py-2 px-4"
              onChange={handleReplyChange}
            >
              <Text fontWeight={500} fontSize={14} additionalClass="text-d-blue-secondary">
                {option.description}
              </Text>
            </Grid>
          )
        )}
      </Flex>
    </Grid>
  );
};

AskMultiSelect.propTypes = {
  ask: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  reply: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default AskMultiSelect;
