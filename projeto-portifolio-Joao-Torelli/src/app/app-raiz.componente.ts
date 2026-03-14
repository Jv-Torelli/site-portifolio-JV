import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponente } from './componentes/cabecalho/cabecalho.componente';
import { HeroComponente } from './componentes/hero/hero.componente';
import { SobreComponente } from './componentes/sobre/sobre.componente';
import { CarrosselComponente } from './componentes/carrossel/carrossel.componente';
import { CertificacoesComponente } from './componentes/certificacoes/certificacoes.componente';
import { ContatoComponente } from './componentes/contato/contato.componente';
import { RodapeComponente } from './componentes/rodape/rodape.componente';

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [
    CommonModule,
    CabecalhoComponente,
    HeroComponente,
    SobreComponente,
    CarrosselComponente,
    CertificacoesComponente,
    ContatoComponente,
    RodapeComponente
  ],
  template: `
    <div id="pagina-principal">
      <app-cabecalho></app-cabecalho>
      <main id="conteudo-principal">
        <app-hero></app-hero>
        <app-sobre></app-sobre>
        <app-carrossel></app-carrossel>
        <app-certificacoes></app-certificacoes>
        <app-contato></app-contato>
      </main>
      <app-rodape></app-rodape>
    </div>
  `,
  styles: [`
    #pagina-principal {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    #conteudo-principal {
      flex: 1;
    }
  `]
})
export class AppRaizComponente {}
