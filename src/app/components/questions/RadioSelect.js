"use client";
import PropTypes from "prop-types";
import Text from "../Text";
import Grid from "../Grid";
import Flex from "../Flex";
import Radio from "../Radio";
import Label from "../Label";

const AskRadioSelect = ({ ask, reply, onChange }) => {
  const handleReplyChange = (selectedRating) => {
    onChange(selectedRating.target.value);
  };

  return (
    <Grid additionalClass="px-8 gap-4" additionalStyles={{ color: "black" }}>
      <Grid additionalClass="gap-2.5">
        <Text color="#19202D" fontWeight={500} fontSize={16}>
          {ask}
        </Text>
      </Grid>
      <Flex additionalClass="pz-check gap-4 text-center">
        <Radio
          id='YesOrNo-0'
          name="YesOrNo"
          value={0}
          checked={reply === 0}
          onChange={handleReplyChange}
        />
        <Label htmlFor='YesOrNo-0' additionalClass="gap-2 flex items-center">
          <Text fontWeight={500} fontSize={14} additionalClass="text-d-blue-secondary">Sim</Text>
        </Label>

        <Radio
          id='YesOrNo-1'
          name="YesOrNo"
          value={1}
          checked={reply === 1}
          onChange={handleReplyChange}
        />
        <Label htmlFor='YesOrNo-1' additionalClass="gap-2 flex items-center">
          <Text fontWeight={500} fontSize={14} additionalClass="text-d-blue-secondary">Não</Text>
        </Label>
      </Flex>
    </Grid>
  );
};

AskRadioSelect.propTypes = {
  ask: PropTypes.string.isRequired,
  reply: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default AskRadioSelect;
