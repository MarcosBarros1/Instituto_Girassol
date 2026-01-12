import { UsuarioCertificavel } from './usuarioCertificavel';
import { TipoUsuario } from '../../../constants/tipoUsuario';

/**
 * Representa a entidade Professor.
 * Adiciona dados profissionais (currículo) e contato (telefone).
 */
export class Professor extends UsuarioCertificavel {
    public curriculo: string;
    public telefone: string;

    constructor(
        idUsuario: number,
        nome: string,
        ultimoNome: string,
        email: string,
        senha: string,
        passe: boolean,
        foto: string,
        cpf: string,
        curriculo: string,
        telefone: string
    ) {
        // Define o tipo fixo como PROFESSOR
        super(idUsuario, nome, ultimoNome, email, senha, TipoUsuario.PROFESSOR, passe, foto, cpf);
        
        this.curriculo = curriculo;
        this.telefone = telefone;
    }
}