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

  const sendForm = async (formData) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
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

  const sendError = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json"
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

  const sendSuccess = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json"
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

  return {
    result,
    isLoading,
    erro,
    fetchData,
    sendForm,
    sendError,
    sendSuccess,
  };
}
