import { Usuario } from '../usuario';
import { TipoUsuario } from '../../../constants/tipoUsuario';

/**
 * Classe abstrata intermediária para usuários que possuem dados de certificação/pessoais extras.
 * Agrupa atributos comuns entre Aluno e Professor (CPF e Foto).
 */
export abstract class UsuarioCertificavel extends Usuario {
    public foto: string;
    public cpf: string;

    constructor(
        idUsuario: number,
        nome: string,
        ultimoNome: string,
        email: string,
        senha: string,
        tipo: TipoUsuario,
        passe: boolean,
        foto: string,
        cpf: string
    ) {
        super(idUsuario, nome, ultimoNome, email, senha, tipo, passe);
        this.foto = foto;
        this.cpf = cpf;
    }
}