import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Definitions from "./components/Definitions";
import "normalize.css";
import "./scss/index.scss";

function App() {
  const [word, setWord] = useState("");
  const [submitFetch, setSubmitFetch] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  // Este useEffect solo se ejecutará cuando submitFetch sea true y word no esté vacío
  useEffect(() => {
    if (submitFetch && word.trim() !== "") {
      async function fetchData() {
        try {
          const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
          if (!response.ok) {
            setError(true);
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
      setSubmitFetch(false);
    }
  }, [submitFetch]); // Se ejecuta cuando word o submitFetch cambian

  // Validación al enviar el formulario
  function validateForm(e) {
    e.preventDefault();

    if (word.trim() === "") {
      setData([]);
      setError(false);
      setTimeout(() => {
        setIsEmpty(false);
      }, 3000);
    } else {
      setSubmitFetch(true);
    }
  }

  function fillField(e) {
    setWord(e.target.value); // Actualizar el estado word con lo que el usuario ingresa
  }
  return (
    <>
      <Header
        validateForm={validateForm}
        word={word}
        fillField={fillField}
      />

      <main className='main main--container'>
        {<Definitions
          data={data}
          error={error}
        />}
      </main>

    </>
  );
}

export default App;
