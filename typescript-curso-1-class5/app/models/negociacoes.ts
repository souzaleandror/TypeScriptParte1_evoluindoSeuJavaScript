import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): Array<Negociacao> {
    return [...this.negociacoes];
  }

  lista2(): readonly Negociacao[] {
    return this.negociacoes;
  }
}