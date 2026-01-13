import { RespostaComentario } from './respostaComentario';

/**
 * Representa um comentário feito em uma aula.
 * Contém o texto e uma lista opcional de respostas.
 */
export class Comentario {
    public idComentario: number;
    public texto: string;
    public idUsuario: number; // ID do autor do comentário (FK)
    public idAula: number;    // ID da aula onde o comentário foi feito (FK)
    public respostas: RespostaComentario[]; // Lista de respostas associadas

    constructor(
        idComentario: number,
        texto: string,
        idUsuario: number,
        idAula: number,
        respostas: RespostaComentario[] = [] // Valor padrão vazio
    ) {
        this.idComentario = idComentario;
        this.texto = texto;
        this.idUsuario = idUsuario;
        this.idAula = idAula;
        this.respostas = respostas;
    }
}