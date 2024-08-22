import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipes';

  name: string = '';
  date: string = '';
  amount: number = 0;
  miles: number = 0;

  onNameChange(value: string) {
    this.name = value;
    console.log(value);
  }
  onDateChange(value: string) {
    this.date = value;
    console.log(value);
  }
  onAmountChange(value: string) {
    const parsedValue = parseInt(value);
    this.amount = parsedValue;
  }
  onMilesChange(value: string) {
    const parsedValue = parseInt(value);
    this.miles = parsedValue;
  }
}
