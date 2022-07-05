const Counter = () => {

    let quantity = 10;

    function upQuantity () {

        quantity ++;
        document.getElementById('counterBox').innerHTML = quantity;

    } 


    return (
        <div>
            <h1 id="counterBox">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </div>

    )

}

export default Counter