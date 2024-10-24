import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ativo } from '../../types/ativo';

@Component({
  selector: 'app-ativo-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ativo-table.component.html',
  styleUrl: './ativo-table.component.scss'
})
export class AtivoTableComponent {
    ativos: Ativo[] = [
        {
          tipo: 'ACAO',
          ticker: 'PETR3',
          quantidade: 200,
          precoMedio: 17.50,
          totalInvestido: 3500.00,
          precoAtual: 39.52,
          totalAtualizado: 7904.00,
          ganhoPerdaTotal: 4404.00,
          ganhoPerdaPercentual: 126.00,
          variacaoDiariaPreco: -0.16,
          ganhoPerdaDiaria: -32.00,
          variacaoDiariaPercentual: -0.40
        },
        {
          tipo: 'ACAO',
          ticker: 'SAPR11',
          quantidade: 100,
          precoMedio: 10.00,
          totalInvestido: 1000.00,
          precoAtual: 29.4,
          totalAtualizado: 2940.0,
          ganhoPerdaTotal: 1940.00,
          ganhoPerdaPercentual: 194.00,
          variacaoDiariaPreco: -0.41,
          ganhoPerdaDiaria: -41.00,
          variacaoDiariaPercentual: -1.38
        },
        {
            tipo: 'ACAO',
            ticker: 'SAPR11',
            quantidade: 100,
            precoMedio: 10.00,
            totalInvestido: 1000.00,
            precoAtual: 29.4,
            totalAtualizado: 2940.0,
            ganhoPerdaTotal: 1940.00,
            ganhoPerdaPercentual: 194.00,
            variacaoDiariaPreco: -0.41,
            ganhoPerdaDiaria: -41.00,
            variacaoDiariaPercentual: -1.38
          },
          {
            tipo: 'ACAO',
            ticker: 'SAPR11',
            quantidade: 100,
            precoMedio: 10.00,
            totalInvestido: 1000.00,
            precoAtual: 29.4,
            totalAtualizado: 2940.0,
            ganhoPerdaTotal: 1940.00,
            ganhoPerdaPercentual: 194.00,
            variacaoDiariaPreco: -0.41,
            ganhoPerdaDiaria: -41.00,
            variacaoDiariaPercentual: -1.38
          },
          {
            tipo: 'ACAO',
            ticker: 'SAPR11',
            quantidade: 100,
            precoMedio: 10.00,
            totalInvestido: 1000.00,
            precoAtual: 29.4,
            totalAtualizado: 2940.0,
            ganhoPerdaTotal: 1940.00,
            ganhoPerdaPercentual: 194.00,
            variacaoDiariaPreco: -0.41,
            ganhoPerdaDiaria: -41.00,
            variacaoDiariaPercentual: -1.38
          }
      ];
}
