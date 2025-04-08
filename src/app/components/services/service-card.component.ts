import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.component.html',
  styles: []
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: Service;
  @Output() modalStateChange = new EventEmitter<boolean>();

  private _showDetails = false;

  get showDetails(): boolean {
    return this._showDetails;
  }

  set showDetails(value: boolean) {
    this._showDetails = value;
    this.modalStateChange.emit(value);
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (this.showDetails) {
      this.showDetails = false;
    }
  }
}

