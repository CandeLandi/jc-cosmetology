import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: Service;
  showDetails = false;
}

