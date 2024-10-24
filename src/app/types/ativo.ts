export type Ativo = {
    tipo: 'ACAO' | 'FII' | 'BDR' | 'ETF' | string;
    ticker: string;
    quantidade: number;
    precoMedio: number;
    totalInvestido: number;
    precoAtual: number;
    totalAtualizado: number;
    ganhoPerdaTotal: number;
    ganhoPerdaPercentual: number;
    variacaoDiariaPreco: number;
    ganhoPerdaDiaria: number;
    variacaoDiariaPercentual: number;
  }
