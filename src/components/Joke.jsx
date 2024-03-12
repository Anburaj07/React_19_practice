import React, { use, Suspense } from "react";

const fetchData = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  return res.json();
};

const Joke = () => {
  return (
    <Suspense fallback={<h2>Loading....</h2>}>
      <JokeItem />
    </Suspense>
  );
};

export default Joke;

const JokeItem = () => {
  const joke = use(fetchData());

  return (
    <div>
      <h2>{joke.value}</h2>
    </div>
  );
};
