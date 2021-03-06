import React, { useState } from "react";
import ListarProdutos from "./listar-produtos/listar-produtos";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";

function Produtos(props) {
    const [exibirMsg, setExibirMsg] = useState(false);
    const [produto, setProduto] = useState("");

    function visivel() {
        return props.visivel ? null : "hidden";
    }

    function exibirMensagem(produto) {
        setExibirMsg(true);
        setProduto(produto.nome);
        setTimeout(() => {
            setExibirMsg(false);
        }, 1000);
    }

    return (
        <div className={visivel()}>
            <Alert variant="success" className="alerta" show={exibirMsg}>
                <strong>{produto}</strong> adicionado com sucesso ao carrinho!
            </Alert>
            <div className="mt-5 d-flex flex-wrap justify-content-around">
                <ListarProdutos
                    exibirMensagem={exibirMensagem}
                    adicionarProduto={props.adicionarProduto}
                />
            </div>
        </div>
    );
}

Produtos.propTypes = {
    visivel: PropTypes.bool.isRequired,
    adicionarProduto: PropTypes.func.isRequired,
};

export default Produtos;
