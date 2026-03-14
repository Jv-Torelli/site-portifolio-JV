import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [CommonModule],
  template: `
<footer id="rodape">
  <div class="rodape__container">
    <div class="rodape__esquerda">
      <span class="rodape__logo">[JV.Torelli]</span>
      <span class="rodape__copy">
        &copy; {{ anoAtual }} · Desenvolvido com Angular
      </span>
    </div>
    <div class="rodape__centro">
      <span class="rodape__linha-codigo">// feito com 🤍 e muito café ☕️</span>
    </div>
    <div class="rodape__direita">
      <a class="rodape__link" href="https://github.com/Jv-Torelli" target="_blank" rel="noopener">
        GitHub ↗
      </a>
    </div>
  </div>
</footer>
  `,
  styles: [`
    #rodape {
      border-top: 1px solid var(--cor-borda);
      padding: 28px 0;
      background: var(--cor-fundo-secundario);
    }
    .rodape__container {
      max-width: 1200px; margin: 0 auto; padding: 0 40px;
      display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
    }
    .rodape__esquerda { display: flex; align-items: center; gap: 16px; }
    .rodape__logo { font-family: var(--fonte-mono); font-size: 0.9rem; color: var(--cor-verde); font-weight: 700; }
    .rodape__copy { font-family: var(--fonte-mono); font-size: 0.7rem; color: var(--cor-cinza-medio); }
    .rodape__linha-codigo { font-family: var(--fonte-mono); font-size: 0.72rem; color: var(--cor-cinza-medio); }
    .rodape__link { font-family: var(--fonte-mono); font-size: 0.76rem; color: var(--cor-cinza-claro); text-decoration: none; transition: color 0.2s; }
    .rodape__link:hover { color: var(--cor-verde); }
    @media (max-width: 768px) {
      .rodape__container { flex-direction: column; align-items: center; text-align: center; padding: 0 24px; }
    }
  `]
})
export class RodapeComponente {
  anoAtual = new Date().getFullYear();
}
