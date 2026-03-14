import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.componente.html',
  styleUrls: ['./hero.componente.css']
})
export class HeroComponente implements OnInit, OnDestroy {
  linhasTerminal: string[] = [];
  indiceLinhaAtual = 0;
  intervaloDigitacao: ReturnType<typeof setInterval> | null = null;

  private sequenciaTerminal = [
    '> Inicializando portfólio...',
    '> Carregando perfil: joao-victor-torelli',
    '> Stack: [Angular, Java, Spring Boot, PostgreSQL]',
    '> Certificações: [AZ-900, DP-900, Scrum Fundamentals]',
    '> Projeto atual: TurboTech [em desenvolvimento]',
    '> Status: disponível para novos projetos ✓',
    '> _'
  ];

  ngOnInit(): void {
    this.iniciarAnimacaoTerminal();
  }

  ngOnDestroy(): void {
    if (this.intervaloDigitacao) {
      clearInterval(this.intervaloDigitacao);
    }
  }

  private iniciarAnimacaoTerminal(): void {
    let i = 0;
    this.intervaloDigitacao = setInterval(() => {
      if (i < this.sequenciaTerminal.length) {
        this.linhasTerminal.push(this.sequenciaTerminal[i]);
        i++;
      } else {
        clearInterval(this.intervaloDigitacao!);
      }
    }, 480);
  }

  rolarParaProjetos(): void {
    const elemento = document.getElementById('secao-projetos');
    if (elemento) elemento.scrollIntoView({ behavior: 'smooth' });
  }

  rolarParaSobre(): void {
    const elemento = document.getElementById('secao-sobre');
    if (elemento) elemento.scrollIntoView({ behavior: 'smooth' });
  }
}
