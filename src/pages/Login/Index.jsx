import "./Style.css";

const Login = () => {
        return <>
            <div className="formulario formulario-login">
                <label>Usuário</label>
                <input type="text" placeholder="usuario@dominio.com.br"/>
                <label>Senha</label>
                <input type="password" placeholder="********"/>
                <button>Login</button>
            </div>
        </>
}

export default Login;