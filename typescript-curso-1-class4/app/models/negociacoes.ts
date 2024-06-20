import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): Array<Negociacao> {
    return [...this.negociacoes];
  }

  lista2(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}