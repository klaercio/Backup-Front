import Dropdown from 'react-dropdown';
import "./Style.css";

const Formulario = () => {

    const option = ["Entrada", "Saída"];

    return (
        <form className="formulario">
            <label htmlFor="">Ativo</label>
            <input type="text" placeholder="38XXXX" required></input>
            <label htmlFor="">Crachá</label>
            <input type="text" placeholder="139XXXXX" required></input>
            <label htmlFor="">Movimentação</label>
            <Dropdown className="custom-dropdown"options={option} placeholder="Selecione uma opção" required/>
            <button>Movimentar</button>
        </form>
    );
}

export default Formulario;