import './Costs.css'
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, {useState} from "react";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";


function Costs(props) {
    const [selectedYear, setSelectedYear] = useState(2021);

    function yearChangeHandler(year) {
        setSelectedYear(year);
    }

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear.toString();
    })

    return (
        <div>
            <Card className={'costs'}>
                <CostsFilter year={selectedYear}
                             onChangeYear={yearChangeHandler}></CostsFilter>
                <CostDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts} />
            </Card>
        </div>
    );
}

export default Costs;