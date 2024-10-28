import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AtivoVendido } from '../../types/ativo-vendido';
import { AtivoVendidoService } from '../../services/ativo-vendido.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ativos-vendidos',
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent],
    templateUrl: './ativos-vendidos.component.html',
    styleUrl: './ativos-vendidos.component.scss',
})
export class AtivosVendidosComponent {
    ativosVendidos: AtivoVendido[] = [];

    constructor(
        private ativoVendidoService: AtivoVendidoService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.ativoVendidoService
            .buscarAtivoComprado()
            .subscribe((ativos) => {
                this.ativosVendidos = ativos;
            });
    }

    voltar() {
        this.router.navigate(['dashboard']);
    }
}
