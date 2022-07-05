import React from "react";
import customer from "../components/clientList";
import TitleSite from "../components/TitleSite";
import SiteDescription from "../components/SiteDescription";
import ShowEvent from "../components/buttons/ShowEvent"
import ShowClient from "../components/ShowClient"
import InputField from "../components/InputField"

import deletButton from "../components/buttons/DeleteClient"

import renderSkill from "../components/SkillList"
//COM AS IMPORTAÇÕES, O SCRIPT É PUXADO DO DIRETÓRIO E EXECUTADO NESSA PÁGINA, POSSIBILITANDO A UTILIZAÇÃO EM VÁRIAS OUTRAS PÁGINAS, ALTERANDO OU MANTENDO OS PARÂMETROS INFORMADOS, DEPENDENDO DO OBJETIVO/CONTEXTO



// INÍCIO DO BLOCO DE DECLARAÇÃO DE VALORES DE VARIÁVEIS

export const hasCustomer = true;

// ---- FINAL DO BLOCO DE DECLARAÇÃO DE VALORES DE VARIÁVEIS



// INÍCIO DO BLOCO DE ELEMENTOS



const buttonA = <button>Primeiro Botão</button>

const buttonB = <button>Segundo Botão</button>

const renderCustomer = (customer) => {
    return (
        <div key={`customer-${customer.id}`} >

            <li className="listName">
                {customer.nome} {deletButton(customer.nome)}
            </li>
            {customer.skill.map(renderSkill)}
        </div>

    )

}


const renderShowHistory = (
    <div>
        {buttonA}
    </div>
)

const renderAddClient = (
    <div>
        {buttonB}
    </div>
)

// ------- FIM DO BLOCO DE ELEMENTOS



// INÍCIO DO BLOCO DE RENDERIZAÇÃO

const App = () => {

    return (

        <div>
            <TitleSite />
            <SiteDescription />
            <InputField />
            <ShowEvent />
            {hasCustomer ? renderShowHistory : renderAddClient}
            <div>
                <ShowClient />
            </div>

            <div>
                {customer.map(renderCustomer)}
            </div>
        </div>

    );
};


// ---- FINAL DO BLOCO DE RENDERIZAÇÃO


export default App