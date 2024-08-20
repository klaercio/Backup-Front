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
           {/*  <select id="movimentacao" name="tipoMov" required>
                <option value="" disabled selected className="option-padrao">Selecione o tipo</option>
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
            </select>
             */}
            <button>Movimentar</button>
        </form>
    );
}

export default Formulario;