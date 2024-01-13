"use client";
import React, { useEffect, useState } from "react";

import AskMultiSelect from "./questions/MultiSelect";
import AskRadioOneToTen from "./questions/RadioOneToTen";
import AskRadioSelect from "./questions/RadioSelect";
import AskSelect from "./questions/Select";
import AskStar from "./questions/Star";
import AskText from "./questions/Text";
import Div from "./Div";
import Flex from "./Flex";
import Text from "./Text";
import Button from "./Button";

import useQuestions from "../hook/useApi";
import Alert from "./Alert";
import Spin from "./Spin";

const QuestionRendering = ({ data }) => {
  const { result, isLoading, sendForm, sendError, sendSuccess } =
    useQuestions();
  const [typeAlert, setTypeAlert] = useState(null);
  const [msgAlert, setMsgAlert] = useState(null);

  useEffect(() => {
    if (result?.error) {
      setTypeAlert("error");
      setMsgAlert(result?.error);
    } else if (result) {
      setTypeAlert("success");
      setMsgAlert("Formulário enviado com sucesso!");
    }
  }, [result]);

  const respostasIniciais = data.itens.reduce((acc, pergunta, index) => {
    acc[`${pergunta.content}-${index}`] = pergunta.answerValue || null;
    return acc;
  }, {});

  const [respostas, setRespostas] = useState(respostasIniciais);

  const handleRespostaChange = (perguntaId, novaResposta) => {
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [perguntaId]: novaResposta,
    }));
  };

  const areMandatoryQuestionsAnswered = () => {
    return data.itens.every((pergunta, index) => {
      const perguntaId = `${pergunta.content}-${index}`;
      const isAnswered =
        respostas[perguntaId] !== null && respostas[perguntaId] !== "";

      if (
        pergunta.mandatory &&
        (!respostas[perguntaId] || respostas[perguntaId].length === 0)
      ) {
        return false;
      }

      return (
        !pergunta.mandatory || isAnswered || pergunta.answerValue !== undefined
      );
    });
  };

  const submitForm = (respostas) => {
    if (areMandatoryQuestionsAnswered()) {
      sendForm(respostas);
    } else {
      setTypeAlert("error");
      setMsgAlert("Faltam perguntas para responder");
    }
  };

  const submitError = () => {
    sendError();
  };

  const submitSuccess = () => {
    sendSuccess();
  };

  const closeAlert = () => {
    setTypeAlert(null);
    setMsgAlert(null);
  };

  return (
    <Div additionalClass="grid gap-10">
      {data.itens.map((pergunta, index) => {
        const perguntaId = `${pergunta.content}-${index}`;
        const mandatory = `${pergunta.mandatory}`;
        const isAnswered =
          respostas[perguntaId] !== null && respostas[perguntaId] !== "";
        const error =
          mandatory &&
          (!isAnswered ||
            (Array.isArray(respostas[perguntaId]) &&
              respostas[perguntaId].length === 0));

        switch (pergunta.typeQuestion) {
          case 1:
            return (
              <AskStar
                key={perguntaId}
                ask={pergunta.content}
                reply={parseInt(respostas[perguntaId])}
                mandatory={pergunta.mandatory}
                error={error}
                onChange={(novaResposta) => {
                  handleRespostaChange(perguntaId, novaResposta);
                }}
              />
            );
          case 2:
            return (
              <AskRadioOneToTen
                key={perguntaId}
                ask={pergunta.content}
                reply={parseInt(respostas[perguntaId])}
                mandatory={pergunta.mandatory}
                error={error}
                onChange={(novaResposta) => {
                  handleRespostaChange(perguntaId, novaResposta);
                }}
              />
            );
          case 3:
            return (
              <AskText
                key={perguntaId}
                ask={pergunta.content}
                reply={respostas[perguntaId]}
                mandatory={pergunta.mandatory}
                error={error}
                onChange={(novaResposta) => {
                  handleRespostaChange(perguntaId, novaResposta);
                }}
              />
            );
          case 4:
            return (
              <AskSelect
                key={perguntaId}
                ask={pergunta.content}
                reply={respostas[perguntaId]}
                option={pergunta.itens}
                mandatory={pergunta.mandatory}
                error={error}
                onChange={(novaResposta) => {
                  handleRespostaChange(perguntaId, novaResposta);
                }}
              />
            );
          case 5:
            return (
              <AskRadioSelect
                key={perguntaId}
                ask={pergunta.content}
                reply={parseInt(respostas[perguntaId])}
                mandatory={pergunta.mandatory}
                error={error}
                onChange={(novaResposta) => {
                  handleRespostaChange(perguntaId, novaResposta);
                }}
              />
            );
          case 6:
            return (
              <AskMultiSelect
                key={perguntaId}
                ask={pergunta.content}
                options={pergunta.itens}
                reply={respostas[perguntaId]}
                mandatory={pergunta.mandatory}
                error={error}
                onChange={(novaResposta) => {
                  handleRespostaChange(perguntaId, novaResposta);
                }}
              />
            );
          default:
            return null;
        }
      })}

      {!isLoading ? (
        <Div additionalClass="px-8">
          {typeAlert && (
            <Alert
              type={typeAlert}
              message={msgAlert}
              closeAlert={closeAlert}
            />
          )}

          <Div>
            <Button
              additionalClass="text-black border-solid border-2 rounded-lg w-full h-12 bg-indigo-950"
              onClick={() => submitForm(respostas)}
            >
              <Text additionalClass="text-white">Enviar Fake Post</Text>
            </Button>
          </Div>

          <Flex additionalClass="justify-between">
            <Button
              additionalClass="text-black border-solid border-2 rounded-lg w-full h-12 bg-red-800"
              onClick={() => submitError()}
            >
              <Text additionalClass="text-white">Enviar Erro</Text>
            </Button>

            <Button
              additionalClass="text-black border-solid border-2 rounded-lg w-full h-12 bg-green-800"
              onClick={() => submitSuccess()}
            >
              <Text additionalClass="text-white">Enviar Sucesso</Text>
            </Button>
          </Flex>
        </Div>
      ) : (
        <Div additionalClass="h-5 w-full h-full flex justify-center text-center">
          <Spin />
        </Div>
      )}
    </Div>
  );
};

export default QuestionRendering;
