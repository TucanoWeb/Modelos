import React from "react";
import PropTypes from 'prop-types';

const PrintName = (props) => {
 

    return (
        <div>

            <h1>Seu nome é {props.dataName} </h1>

        </div>
    )

}


PrintName.propTypes = {
    dataName: PropTypes.string
}

export default PrintName