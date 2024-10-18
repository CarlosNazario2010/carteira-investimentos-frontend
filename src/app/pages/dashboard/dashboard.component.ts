import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
    nomeUsuario = sessionStorage.getItem('user-name');
    idUsuario = sessionStorage.getItem('user-id');
}
