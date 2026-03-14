import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="secao-contato" class="contato">
  <div class="contato__container">

    <div class="contato__cabecalho-secao">
      <span class="secao__numero">04.</span>
      <h2 class="secao__titulo">Contato</h2>
      <div class="secao__linha"></div>
    </div>

    <div class="contato__conteudo">
      <div class="contato__texto">
        <span class="contato__comentario">// vamos construir algo juntos?</span>
        <h3 class="contato__chamada">
          Pronto para o<br/>
          <span class="chamada__destaque">próximo deploy.</span>
        </h3>
        <p class="contato__descricao">
          Estou sempre aberto a novos projetos, colaborações e oportunidades.
          Se você tem uma ideia, um problema para resolver ou quer conversar sobre tecnologia — me chame.
        </p>
        <div class="contato__acoes">
          <a class="botao-contato botao-contato--primario"
             href="https://github.com/Jv-Torelli" target="_blank" rel="noopener">
            <span>⌥</span> Ver GitHub
          </a>
          <a class="botao-contato botao-contato--secundario"
             href="mailto:joao.vmatos@sptech.school">
            <span>✉</span> Enviar e-mail
          </a>
        </div>
      </div>

      <div class="contato__terminal">
        <div class="terminal-contato__cab">
          <div class="terminal__pontos-mini">
            <span></span><span></span><span></span>
          </div>
          <span>contato.sh</span>
        </div>
        <div class="terminal-contato__corpo">
          <p><span class="tc-verde">const</span> desenvolvedor = &#123;</p>

          <p class="tc-indent">
            <span class="tc-azul">nome</span>: 
            <span class="tc-laranja">'João Victor Torelli'</span>,
          </p>

          <p class="tc-indent">
            <span class="tc-azul">cargo</span>: 
            <span class="tc-laranja">'Software Engineer'</span>,
          </p>

          <p class="tc-indent">
            <span class="tc-azul">empresa</span>: 
            <span class="tc-laranja">'Bradesco'</span>,
          </p>

          <p class="tc-indent">
            <span class="tc-azul">area</span>: 
            <span class="tc-laranja">'Canais Digitais'</span>,
          </p>

          <p class="tc-indent">
            <span class="tc-azul">formacao</span>: 
            <span class="tc-laranja">'Técnico em Desenvolvimento de Sistemas'</span>,
          </p>

          <p class="tc-indent">
            <span class="tc-azul">instituicao</span>: 
            <span class="tc-laranja">'Etec de Guaianases'</span>,
          </p>

          <p class="tc-indent">
            <span class="tc-azul">stack</span>: 
            [<span class="tc-laranja">'Java'</span>, 
            <span class="tc-laranja">'Spring Boot'</span>, 
            <span class="tc-laranja">'Angular'</span>, 
            <span class="tc-laranja">'Docker'</span>, 
            <span class="tc-laranja">'Hexagonal'</span>,
            <span class="tc-laranja">'AWS'</span>],
          </p>

          <p class="tc-indent">
            <span class="tc-azul">especialidade</span>: 
            <span class="tc-laranja">'APIs REST e Arquitetura de Software'</span>,
          </p>

          <p class="tc-indent">
            <span class="tc-azul">localizacao</span>: 
            <span class="tc-laranja">'São Paulo, Brasil'</span>,
          </p>

          <p class="tc-indent">
            <span class="tc-azul">github</span>: 
            <span class="tc-laranja">'&#64;Jv-Torelli'</span>
          </p>

          <p>&#125;;</p>
        </div>
      </div>
    </div>

  </div>
</section>
  `,
  styles: [`
    .contato { padding: 120px 0 80px; }
    .contato__container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
    .contato__cabecalho-secao { display: flex; align-items: center; gap: 16px; margin-bottom: 56px; }
    .secao__numero { font-family: var(--fonte-mono); font-size: 1rem; color: var(--cor-verde); }
    .secao__titulo { font-family: var(--fonte-display); font-size: 1.8rem; font-weight: 700; color: var(--cor-texto); white-space: nowrap; }
    .secao__linha { flex: 1; height: 1px; background: var(--cor-borda); max-width: 400px; }
    .contato__conteudo { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .contato__comentario { font-family: var(--fonte-mono); font-size: 0.78rem; color: var(--cor-cinza-medio); display: block; margin-bottom: 16px; }
    .contato__chamada { font-family: var(--fonte-display); font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 800; color: var(--cor-texto); line-height: 1.1; margin-bottom: 20px; }
    .chamada__destaque { color: var(--cor-verde); }
    .contato__descricao { font-family: var(--fonte-corpo); font-size: 0.92rem; line-height: 1.8; color: var(--cor-cinza-claro); margin-bottom: 32px; }
    .contato__acoes { display: flex; gap: 14px; flex-wrap: wrap; }
    .botao-contato {
      font-family: var(--fonte-mono); font-size: 0.82rem;
      padding: 13px 24px; border-radius: 4px; border: 1px solid;
      cursor: pointer; text-decoration: none;
      display: flex; align-items: center; gap: 8px; transition: all 0.25s;
    }
    .botao-contato--primario { background: var(--cor-verde); color: var(--cor-fundo); border-color: var(--cor-verde); font-weight: 700; }
    .botao-contato--primario:hover { background: transparent; color: var(--cor-verde); }
    .botao-contato--secundario { background: transparent; color: var(--cor-cinza-claro); border-color: var(--cor-borda); }
    .botao-contato--secundario:hover { border-color: var(--cor-verde); color: var(--cor-verde); }

    .contato__terminal {
      background: var(--cor-fundo-secundario);
      border: 1px solid var(--cor-borda);
      border-radius: 8px; overflow: hidden;
    }
    .terminal-contato__cab {
      background: rgba(255,255,255,0.03); border-bottom: 1px solid var(--cor-borda);
      padding: 10px 14px; display: flex; align-items: center; gap: 10px;
      font-family: var(--fonte-mono); font-size: 0.7rem; color: var(--cor-cinza-medio);
    }
    .terminal__pontos-mini { display: flex; gap: 5px; }
    .terminal__pontos-mini span { width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,0.12); }
    .terminal-contato__corpo { padding: 20px 22px; font-family: var(--fonte-mono); font-size: 0.8rem; line-height: 1.9; color: #d4d4d4; }
    .terminal-contato__corpo p { margin: 0; }
    .tc-indent { padding-left: 18px; }
    .tc-verde { color: #569cd6; }
    .tc-azul { color: #9cdcfe; }
    .tc-laranja { color: #ce9178; }
    .tc-verde-claro { color: #4ec9b0; }

    @media (max-width: 900px) {
      .contato__conteudo { grid-template-columns: 1fr; }
      .contato { padding: 80px 0; }
      .contato__container { padding: 0 24px; }
    }
  `]
})
export class ContatoComponente { }
