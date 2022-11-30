import React, {useState} from "react";
import './NewCost.css'
import CostForm from "./CostForm";

function NewCost(props){

    const [isFormVisible, setIsFormVisible] = useState(false);

    function saveCostDataHandler(inputCostData) {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAdCost(costData);
        setIsFormVisible(false);
    }

    function inputCostDataHandler() {
        setIsFormVisible(true);
    }

    function cancelCostHandler (){
        setIsFormVisible(false);
    }
    
    return(
        <div className={'new-cost'}>
            { !isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
            { isFormVisible && <CostForm cancelButton={cancelCostHandler} onSaveCostData={saveCostDataHandler}></CostForm>}
        </div>
    );
}

export default NewCost;