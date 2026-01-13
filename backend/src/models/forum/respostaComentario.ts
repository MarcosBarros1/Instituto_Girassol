/**
 * Representa uma resposta a um comentário existente.
 */
export class RespostaComentario {
    public idResposta: number;
    public texto: string;
    public idUsuario: number; // ID do autor da resposta (FK)
    public idComentario: number; // ID do comentário pai (FK)

    constructor(
        idResposta: number,
        texto: string,
        idUsuario: number,
        idComentario: number
    ) {
        this.idResposta = idResposta;
        this.texto = texto;
        this.idUsuario = idUsuario;
        this.idComentario = idComentario;
    }
}