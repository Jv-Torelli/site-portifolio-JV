import { Component, OnInit, OnDestroy, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projeto } from '../../modelos/projeto.modelo';
import { ProjetosServico } from '../../servicos/projetos.servico';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.componente.html',
  styleUrls: ['./carrossel.componente.css']
})
export class CarrosselComponente implements OnInit, OnDestroy {
  projetos: Projeto[] = [];
  indiceAtivo = signal(0);
  larguraJanela = signal(window.innerWidth);
  iniciandoArrastar = false;
  xInicioArrastar = 0;
  intervaloAuto: ReturnType<typeof setInterval> | null = null;

  projetoAtivo = computed(() => this.projetos[this.indiceAtivo()]);

  constructor(private projetosServico: ProjetosServico) {}

  ngOnInit(): void {
    this.projetos = this.projetosServico.obterTodos();
    this.iniciarAvanceAutomatico();
  }

  ngOnDestroy(): void {
    this.pararAvanceAutomatico();
  }

  @HostListener('window:resize')
  aoRedimensionar(): void {
    this.larguraJanela.set(window.innerWidth);
  }

  irParaAnterior(): void {
    const novoIndice = this.indiceAtivo() === 0
      ? this.projetos.length - 1
      : this.indiceAtivo() - 1;
    this.irParaIndice(novoIndice);
  }

  irParaProximo(): void {
    const novoIndice = this.indiceAtivo() === this.projetos.length - 1
      ? 0
      : this.indiceAtivo() + 1;
    this.irParaIndice(novoIndice);
  }

  irParaIndice(indice: number): void {
    this.indiceAtivo.set(indice);
    this.reiniciarAvanceAutomatico();
  }

  obterClasseCartao(indice: number): string {
    const total = this.projetos.length;
    const ativo = this.indiceAtivo();
    const diff = indice - ativo;

    if (diff === 0) return 'cartao--ativo';
    if (diff === -1 || (ativo === 0 && indice === total - 1)) return 'cartao--anterior';
    if (diff === 1 || (ativo === total - 1 && indice === 0)) return 'cartao--proximo';
    if (diff < -1) return 'cartao--oculto-esquerda';
    return 'cartao--oculto-direita';
  }

  obterEstiloFaixa(): object {
    const largaoCartao = this.larguraJanela() < 768 ? this.larguraJanela() - 48 : 780;
    const gap = 28;
    const deslocamento = -(this.indiceAtivo() * (largaoCartao + gap)) + (this.larguraJanela() / 2 - largaoCartao / 2);
    return { transform: `translateX(${deslocamento}px)` };
  }

  aoIniciarArrastar(evento: MouseEvent): void {
    this.iniciandoArrastar = true;
    this.xInicioArrastar = evento.clientX;
  }
  aoSoltarArrastar(evento: MouseEvent): void {
    if (!this.iniciandoArrastar) return;
    this.iniciandoArrastar = false;
    const delta = evento.clientX - this.xInicioArrastar;
    if (delta < -60) this.irParaProximo();
    else if (delta > 60) this.irParaAnterior();
  }

  aoIniciarToque(evento: TouchEvent): void {
    this.xInicioArrastar = evento.touches[0].clientX;
  }
  aoTerminarToque(evento: TouchEvent): void {
    const delta = evento.changedTouches[0].clientX - this.xInicioArrastar;
    if (delta < -50) this.irParaProximo();
    else if (delta > 50) this.irParaAnterior();
  }

  @HostListener('window:keydown', ['$event'])
  aoPresionarTecla(evento: KeyboardEvent): void {
    if (evento.key === 'ArrowLeft') this.irParaAnterior();
    if (evento.key === 'ArrowRight') this.irParaProximo();
  }

  private iniciarAvanceAutomatico(): void {
    this.intervaloAuto = setInterval(() => this.irParaProximo(), 6000);
  }

  pararAvanceAutomatico(): void {
    if (this.intervaloAuto) clearInterval(this.intervaloAuto);
  }

  private reiniciarAvanceAutomatico(): void {
    this.pararAvanceAutomatico();
    this.iniciarAvanceAutomatico();
  }

  obterCorCategoria(categoria: string): string {
    const cores: Record<string, string> = {
      'principal': 'var(--cor-verde)',
      'didatico': 'var(--cor-azul)',
      'desafio': 'var(--cor-ciano)'
    };
    return cores[categoria] || 'var(--cor-cinza-claro)';
  }

  obterLabelCategoria(categoria: string): string {
    const labels: Record<string, string> = {
      'principal': '// projeto principal',
      'didatico': '// projeto didático',
      'desafio': '// desafio de lógica'
    };
    return labels[categoria] || categoria;
  }
}
