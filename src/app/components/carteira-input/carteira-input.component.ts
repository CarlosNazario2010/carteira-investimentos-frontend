import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = 'text' | 'number';

@Component({
  selector: 'app-carteira-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR, // Fornece o token NG_VALUE_ACCESSOR
        useExisting: forwardRef(() => CarteiraInputComponent), // Utiliza este componente para o token
        multi: true, // Permite múltiplos provedores para NG_VALUE_ACCESSOR
    },
],
  templateUrl: './carteira-input.component.html',
  styleUrl: './carteira-input.component.scss'
})
export class CarteiraInputComponent {
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

