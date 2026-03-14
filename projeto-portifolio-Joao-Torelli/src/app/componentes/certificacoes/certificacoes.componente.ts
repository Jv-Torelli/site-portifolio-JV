import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certificacao {
  titulo: string;
  emissor: string;
  descricao: string;
  corDestaque: string;
  icone: string;
  sigla: string;
}

@Component({
  selector: 'app-certificacoes',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="secao-certificacoes" class="certificacoes">
  <div class="certificacoes__container">

    <div class="certificacoes__cabecalho-secao">
      <span class="secao__numero">03.</span>
      <h2 class="secao__titulo">Certificações</h2>
      <div class="secao__linha"></div>
    </div>

    <div class="certificacoes__grade">
      <div class="cert-cartao" *ngFor="let cert of certificacoes"
           [style.--cor-cert]="cert.corDestaque">
        <div class="cert-cartao__topo">
          <div class="cert-cartao__sigla" [style.color]="cert.corDestaque"
               [style.border-color]="cert.corDestaque + '40'"
               [style.background]="cert.corDestaque + '10'">
            {{ cert.sigla }}
          </div>
          <div class="cert-cartao__icone">{{ cert.icone }}</div>
        </div>
        <div class="cert-cartao__info">
          <h3 class="cert-cartao__titulo">{{ cert.titulo }}</h3>
          <p class="cert-cartao__emissor">{{ cert.emissor }}</p>
          <p class="cert-cartao__descricao">{{ cert.descricao }}</p>
        </div>
        <div class="cert-cartao__barra" [style.background]="cert.corDestaque"></div>
      </div>
    </div>

    <div class="formacao">
      <div class="formacao__cabecalho">
        <span class="formacao__prefixo">// formação</span>
      </div>

      <div class="formacao__cartao">
        <div class="formacao__icone">🎓</div>
        <div class="formacao__info">
          <h3 class="formacao__titulo">Análise e Desenvolvimento de Sistemas (Em andamento)</h3>
          <p class="formacao__escola">São Paulo Tech School(SPTech)</p>
          <p class="formacao__descricao">
            Graduação em Análise e Desenvolvimento de Sistemas com foco em engenharia
            de software, desenvolvimento web e arquitetura de aplicações. A formação
            inclui prática em programação, modelagem de banco de dados, APIs e
            metodologias ágeis utilizadas em ambientes profissionais.
          </p>
        </div>
      </div>

      <div class="formacao__cartao">
        <div class="formacao__icone">🎓</div>
        <div class="formacao__info">
          <h3 class="formacao__titulo">Técnico em Desenvolvimento de Sistemas</h3>
          <p class="formacao__escola">Etec de Guaianases</p>
          <p class="formacao__descricao">
            Curso técnico em Desenvolvimento de Sistemas com fundamentos em lógica
            de programação, banco de dados, desenvolvimento web e orientação a
            objetos, além de projetos práticos aplicando conceitos de engenharia
            de software.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
  `,
  styles: [`
    .certificacoes { padding: 20px 0; }
    .certificacoes__container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
    .certificacoes__cabecalho-secao {
      display: flex; align-items: center; gap: 16px; margin-bottom: 56px;
    }
    .secao__numero { font-family: var(--fonte-mono); font-size: 1rem; color: var(--cor-verde); }
    .secao__titulo { font-family: var(--fonte-display); font-size: 1.8rem; font-weight: 700; color: var(--cor-texto); white-space: nowrap; }
    .secao__linha { flex: 1; height: 1px; background: var(--cor-borda); max-width: 400px; }

    .certificacoes__grade {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 48px;
    }
    .cert-cartao {
      background: var(--cor-fundo-secundario);
      border: 1px solid var(--cor-borda);
      border-radius: 10px;
      padding: 28px 24px;
      position: relative;
      overflow: hidden;
      transition: border-color 0.3s, transform 0.3s;
    }
    .cert-cartao:hover {
      border-color: var(--cor-cert, var(--cor-verde));
      transform: translateY(-4px);
    }
    .cert-cartao__topo {
      display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 18px;
    }
    .cert-cartao__sigla {
      font-family: var(--fonte-mono);
      font-size: 0.72rem;
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid;
      letter-spacing: 0.06em;
    }
    .cert-cartao__icone { font-size: 1.5rem; }
    .cert-cartao__titulo {
      font-family: var(--fonte-display);
      font-size: 1rem;
      font-weight: 700;
      color: var(--cor-texto);
      margin-bottom: 4px;
    }
    .cert-cartao__emissor {
      font-family: var(--fonte-mono);
      font-size: 0.7rem;
      color: var(--cor-cinza-medio);
      margin-bottom: 12px;
    }
    .cert-cartao__descricao {
      font-family: var(--fonte-corpo);
      font-size: 0.82rem;
      line-height: 1.7;
      color: var(--cor-cinza-claro);
    }
    .cert-cartao__barra {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 2px;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .cert-cartao:hover .cert-cartao__barra { opacity: 1; }

    .formacao { 
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 35px; 
     }
    .formacao__cabecalho { margin-bottom: 16px; }
    .formacao__prefixo {
      font-family: var(--fonte-mono);
      font-size: 0.72rem;
      color: var(--cor-cinza-medio);
    }
    .formacao__cartao {
      display: flex;
      gap: 24px;
      align-items: flex-start;
      padding: 28px 32px;
      background: var(--cor-fundo-secundario);
      border: 1px solid var(--cor-borda);
      border-radius: 10px;
      transition: border-color 0.3s;
    }
    .formacao__cartao:hover { border-color: var(--cor-verde); }
    .formacao__icone { font-size: 2rem; flex-shrink: 0; margin-top: 4px; }
    .formacao__titulo {
      font-family: var(--fonte-display);
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--cor-texto);
      margin-bottom: 4px;
    }
    .formacao__escola {
      font-family: var(--fonte-mono);
      font-size: 0.78rem;
      color: var(--cor-verde);
      margin-bottom: 12px;
    }
    .formacao__descricao {
      font-family: var(--fonte-corpo);
      font-size: 0.88rem;
      line-height: 1.75;
      color: var(--cor-cinza-claro);
    }
    @media (max-width: 900px) {
      .certificacoes__grade { grid-template-columns: 1fr; }
      .certificacoes { padding: 80px 0; }
      .certificacoes__container { padding: 0 24px; }
    }
  `]
})
export class CertificacoesComponente {
  certificacoes: Certificacao[] = [
    {
      titulo: 'Azure Fundamentals',
      sigla: 'AZ-900',
      emissor: 'Microsoft Certified',
      descricao: 'Fundamentos de computação em nuvem com Azure: conceitos core, serviços, segurança, privacidade e precificação.',
      corDestaque: '#0078d4',
      icone: '☁'
    },
    {
      titulo: 'Azure Data Fundamentals',
      sigla: 'DP-900',
      emissor: 'Microsoft Certified',
      descricao: 'Conceitos de dados em nuvem: bancos relacionais e não-relacionais, Big Data, analytics e serviços de dados Azure.',
      corDestaque: '#00b4d8',
      icone: '🗄'
    },
    {
      titulo: 'Scrum Fundamentals',
      sigla: 'SFC',
      emissor: 'SCRUMstudy',
      descricao: 'Fundamentos do framework Scrum: sprints, cerimônias, papéis (PO, Scrum Master, Dev Team) e gestão ágil de projetos.',
      corDestaque: '#ff6b35',
      icone: '🔄'
    }
  ];
}