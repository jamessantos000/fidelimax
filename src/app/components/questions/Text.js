"use client";
import PropTypes from "prop-types";
import Text from "../Text";
import Grid from "../Grid";
import Flex from "../Flex";
import TextArea from "../TextArea";

const AskText = ({ ask, reply, mandatory, error, onChange }) => {
  const handleReplyChange = (reply) => {
    onChange(reply.target.value);
  };

  return (
    <Grid additionalClass="px-8 gap-4">
      <Grid additionalClass="gap-2.5">
        <Text fontWeight={500} fontSize={16} additionalClass="text-d-blue">
          {ask}
        </Text>
      </Grid>
      <Flex additionalClass="justify-between text-center">
        <TextArea
          additionalClass="rounded-lg w-full h-28 p-4 text-d-blue-secondary"
          placeholder="Digite aqui..."
          value={reply}
          onChange={handleReplyChange}
        />
      </Flex>
      {mandatory && error && (
        <Text additionalClass="text-red-500" fontSize={12}>
          Obrigatório
        </Text>
      )}
    </Grid>
  );
};

AskText.propTypes = {
  ask: PropTypes.string.isRequired,
  reply: PropTypes.string,
  mandatory: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AskText;
