import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Componente de layout padrão para telas de login.
 *
 * Este componente fornece um layout reutilizável para telas de login,
 * com campos personalizáveis para título, botões e eventos.
 */
@Component({
    selector: 'app-default-login-layout',
    standalone: true,
    imports: [],
    templateUrl: './default-login-layout.component.html',
    styleUrl: './default-login-layout.component.scss',
})
export class DefaultLoginLayoutComponent {
    /**
     * Atributos que entram no componente
     */
    @Input() title: string = '';
    @Input() primaryBtnText: string = '';
    @Input() secondaryBtnText: string = '';

    /**
     * Ao clicar no botao, o evento sera emitido
     */
    @Output('submit') onSubmit = new EventEmitter();
    @Output('navigate') onNavigate = new EventEmitter();

    /**
     * Emite o evento onSubmit.
     * O componente pai deve lidar com a lógica de submissao.
     */
    submit() {
        this.onSubmit.emit();
    }

    /**
     * Emite o evento onNavigate.
     * O componente pai deve lidar com a lógica de navegacao.
     */
    navigate() {
        this.onNavigate.emit();
    }
}
