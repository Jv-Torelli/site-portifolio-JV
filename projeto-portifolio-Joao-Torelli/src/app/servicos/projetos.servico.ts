import { Injectable } from '@angular/core';
import { Projeto } from '../modelos/projeto.modelo';

@Injectable({ providedIn: 'root' })
export class ProjetosServico {

  obterTodos(): Projeto[] {
    return [
      {
        id: 1,
        titulo: 'TurboTech',
        organizacao: 'Projeto Principal · Beneficiário Real',
        descricaoBreve: 'Automação de oficinas mecânicas com geração inteligente de orçamentos.',
        descricaoCompleta: 'Sistema completo para automação dos processos internos de uma oficina mecânica. O foco central está na geração de orçamentos digitais — eliminando papel, agilizando o atendimento e profissionalizando a gestão. O cliente (beneficiário real) acompanha o desenvolvimento de perto, garantindo que cada funcionalidade resolva uma dor concreta do dia a dia da oficina. Inclui cadastro de clientes, veículos, peças e serviços, histórico de atendimentos e emissão de orçamentos detalhados.',
        tecnologias: ['React', 'Java', 'Spring Boot', 'Spring Security', 'MySQL Workbench', 'JWT', 'Spring', 'Integração com a Api Placas', 'Geração de PDF via Apache Poi', 'Redis'],
        status: 'em-desenvolvimento',
        statusTexto: 'Em Desenvolvimento',
        linkGithub: 'https://github.com/Turbo-Tech-7',
        categoria: 'principal',
        corDestaque: '#00ff88',
        iconeTerminal: '⚙'
      },
      {
        id: 2,
        titulo: 'Nexus — E-Sports Platform',
        organizacao: 'Nexus Data · GitHub Organization',
        descricaoBreve: 'Plataforma que conecta empresas de e-sports a jogadores de LoL pelo perfil buscado.',
        descricaoCompleta: 'Plataforma de matchmaking entre organizações de e-sports e jogadores de League of Legends. Empresas cadastram o perfil ideal que buscam — role, rank, estilo de jogo, disponibilidade — e a plataforma cruza com os perfis dos jogadores cadastrados, gerando conexões qualificadas. Desenvolvido em colaboração dentro da organização Nexus Data no GitHub',
        tecnologias: ['NodeJs', 'Html', 'Css', 'Javascript', 'MySQL Workbench', 'REST API', 'AWS'],
        status: 'concluido',
        statusTexto: 'Concluído',
        linkGithub: 'https://github.com/Nexus-Data-Org',
        categoria: 'principal',
        corDestaque: '#00aaff',
        iconeTerminal: '🎮'
      },
      {
        id: 3,
        titulo: 'Safe Gas',
        organizacao: 'Jv-Torelli · Segurança Residencial',
        descricaoBreve: 'Monitoramento de vazamento de gás em tempo real para condomínios com dashboards e alertas.',
        descricaoCompleta: 'Sistema de monitoramento inteligente de gás para condomínios residenciais. Sensores físicos (C++) capturam os níveis de gás nas áreas comuns e individuais e transmitem os dados para dashboards web em tempo real. Em caso de anomalia, alertas automáticos são disparados. A interface apresenta o histórico de leituras, mapa do condomínio com status por unidade e painel administrativo para o síndico.',
        tecnologias: ['NodeJs','HTML', 'CSS', 'JavaScript', 'C++', 'IoT', 'Dashboard'],
        status: 'concluido',
        statusTexto: 'Concluído',
        linkGithub: 'https://github.com/Jv-Torelli/safe_Gas',
        categoria: 'principal',
        corDestaque: '#ffaa00',
        iconeTerminal: '⛽️'
      },
      {
        id: 4,
        titulo: 'Help House',
        organizacao: 'Help House',
        descricaoBreve: 'Plataforma web para conectar clientes a profissionais de serviços domésticos.',
        descricaoCompleta: 'Plataforma desenvolvida para facilitar a contratação de profissionais para serviços domésticos, conectando clientes a prestadores de serviço de forma prática e segura. O sistema permite cadastro de usuários, gerenciamento de perfis profissionais, busca por serviços e solicitação de atendimentos.',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Xampp', 'React-native', 'Type-script', 'Dashboard'],
        status: 'concluido',
        statusTexto: 'Concluído',
        linkGithub: 'https://github.com/Guilherme-S-Mesquita/appProHelpHouse',
        categoria: 'principal',
        corDestaque: '#00FF00',
        iconeTerminal: '🏠'
      },
      {
        id: 5,
        titulo: 'Car Connect',
        organizacao: 'Car Connect',
        descricaoBreve: 'Fórum que une amantes de carros pelo mundo.',
        descricaoCompleta: 'O CarConnect é um fórum criado especialmente para apaixonados por carros de todos os estilos. Aqui, os usuários podem compartilhar fotos, trocar experiências, conhecer novos modelos, personalizações e muito mais!',
        tecnologias: ['NodeJs' ,'HTML', 'CSS', 'JavaScript', 'Dashboard'],
        status: 'concluido',
        statusTexto: 'Concluído',
        linkGithub: 'https://github.com/Jv-Torelli/projeto_Individual',
        categoria: 'principal',
        corDestaque: '#E994B7',
        iconeTerminal: '🏎️'
      },
      {
        id: 6,
        titulo: 'CRUD com JWT — Spring Boot',
        organizacao: 'Estudo Didático · Spring Security',
        descricaoBreve: 'API REST com autenticação JWT, controle de acesso por roles e persistência com JPA.',
        descricaoCompleta: 'Projeto de estudo aprofundado do ecossistema Spring. Implementa uma API RESTful completa com CRUD de usuários, autenticação via JWT (emissão, validação e refresh de tokens), controle de acesso baseado em roles (ADMIN / USER) e persistência com Spring Data JPA + MySQL. Documenta os principais padrões de segurança em APIs modernas.',
        tecnologias: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA', 'MySQL'],
        status: 'concluido',
        statusTexto: 'Concluído',
        linkGithub: 'https://github.com/Jv-Torelli/CrudUsuario_JWT',
        categoria: 'didatico',
        corDestaque: '#aa66ff',
        iconeTerminal: '🔐'
      },
      {
        id: 7,
        titulo: 'Agência de Veículos — Hexagonal',
        organizacao: 'Estudo Didático · Arquitetura',
        descricaoBreve: 'Aplicação Java com arquitetura hexagonal (Ports & Adapters) para gestão de veículos.',
        descricaoCompleta: 'Estudo prático da arquitetura hexagonal (Ports & Adapters) aplicado a um sistema de agência de veículos. O projeto separa claramente o domínio de negócio dos adaptadores de infraestrutura, permitindo trocar banco de dados ou interface sem impactar o core. Demonstra o uso correto de interfaces como portas, injeção de dependência e organização por camadas de responsabilidade.',
        tecnologias: ['Java', 'Spring Boot', 'Arquitetura Hexagonal', 'JPA', 'REST'],
        status: 'concluido',
        statusTexto: 'Concluído',
        linkGithub: 'https://github.com/Jv-Torelli/agenciaDeVeiculos_Hexagonal',
        categoria: 'didatico',
        corDestaque: '#ff6688',
        iconeTerminal: '🏗'
      },
      {
        id: 8,
        titulo: 'Desafios de Lógica — Algoritmos',
        organizacao: 'Desafios · Raciocínio Computacional',
        descricaoBreve: 'Coleção de soluções para desafios clássicos: ordenação, busca, recursão e estruturas.',
        descricaoCompleta: 'Repositório com soluções comentadas para desafios clássicos de lógica e algoritmos. Inclui implementações de algoritmos de ordenação (Bubble, Selection, Quick, Merge Sort), estruturas de dados (Pilha, Fila, Lista Encadeada), busca binária, recursão (Fibonacci, Fatorial, Torres de Hanói) e problemas de lógica como FizzBuzz, Palíndromos e Anagramas. Cada solução tem explicação da complexidade O(n).',
        tecnologias: ['Java', 'Algoritmos', 'Estrutura de Dados', 'Big-O', 'Recursão'],
        status: 'concluido',
        statusTexto: 'Concluído',
        linkGithub: 'https://github.com/Jv-Torelli',
        categoria: 'desafio',
        corDestaque: '#00ffcc',
        iconeTerminal: '🧠'
      }
    ];
  }
}
