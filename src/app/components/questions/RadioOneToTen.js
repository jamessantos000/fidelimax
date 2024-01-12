"use client";
import PropTypes from "prop-types";
import Text from "../Text";
import Grid from "../Grid";
import Flex from "../Flex";
import Radio from "../Radio";
import Label from "../Label";
import Div from "../Div";

const AskRadioOneToTen = ({ ask, reply, onChange }) => {
  const maxReply = 10;

  const handleReplyChange = (reply) => {
    onChange(reply.target.value);
  };

  return (
    <Grid additionalClass="px-8 gap-4" additionalStyles={{ color: "black" }}>
      <Grid additionalClass="gap-2.5">
        <Text fontWeight={600} fontSize={24} additionalClass="text-d-blue">
          {ask}
        </Text>
        <Text fontWeight={500} fontSize={14} additionalClass="text-d-blue-secondary">
          Descrição da segunda pergunta, para ajudar o entendimento do usuário.
        </Text>
      </Grid>
      <Flex additionalClass="justify-between text-center">
        {[...Array(maxReply)].map((_, index) => (
          <Div additionalClass="pz-check" key={index + 1}>
            <Radio
              id={index + 1}
              name="OneToTen"
              checked={reply === index + 1}
              value={index + 1}
              onChange={handleReplyChange}
            />
            <Label htmlFor={index + 1} additionalClass="gap-2">
              <Text fontWeight={500} fontSize={14} additionalClass="text-d-blue-secondary">{index + 1}</Text>
            </Label>
          </Div>
        ))}
      </Flex>
    </Grid>
  );
};

AskRadioOneToTen.propTypes = {
  ask: PropTypes.string.isRequired,
  reply: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default AskRadioOneToTen;
