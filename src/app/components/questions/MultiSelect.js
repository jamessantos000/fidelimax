"use client";
import PropTypes from "prop-types";
import Text from "../Text";
import Grid from "../Grid";
import Flex from "../Flex";

const AskMultiSelect = ({
  ask,
  options,
  reply,
  mandatory,
  error,
  onChange,
}) => {
  const handleReplyChange = (index) => {
    const updatedReply = Array.isArray(reply) ? [...reply] : [];
    const indexInArray = updatedReply.indexOf(index);
    if (indexInArray !== -1) {
      updatedReply.splice(indexInArray, 1);
    } else {
      updatedReply.push(index);
    }
    onChange(updatedReply);
  };

  return (
    <Grid additionalClass="px-8 gap-4" additionalStyles={{ color: "black" }}>
      <Grid additionalClass="gap-2.5">
        <Text fontWeight={500} fontSize={16} additionalClass="text-d-blue">
          {ask}
        </Text>
      </Grid>
      <Flex additionalClass="text-center flex-wrap gap-2">
        {options.map((option, index) =>
          Array.isArray(reply) && reply.includes(option.value) ? (
            <Grid
              key={option.value}
              additionalStyles={{
                border: "1px solid #CCD0D6",
              }}
              additionalClass="rounded-500 py-2 px-4 bg-slate-700"
              onChange={(e) => handleReplyChange(index)}
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
              onChange={(e) => handleReplyChange(index)}
            >
              <Text
                fontWeight={500}
                fontSize={14}
                additionalClass="text-d-blue-secondary"
              >
                {option.description}
              </Text>
            </Grid>
          )
        )}
      </Flex>
      {mandatory && error && (
        <Text additionalClass="text-red-500" fontSize={12}>
          Obrigatório
        </Text>
      )}
    </Grid>
  );
};

AskMultiSelect.propTypes = {
  ask: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  reply: PropTypes.array,
  mandatory: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AskMultiSelect;
