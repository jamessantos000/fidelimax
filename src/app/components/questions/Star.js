"use client";
import PropTypes from "prop-types";
import Text from "../Text";
import Grid from "../Grid";
import Flex from "../Flex";
import StarIcon from "../Star";

const AskStar = ({ ask, reply, mandatory, error, onChange }) => {
  const maxReply = 5;

  const handleReplyChange = (reply) => {
    onChange(reply);
  };

  return (
    <Grid additionalClass="px-8 gap-4" additionalStyles={{ color: "black" }}>
      <Grid additionalClass="gap-2.5">
        <Text fontWeight={600} fontSize={24} additionalClass="text-d-blue">
          {ask}
        </Text>
        <Text
          fontWeight={500}
          fontSize={14}
          additionalClass="text-d-blue-secondary"
        >
          Descrição da segunda pergunta, para ajudar o entendimento do usuário.
        </Text>
      </Grid>
      <Flex additionalClass="text-center gap-4">
        {[...Array(maxReply)].map((_, index) => (
          <StarIcon
            key={index}
            star={index}
            fill={index + 1 <= reply ? "#FFAE00" : "#ACB1BA"}
            onChange={handleReplyChange}
          />
        ))}
      </Flex>
      {mandatory && error && (
        <Text additionalClass="text-red-500" fontSize={12}>
          Obrigatório
        </Text>
      )}
    </Grid>
  );
};

AskStar.propTypes = {
  ask: PropTypes.string.isRequired,
  reply: PropTypes.number,
  mandatory: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AskStar;
