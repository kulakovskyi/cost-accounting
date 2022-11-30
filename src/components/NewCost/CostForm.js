import React, {useState} from "react";
import './CostForm.css'

function CostForm(props){
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    //второй подход
    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // })
    function nameChangeHandler(event){
        let value = event.target.value;
        setInputName(value);
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // })

        // // делаем так, что бы не было устаревшей информации из ф-й(самая послденяя версия состояния)
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         name: event.target.value
        //     }
        // })
    }
    function amountChangeHandler(event){
        let value = event.target.value;
        setInputAmount(value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         amount: event.target.value
        //     }
        // })
    }
    function dateChangeHandler(event){
        let value = event.target.value;
        setInputDate(value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         date: event.target.value
        //     }
        // })
    }
    function submitHandler(event){
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        }

        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }


    return(
        <form onSubmit={submitHandler}>
            <div className={'new-cost__controls'}>
                <div className={'new-cost__control'}>
                    <label>Название</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler}/>
                </div>
                <div className={'new-cost__control'}>
                    <label>Сумма</label>
                    <input type="number" value={inputAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className={'new-cost__control'}>
                    <label>Дата</label>
                    <input type="date" value={inputDate} min='2019-01-01' onChange={dateChangeHandler}/>
                </div>
                <div className={'new-cost__actions'}>
                    <button type={"submit"}>Добавить расход</button>
                    <button type={'button'} onClick={props.cancelButton}>Отмена</button>
                </div>
            </div>
        </form>
    );
}

export default CostForm;