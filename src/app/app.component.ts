import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string | undefined;
  date: string | undefined;
  amount: number | undefined;
  height: number | undefined;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };
  miles: number | undefined;
  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange(value: string) {
    this.date = value;
  }
  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }
  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
