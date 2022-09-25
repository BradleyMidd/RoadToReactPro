import './App.css';

function App() {
  const title = "Hello World",
        list = ["Apple", "Pear", "Lemon"],
        items = list.map((item) => 
          <li key={item}>{item}</li>
        ),
        person = {name: "Bradley", age: 21, born: "The Netherlands"};
  function intro({name, age, born}){
          return `My name is ${name} and i am ${age} years old from ${born}`
      }

  return (
    <div>
      <h1>{title}</h1>
      <p>This is my shopping list: {list.join(' ')}</p>
      <p>This is who i am: {intro(person)}</p>
      <ul>{items}</ul>
    </div>
  );
}

export default App;
