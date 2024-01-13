"use client";
import { useLayoutEffect } from "react";
import ConstrainedContainer from "./components/ConstrainedContainer";
import Flex from "./components/Flex";
import Header from "./components/Header";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import Avatar from "./components/Avatar";
import Text from "./components/Text";
import Grid from "./components/Grid";
import QuestionRendering from "./components/QuestionRendering";
import useQuestions from "./hook/useApi";
import Skeleton from "./components/Skeleton";
import Alert from "./components/Alert";

export default function Home() {
  const { result: questions, erro, fetchData } = useQuestions();

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <ConstrainedContainer>
      <Header bgColor="#19202D">
        <Flex additionalClass="justify-between items-center">
          <Flex additionalClass="gap-4 items-center">
            <HiMenuAlt1 className="sm:text-base md:text-2xl" />
            <Image src="/logo.svg" alt="Logo" height={20} width={123} />
          </Flex>

          <Flex additionalClass="gap-4 items-center">
            <Avatar>F</Avatar>
            <Text color="#F2F4F8" fontSize={12} fontWeight={600}>
              Fábio C Pinto
            </Text>
            <FaAngleDown className="sm:text-base md:text-2xl" />
          </Flex>
        </Flex>

        <Flex additionalClass="ml-6 md:ml-8 absolute top-20">
          <Text
            color="#ACB1BA"
            additionalClass="text-xs"
            fontWeight={500}
            fontSize={12}
          >
            Pesquisa de Satisfação
          </Text>
        </Flex>

        <Text
          color="#FFF"
          fontWeight={600}
          additionalClass="absolute top-32 left-1/2 w-11/12 md:w-2/5 transform -translate-x-1/2 -translate-y-1/2 text-lg md:text-4xl"
        >
          Pesquisa de Satisfação
        </Text>
      </Header>

      <Grid additionalClass="bg-white relative rounded-2xl -mt-40 md:-mt-25 w-11/12 md:w-2/5 left-1/2 transform -translate-x-1/2 py-8 mb-8 gap-10">
        {questions !== null ? (
          <QuestionRendering data={questions} />
        ) : (
          <Skeleton item={3} />
        )}

        {erro && <Alert type="error" message="Algo de errado aconteceu, tente novamente." />}
      </Grid>
    </ConstrainedContainer>
  );
}
