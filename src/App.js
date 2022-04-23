import Expenses from "./components/Expenses";


function App() {
    const expenses=[
        { id:"e1", date:new Date(2021,2,28), title:"Car Insurance", amount:269.74},
        { id:"e2", date:new Date(2021,4,18), title:"Stationary", amount:80},
        { id:"e3", date:new Date(2021,3,2), title:"Book", amount:100},
        { id:"e4", date:new Date(2021,1,25), title:"T-shirt", amount:20},
        { id:"e5", date:new Date(2022,1,25), title:"Desk", amount:80},

    ]
  return (
    <div >
        <h2>Let's Get Started</h2>
        <Expenses expenses = {expenses} />
    </div>
  );
}

export default App;
