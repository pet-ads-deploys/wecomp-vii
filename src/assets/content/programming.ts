import { ProgrammingProps } from "../../components/sections/Programming/types";

import onovolav from "../images/organizationLogo/onovolab.svg";
import PedroNobile from "../images/lecturers/PedroNobile.svg"
import CaioDuran from "../images/lecturers/CaioDuran.svg"
import AdenilsoSilmao from "../images/lecturers/AdenilsoSimao.svg"
import CarlaoPereira from "../images/lecturers/CarlaoPereira.svg";
import Pet from "../images/PET.svg";
import JoaoCaires from "../images/lecturers/JoaoCaires.svg";
import AlineTolentino from "../images/lecturers/AlineTolentino.svg";

export const programmingContent: ProgrammingProps[] = [
  {
    name: "Abertura VII WECOMP",
    image: onovolav,
    imageDescription: "OnovoLab logo",
    bio: "",
    author: "",
    date: "22 de setembro",
    time: "19h00 - 21h30",
    link: "",
    vacancies: 160,
    location: "ONOVOLAB",
    description:
      "A abertura oficial da VII Wecomp acontecerá no ONOVOLAB e contará com a presença de empresas parceiras. Não perca!",
    typeEvent: "Opening",
    classification: "Free",
    status: "Available",
  },
  {
    name: "Git e GitHub: do mínimo que você precisa saber ao deploy no Vercel",
    image: Pet,
    imageDescription: "Pet Ads logo",
    bio: "Lucas é um cientista da computação que se diverte projetando e desenvolvendo software há 20 anos. É professor do IFSP São Carlos desde 2015 e atual tutor do PET/ADS.",
    author: "PET/ADS/IFSP",
    date: "24 de setembro",
    time: "08h30 - 11h30",
    link: "",
    vacancies: 30,
    location: "IFSP",
    description:
      "Neste minicurso, você aprenderá os conceitos básicos do Git, capacitando-o a usar essa ferramenta no dia a dia. Também será apresentada uma visão geral do GitHub e como integrá-lo ao Vercel para realizar deploys automáticos de páginas web.",
    typeEvent: "Course",
    classification: "Free",
    status: "Available",
  },
  {
    name: "Introdução ao Terminal Linux",
    image: CarlaoPereira,
    imageDescription: "foto de Carlos Pereira",
    bio: "Carlão é professor efetivo do IFSP (campus São Carlos), desde 2012. Possui doutorado em Geografia pela UNESP, no qual desenvolveu um software para produção e análise de informações geográficas com o auxílio de técnicas de computação inteligente (lógica Nebulosa e redes neurais artificiais). É mestre pela Escola Nacional de Ciências Estatísticas e Tecnólogo em Processamento de Dados pela Universidade Veiga de Almeida. Usuário de Linux desde 2005, colaborador e disseminador da filosofia do Software Livre. Vascaíno sofredor.",
    author: "Carlos Pereira (Carlão)",
    date: "23 de setembro",
    time: "08h30 - 11h30",
    link: "",
    vacancies: 30,
    location: "IFSP",
    description:
      "Este mini-curso apresentará uma breve história da filosofia do Software Livre e do surgimento do sistema operacional Linux, focando em seguida nos principais comandos para dominar o terminal e executar tarefas com agilidade e eficiência. Desde comandos básicos de navegação até operações mais avançadas, serão exploradas ferramentas essenciais para gestão de arquivos, instalação de programas, gerenciamento de processos, entre outros, de uma forma totalmente prática.",
    typeEvent: "Course",
    classification: "Free",
    status: "Available",
  },
  {
    name: "Introdução à Manufatura Aditiva e Impressão 3D: Do zero ao primeiro objeto",
    image: PedroNobile,
    imageDescription: "foto de Pedro Northon Nobile",
    bio: "Pedro Northon Nobile é formado em Ciência da Computação, com mestrado e doutorado também em Computação. É professor do IFSP, campus São Carlos. Sempre foi movido pela curiosidade desde a infância. Considerava desmontar um brinquedo e ver como funcionava mais interessante do que brincar com o mesmo. Esse espírito \"maker\" o fez ter interesse pelo mundo da manufatura aditiva com impressoras 3D.",
    author: "Pedro Northon Nobile",
    date: "23 de setembro",
    time: "08h30 - 11h30",
    link: "",
    vacancies: 30,
    location: "IFSP",
    description:
      "Este minicurso apresenta os fundamentos da fabricação aditiva e da impressão 3D de forma prática e acessível. O aluno aprenderá a diferenciar os principais processos de manufatura, conhecerá os tipos de impressoras FDM e as características dos filamentos mais utilizados no mercado (como PLA, ABS e PETG). Além disso, será introduzido ao ecossistema de criação e preparação de peças, passando pela modelagem básica e pelas configurações essenciais nos softwares fatiadores para transformar projetos virtuais em objetos reais.",
    typeEvent: "Course",
    classification: "Basic",
    status: "Available",
  },
  {
    name: "Introdução à Programação Funcional",
    image: AdenilsoSilmao,
    imageDescription: "foto de Adenilso da Silva Simão",
    bio: "É Professor Titular da Universidade de São Paulo, mestre e doutor pela USP, com pós-doutorado no Centre de Recherche Informatique de Montréal. Atua em Engenharia de Software, com ênfase em teste de software, métodos formais e linguagens de programação, além de pesquisas em Bioinformática. Na USP, exerceu funções de gestão acadêmica, incluindo a Vice-Diretoria do ICMC e a Pró-Reitoria Adjunta de Pós-Graduação.",
    author: "Adenilso da Silva Simão",
    date: "24 de setembro",
    time: "08h30 - 11h30",
    link: "",
    vacancies: 30,
    location: "IFSP",
    description:
      "O minicurso apresenta os principais conceitos da programação funcional e discute as razões que tornam esse paradigma relevante no contexto atual do desenvolvimento de software. Serão abordadas ideias como funções puras, imutabilidade, composição de funções e funções de ordem superior, com exemplos simples que ajudem a entender sua aplicação. O curso também mostra como conceitos funcionais aparecem em linguagens e práticas de programação contemporâneas.",
    typeEvent: "Course",
    classification: "Basic",
    status: "Available",
  },
  {
    name: "Visão computacional na pratica: explorando embeddings e auto-encoders",
    image: CaioDuran,
    imageDescription: "foto de Caio Bicudo Duran",
    bio: "Engenheiro de machine learning formado em Análise e Desenvolvimento de Sistemas no IFSP São Carlos.",
    author: "Caio Bicudo Duran",
    date: "22 de setembro",
    time: "08h30 - 11h30",
    link: "",
    vacancies: 30,
    location: "IFSP",
    description:
      "Como a busca por imagens do Google funciona? Como seu celular consegue identificar você e desbloquear a tela usando apenas algumas imagens do seu rosto? Como um aplicativo consegue identificar a espécie de um pássaro só pelo som que ele faz? Como a busca por imagens do Google funciona? Como seu celular consegue identificar você e desbloquear a tela usando apenas algumas imagens do seu rosto? Como um aplicativo consegue identificar a espécie de um pássaro só pelo som que ele faz?",
    typeEvent: "Course",
    classification: "Intermediary",
    status: "Available",
  },
  {
    name: "Arquitetura e boas práticas para aplicações Android: do app simples à arquitetura escalável",
    image: AlineTolentino,
    imageDescription: "foto de Aline Tolentino",
    bio: "Engenheira de Software Sênior, formada em Sistemas de Informação pela Universidade Federal de Ouro Preto (UFOP) e pós-graduada em Desenvolvimento de Sistemas para Dispositivos Móveis pelo Instituto Federal de São Paulo (IFSP). Atua com desenvolvimento Android nativo, com experiência em Kotlin, arquitetura de aplicações, qualidade de software e práticas de desenvolvimento voltadas a ambientes de grande escala. Atualmente, trabalha no Itaú Unibanco, atuando em arquitetura e evolução de aplicações mobile. Ao longo da carreira, também atuou na F1RST Digital Services, empresa do grupo Santander. Além da experiência profissional, atua  no compartilhamento de conhecimento, por meio de apresentações técnicas, mentorias e atividades de formação de desenvolvedores.",
    author: "Aline Tolentino",
    date: "23 de setembro",
    time: "08h30 - 11h30",
    link: "",
    vacancies: 30,
    location: "IFSP",
    description:
      "Neste minicurso, vamos partir de um aplicativo Android simples e funcional chamado Descubra, que realiza uma requisição a uma API pública da Wikipédia e apresenta na tela informações sobre um artigo aleatório. A atividade será construída de forma prática e colaborativa. Primeiro, vamos observar como uma API funciona e entender, por meio do Insomnia, quais dados o aplicativo irá consumir. Em seguida, partiremos de um projeto propositalmente simples, concentrado em uma única Activity, e exploraremos junto com os participantes os desafios que surgem quando uma aplicação começa a evoluir. A partir de situações práticas — como a necessidade de manter o estado da aplicação durante uma mudança de configuração, melhorar a organização do código e facilitar sua manutenção — vamos evoluir gradualmente o projeto, discutindo conceitos como ViewModel, gerenciamento de estados, separação de responsabilidades, Repository, interfaces, inversão de dependência, SOLID, entre outros. Também será discutido como uma arquitetura bem definida pode facilitar a evolução do produto. O objetivo não é apresentar uma arquitetura \"pronta\" ou uma receita para todos os aplicativos, mas mostrar, na prática, como problemas reais de um produto podem levar a decisões de arquitetura e como essas decisões ajudam a construir aplicações mais organizadas, testáveis e preparadas para evoluir.",
    typeEvent: "Course",
    classification: "Intermediary",
    status: "Available",
  },
  {
    name: "Testado por Quem? Quando a IA escreve o código e também os testes – Automatizando qualidade de software com agentes de IA",
    image: JoaoCaires,
    imageDescription: "foto de João Vitor Caires",
    bio: "QA Engineer com 8 anos de experiência em testes funcionais e automação (Playwright, Selenium, etc.). Atua no dia a dia Marlabs com metodologias ágeis e na integração de práticas de desenvolvimento guiadas por IA e MCPs.",
    author: "João Vitor de Caires",
    date: "24 de setembro",
    time: "08h30 - 11h30",
    link: "",
    vacancies: 30,
    location: "IFSP",
    description:
      "Como garantir a qualidade quando a IA programa e testa? Esse minicurso demonstra na prática a integração de agentes de IA (Claude Code, Playwright MCP, Jira, GitHub CLI) no ciclo de desenvolvimento, mostrando como transformar testes em métricas reais e onde o julgamento humano continua essencial.",
    typeEvent: "Course",
    classification: "Intermediary",
    status: "Available",
  },
];

export default programmingContent;