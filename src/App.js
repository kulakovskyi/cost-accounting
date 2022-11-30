import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2021, 2, 12),
        description: 'Холодильник',
        amount: 999.9
    },
    {
        id: 'c2',
        date: new Date(2021, 11, 25),
        description: 'MacBook',
        amount: 1234.65
    },
    {
        id: 'c3',
        date: new Date(2021, 4, 1),
        description: 'AirPods',
        amount: 76.97
    },
];

function App() {

    const [costs, setCosts] = useState(INITIAL_COSTS);

    function addCostHandler(costs) {
        setCosts(prevCosts => {
            return [costs, ...prevCosts]
        });
    }

    return (
        <div>
            <NewCost onAdCost={addCostHandler}></NewCost>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
