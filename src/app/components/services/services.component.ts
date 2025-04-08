import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './service-card.component';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './services.component.html',
  styles: []
})
export class ServicesComponent {
  @Output() modalStateChange = new EventEmitter<boolean>();

  onModalStateChange(isOpen: boolean) {
    this.modalStateChange.emit(isOpen);
  }

  services: Service[] = [
    {
      id: 1,
      name: 'Asesoramiento Skincare',
      description: 'Análisis personalizado de tu tipo de piel para recomendarte los productos y rutinas más adecuados para tu cuidado diario.',
      icon: 'fa-solid fa-magnifying-glass',
      details: {
        duration: 'Consulta personalizada',
        frequency: 'Según necesidad',
        includes: 'diagnóstico personalizado y recomendaciones',
        results: 'rutina personalizada de skincare'
      },
      benefits: [
        {
          title: 'Análisis profesional',
          description: 'Evaluación detallada de tu tipo de piel y necesidades específicas'
        },
        {
          title: 'Recomendaciones personalizadas',
          description: 'Selección de productos adecuados para tu rutina diaria'
        },
        {
          title: 'Educación',
          description: 'Aprendé sobre los ingredientes y su función en el cuidado de la piel'
        }
      ]
    },
    {
      id: 2,
      name: 'Limpieza facial profunda',
      description: 'Tratamiento completo que elimina impurezas, células muertas y puntos negros, dejando la piel completamente limpia y renovada.',
      icon: 'fa-solid fa-spa',
      details: {
        duration: '40-60 minutos',
        frequency: '1 vez a la semana',
        includes: 'diagnóstico personalizado',
        results: 'visibles desde la primera sesión'
      },
      benefits: [
        {
          title: 'Limpieza profunda',
          description: 'Eliminación profunda de impurezas y desobstrucción de poros'
        },
        {
          title: 'Mejora de textura',
          description: 'Mejora notable en la textura y apariencia de la piel'
        },
        {
          title: 'Preparación',
          description: 'Prepara la piel para una mejor absorción de otros tratamientos'
        }
      ]
    },
    {
      id: 3,
      name: 'Limpieza facial profunda + extracciones',
      description: 'Incluye todos los beneficios de la limpieza profunda más un proceso especializado de extracción de comedones y puntos negros.',
      icon: 'fa-solid fa-spray-can-sparkles',
      details: {
        duration: '40-60 minutos',
        frequency: 'Cada 15 días',
        includes: 'diagnóstico personalizado',
        results: 'visibles desde la primera sesión'
      },
      benefits: [
        {
          title: 'Extracción profesional',
          description: 'Eliminación manual y segura de impurezas profundas y puntos negros'
        },
        {
          title: 'Piel uniforme',
          description: 'Logra una piel más clara y de tono uniforme'
        },
        {
          title: 'Prevención',
          description: 'Ayuda a prevenir el acné y las imperfecciones'
        }
      ]
    },
    {
      id: 4,
      name: 'Limpieza facial profunda + aparatología',
      description: 'Combina la limpieza profunda tradicional con tecnología avanzada para potenciar los resultados.',
      icon: 'fa-solid fa-wand-magic-sparkles',
      details: {
        duration: '40-60 minutos',
        frequency: 'Cada 15 días',
        includes: 'diagnóstico personalizado',
        results: 'visibles desde la primera sesión'
      },
      benefits: [
        {
          title: 'Tecnología avanzada',
          description: 'Penetración más profunda de productos activos'
        },
        {
          title: 'Estimulación',
          description: 'Promueve la producción natural de colágeno'
        },
        {
          title: 'Circulación',
          description: 'Mejora la circulación sanguínea para resultados más duraderos'
        }
      ]
    },
    {
      id: 5,
      name: 'Limpieza facial profunda + punta de diamante',
      description: 'Microdermoabrasión con punta de diamante que elimina células muertas y estimula la renovación celular.',
      icon: 'fa-gem fa-solid',
      details: {
        duration: '40-60 minutos',
        frequency: 'Cada 15 días',
        includes: 'diagnóstico personalizado',
        results: 'visibles desde la primera sesión'
      },
      benefits: [
        {
          title: 'Exfoliación avanzada',
          description: 'Exfoliación profunda y no invasiva con punta de diamante'
        },
        {
          title: 'Rejuvenecimiento',
          description: 'Reducción visible de líneas finas y mejora de textura'
        },
        {
          title: 'Luminosidad',
          description: 'Piel más suave, luminosa y receptiva a tratamientos'
        }
      ]
    },
    {
      id: 6,
      name: 'Reflexología facial',
      description: 'Técnica de masaje que trabaja puntos específicos del rostro para equilibrar la energía y promover la relajación.',
      icon: 'fa-hand-holding-heart fa-solid',
      details: {
        duration: '90-120 minutos',
        frequency: '1 vez al mes',
        includes: 'diagnóstico personalizado',
        results: 'visibles desde la primera sesión'
      },
      benefits: [
        {
          title: 'Relajación profunda',
          description: 'Reduce el estrés y la tensión acumulada en el rostro'
        },
        {
          title: 'Circulación',
          description: 'Mejora el flujo sanguíneo y la oxigenación facial'
        },
        {
          title: 'Alivio',
          description: 'Ayuda a reducir dolores de cabeza y tensión facial'
        }
      ]
    },
    {
      id: 7,
      name: 'Tratamiento Rosácea',
      description: 'Tratamiento especializado para pieles sensibles con tendencia al enrojecimiento y rosácea.',
      icon: 'fa-heart fa-solid',
      details: {
        duration: '60-90 minutos',
        frequency: 'Según patología',
        includes: 'diagnóstico personalizado',
        results: 'visibles desde la primera sesión'
      },
      benefits: [
        {
          title: 'Control de rojeces',
          description: 'Reduce la inflamación y el enrojecimiento característico'
        },
        {
          title: 'Fortalecimiento',
          description: 'Fortalece los capilares y calma la piel irritada'
        },
        {
          title: 'Prevención',
          description: 'Ayuda a prevenir y controlar futuros brotes'
        }
      ]
    },
    {
      id: 8,
      name: 'Tratamiento Acné',
      description: 'Protocolo específico para pieles con acné que combina limpieza, control de bacterias y regulación de sebo.',
      icon: 'fa-face-smile fa-solid',
      details: {
        duration: '60-90 minutos',
        frequency: 'Según patología',
        includes: 'diagnóstico personalizado',
        results: 'visibles desde la primera sesión'
      },
      benefits: [
        {
          title: 'Control de brotes',
          description: 'Control efectivo de brotes de acné y regulación de sebo'
        },
        {
          title: 'Desinflamación',
          description: 'Reduce la inflamación y previene nuevas lesiones'
        },
        {
          title: 'Prevención',
          description: 'Ayuda a prevenir la formación de cicatrices'
        }
      ]
    },
    {
      id: 9,
      name: 'Tratamiento manchas de otoño-invierno',
      description: 'Tratamiento despigmentante específico para manchas que aparecen en temporadas frías.',
      icon: 'fa-snowflake fa-solid',
      details: {
        duration: '60-90 minutos',
        frequency: 'Según patología',
        includes: 'diagnóstico personalizado',
        results: 'visibles desde la primera sesión'
      },
      benefits: [
        {
          title: 'Aclaramiento',
          description: 'Aclara manchas oscuras y unifica el tono de la piel'
        },
        {
          title: 'Protección',
          description: 'Protege contra la aparición de nuevas manchas'
        },
        {
          title: 'Fortalecimiento',
          description: 'Fortalece la barrera cutánea contra agentes externos'
        }
      ]
    },
    {
      id: 10,
      name: 'Tratamiento manchas de verano',
      description: 'Protocolo especializado para tratar y prevenir manchas causadas por la exposición solar.',
      icon: 'fa-solid fa-sun',
      details: {
        duration: '60-90 minutos',
        frequency: 'Según patología',
        includes: 'diagnóstico personalizado',
        results: 'visibles desde la primera sesión'
      },
      benefits: [
        {
          title: 'Despigmentación',
          description: 'Reduce manchas solares y previene hiperpigmentación'
        },
        {
          title: 'Protección UV',
          description: 'Refuerza la protección natural contra rayos UV'
        },
        {
          title: 'Luminosidad',
          description: 'Ilumina el rostro y unifica el tono de la piel'
        }
      ]
    },
    {
      id: 11,
      name: 'Drenaje linfático facial',
      description: 'Técnica de masaje suave que estimula el sistema linfático para eliminar toxinas y reducir la inflamación.',
      icon: 'fa-droplet fa-solid',
      details: {
        duration: '60-90 minutos',
        frequency: '1 vez al mes',
        includes: 'diagnóstico personalizado',
        results: 'visibles desde la primera sesión'
      },
      benefits: [
        {
          title: 'Descongestión',
          description: 'Reduce la retención de líquidos y descongestiona el rostro'
        },
        {
          title: 'Oxigenación',
          description: 'Mejora la oxigenación y nutrición de la piel'
        },
        {
          title: 'Detoxificación',
          description: 'Promueve la eliminación natural de toxinas'
        }
      ]
    }
  ];
}
