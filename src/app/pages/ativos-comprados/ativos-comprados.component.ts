import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AtivoComprado } from '../../types/ativo-comprado';
import { AtivoCompradoService } from '../../services/ativo-comprado.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ativos-comprados',
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent],
    providers: [AtivoCompradoService],
    templateUrl: './ativos-comprados.component.html',
    styleUrl: './ativos-comprados.component.scss',
})
export class AtivosCompradosComponent {
    ativosComprados: AtivoComprado[] = [];

    constructor(
        private ativoCompradosService: AtivoCompradoService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.ativoCompradosService
            .buscarAtivoComprado()
            .subscribe((ativos) => {
                this.ativosComprados = ativos;
            });
    }

    voltar() {
        this.router.navigate(['dashboard']);
    }
}
