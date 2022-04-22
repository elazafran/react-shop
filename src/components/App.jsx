import React from "react";
import "../styles/global.css";

const App = () => {
  const element = externalRef ? externalRef.current : null;;
  console.log("App.jsx is running");
  let a = 'www.google.com';
  if(a === 'www.google.com'){
    console.log('a is equal to www.google.com');
  }
  return (
    <div>
      <h1>Hola Mundo, Welcome.World</h1>
    </div>
  );
};
export default App;
