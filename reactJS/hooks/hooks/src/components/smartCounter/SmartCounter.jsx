import { useState, useEffect } from "react";

let mode =1;


const SmartCounter = () => {

    const [quantity, setQuantity] = useState(1);
    const [buttonLessState, setButtonLessState] = useState('lessNumber');
    const [modeLightDark, setmodeLightDark] = useState('wrapperCounter');


    function up () {

    setQuantity(quantity +1 );
    setButtonLessState('lessNumber');

}


function down () {

    if ( quantity < 2 ) {

        setQuantity(quantity -1 );
        setButtonLessState('lessNumberDesactive');
        

    } else {
        setQuantity(quantity -1 );

    }
}
        

function changeMode () {
    mode++;    

    if (mode % 2 === 0) {

        setmodeLightDark('wrapperCounterDark');
    } else {
        setmodeLightDark('wrapperCounter');
    }
}

useEffect(() => {

    console.log('Executa uma vez no início da renderização, setando o valor inicial do respectivo useState')

}, [modeLightDark]);


    return (

                <div className={modeLightDark}>
            <div className="counter">
                <div className={buttonLessState} onClick={down} >-</div>
                <div className="initialNumber">{quantity}</div>
                <div className="upNumber" onClick={up}>+</div>
                
            </div>
         
            <div>
                    <input type="checkbox" id="check" onChange={changeMode}></input>
                    <label htmlFor="check">Mode</label>
            </div>

            <div >
                <button id="cart" className="cart">R$ {quantity *2 }</button>
            </div>

         </div>

    )
    }

export default SmartCounter