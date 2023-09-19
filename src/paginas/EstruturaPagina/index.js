import React from "react";
import Rodape from "../../componentes/Rodape";
import Topo from "../../componentes/Topo";

const EstruturaPagina = (props) =>{
    return(
        <section>
            <Topo/>

            { props.children }
            
            <Rodape/>
        </section>
    )
}

export default EstruturaPagina;