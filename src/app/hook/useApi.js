import { useState } from "react";

export default function useQuestions() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json"
      );

      if (response.status === 200) {
        const data = await response.json();
        setResult(data);
      } else {
        setError({});
        throw new Error("Erro na requisição");
      }
    } catch (error) {
      setError({});
      console.error("Erro:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { result, isLoading, erro, fetchData };
}
