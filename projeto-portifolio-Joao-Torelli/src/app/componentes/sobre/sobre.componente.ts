import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.componente.html',
  styleUrls: ['./sobre.componente.css']
})
export class SobreComponente {
  habilidades = [
    { categoria: 'Front-end', itens: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'] },
    { categoria: 'Back-end', itens: ['Java', 'Spring Boot', 'Spring Security', 'REST API', 'JWT'] },
    { categoria: 'Banco de Dados', itens: ['PostgreSQL', 'MySQL', 'Spring Data JPA'] },
    { categoria: 'Outros', itens: ['C++', 'IoT', 'Git', 'GitHub', 'Scrum', 'Arquitetura Hexagonal'] }
  ];
}
