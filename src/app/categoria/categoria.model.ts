export class Categoria {
    id?: number;
    nome?: String;
    descricao?: String;

    initJSON(json: any): Categoria {
        this.id = json.id;
        this.id = json.id;
        return this;
    }

    toJSON() {
        return {
            'categoria.id': this.id,
            'categoria.nome': this.nome,
            'categoria.descricao': this.descricao
        }
    }
}