import { UsuarioCertificavel } from './usuarioCertificavel';
import { TipoUsuario } from '../../../constants/tipoUsuario';

/**
 * Representa a entidade Aluno.
 * Herda foto e cpf de UsuarioCertificavel.
 * No diagrama atual, não possui atributos de dados adicionais, apenas comportamentos.
 */
export class Aluno extends UsuarioCertificavel {
    
    constructor(
        idUsuario: number,
        nome: string,
        ultimoNome: string,
        email: string,
        senha: string,
        passe: boolean,
        foto: string,
        cpf: string
    ) {
        // Define o tipo fixo como ALUNO
        super(idUsuario, nome, ultimoNome, email, senha, TipoUsuario.ALUNO, passe, foto, cpf);
    }
}