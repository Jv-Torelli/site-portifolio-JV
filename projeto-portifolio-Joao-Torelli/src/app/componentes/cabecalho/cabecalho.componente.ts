import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho.componente.html',
  styleUrls: ['./cabecalho.componente.css']
})
export class CabecalhoComponente {
  cabecalhoRolado = signal(false);
  menuAberto = signal(false);

  @HostListener('window:scroll')
  aoRolar(): void {
    this.cabecalhoRolado.set(window.scrollY > 50);
  }

  alternarMenu(): void {
    this.menuAberto.set(!this.menuAberto());
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }

  rolarParaSecao(idSecao: string): void {
    const elemento = document.getElementById(idSecao);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
    this.fecharMenu();
  }
}
