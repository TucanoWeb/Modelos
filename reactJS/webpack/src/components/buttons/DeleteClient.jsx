import React from "react";
import alertDeletClient from "../functions/scripts"

const deletButton = (nome) => (
     <button onClick={() =>alertDeletClient(nome)}> Deletar Cliente</button>
     )

export default deletButton