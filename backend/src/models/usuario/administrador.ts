import { Usuario } from './usuario';
import { TipoUsuario } from '../../constants/tipoUsuario';

/**
 * Representa a entidade Administrador.
 * Herda todos os dados de Usuário e adiciona o campo específico 'instagram'.
 */
export class Administrador extends Usuario {
    public instagram: string;

    constructor(
        idUsuario: number,
        nome: string,
        ultimoNome: string,
        email: string,
        senha: string,
        passe: boolean,
        instagram: string
    ) {
        // O tipo é fixo como ADMINISTRADOR
        super(idUsuario, nome, ultimoNome, email, senha, TipoUsuario.ADMINISTRADOR, passe);
        
        this.instagram = instagram;
    }
}