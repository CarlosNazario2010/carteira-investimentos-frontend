import { Component, Input, forwardRef } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
} from '@angular/forms';


// Define os tipos de entrada permitidos para o componente
type InputTypes = 'text' | 'email' | 'password' | 'number';

@Component({
    selector: 'app-primary-input',
    standalone: true,
    imports: [ReactiveFormsModule], // Importa o ReactiveFormsModule para utilizar formulários reativos
    providers: [
        {
            provide: NG_VALUE_ACCESSOR, // Fornece o token NG_VALUE_ACCESSOR
            useExisting: forwardRef(() => PrimaryInputComponent), // Utiliza este componente para o token
            multi: true, // Permite múltiplos provedores para NG_VALUE_ACCESSOR
        },
    ],
    templateUrl: './primary-input.component.html',
    styleUrl: './primary-input.component.scss',
})
export class PrimaryInputComponent implements ControlValueAccessor {
    // Define as propriedades de entrada
    @Input() type: InputTypes = 'text'; // Tipo de entrada padrão (texto)
    @Input() placeholder: string = ''; // Texto do placeholder para o input
    @Input() label: string = ''; // Rótulo para o input
    @Input() inputName: string = ''; // Nome do atributo para o input

    // Valor interno do input
    value: string = '';

    // Funções utilizadas para implementar o ControlValueAccessor (para integração com formulários)
    onChange: any = () => {};
    onTouched: any = () => {};

    // Manipula eventos de entrada do usuário no campo de input
    onInput(event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.onChange(value); // Chama a função onChange registrada com o novo valor
    }

    // Escreve um valor no componente (a partir do controle de formulário)
    writeValue(value: any): void {
        this.value = value; // Atualiza o valor interno
    }

    // Registra uma função de callback para ser chamada quando o valor mudar
    registerOnChange(fn: any): void {
        this.onChange = fn; // Armazena a função de callback fornecida
    }

    // Registra uma função de callback para ser chamada quando o input perder o foco
    registerOnTouched(fn: any): void {
        this.onTouched = fn; // Armazena a função de callback fornecida
    }
}
