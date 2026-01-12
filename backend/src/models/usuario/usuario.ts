import { TipoUsuario } from "../../constants/tipoUsuario";

/**
 * Representa a entidade base de um Usuário no sistema.
 * Classe abstrata: não deve ser instanciada diretamente, apenas herdada.
 * Contém apenas dados, sem métodos de comportamento.
 */
export abstract class Usuario {
    public idUsuario: number;
    public nome: string;
    public ultimoNome: string;
    public email: string;
    public senha: string; // Mantemos public aqui pois é um objeto de transferência de dados dentro do backend
    public tipo: TipoUsuario;
    public passe: boolean;

    constructor(
        idUsuario: number,
        nome: string,
        ultimoNome: string,
        email: string,
        senha: string,
        tipo: TipoUsuario,
        passe: boolean
    ) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.ultimoNome = ultimoNome;
        this.email = email;
        this.senha = senha;
        this.tipo = tipo;
        this.passe = passe;
    }
}