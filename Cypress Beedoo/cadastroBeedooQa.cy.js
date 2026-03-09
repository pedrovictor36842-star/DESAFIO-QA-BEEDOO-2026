const Chance = require('chance');
const chance = new Chance();

const nomesBR = ['Ana Silva', 'Bruno Santos', 'Carla Oliveira', 'Daniel Souza', 'Eduarda Pereira', 'Felipe Lima'];
const palavrasBR = ['Curso Ingles', 'Curso QA', 'Curso Espanhol', 'Curso Matematica', 'Curso banco de dados'];
const frasesBR = [
    'Domine o idioma mais falado do mundo com aulas práticas focadas em conversação e escrita técnica para o mercado de trabalho.',
    'Reforce seu raciocínio lógico e aprenda conceitos fundamentais de matemática aplicada, preparando-se para desafios acadêmicos e profissionais',
    'Desenvolvimento de aplicações escaláveis usando tecnologias modernas.',
    'Gestão de projetos ágeis para times de alta performance.'
];

const gerarDados = () => {
    const dataAleatoria = chance.date({ year: 2026 });
    const dataISO = dataAleatoria.toISOString().split('T')[0];

    return {
        nome: chance.pickone(nomesBR),
        palavra: chance.pickone(palavrasBR), 
        frase: chance.pickone(frasesBR),     
        endereco: chance.address(),
        URL: chance.avatar({ fileExtension: 'jpg' }),
        data: dataISO
    };
};

describe('Cadastrar Curso Beedoo', () => {
  it('Criar um novo curso', () => {
    const dados = gerarDados(); 

    cy.visit('https://creative-sherbet-a51eac.netlify.app/');
    
    cy.contains('Cadastrar', { matchCase: false, timeout: 10000 }).click();
    
    cy.get('[aria-label="Nome do curso"]').clear().type(dados.palavra);
    cy.get('[aria-label="Descrição do curso"]').clear().type(dados.frase);
    cy.get('[aria-label="Instrutor"]').clear().type(dados.nome);
    cy.get('[aria-label="Url da imagem de capa"]').clear().type(dados.URL);
    cy.get('[aria-label="Data de início"]').clear().type(dados.data);
    cy.get('[aria-label="Data de fim"]').clear().type(dados.data);
    cy.get('[aria-label="Número de vagas"]').clear().type('100');
    cy.get('[aria-label="Tipo de curso"]').click();
    cy.contains('.q-item', 'Presencial', { timeout: 5000 }).click();
    cy.get('[aria-label="Endereço"]').type(dados.endereco);

  })
})