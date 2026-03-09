describe('Globoplay - Criar conta', () => {
  it('Acessar o site do Globoplay', () => {
    cy.visit('https://globoplay.globo.com')
    cy.get('.gplay-button--sales').should('have.text', 'Assine já').click({force: true})
  })
})

 it('Acessar página de assinatura', () => {
  cy.visit('https://globoplay.globo.com/assine', {
    timeout: 120000,
    failOnStatusCode: false
  })

  cy.contains('Compare os planos', { timeout: 30000 })
    .should('be.visible').click({force: true})
    cy.get('.types--default.vtr-button.vtr-input')
  .first()
  .should('contain.text', 'Adicionar na sacola')
  cy.get('.header__menu.show-mobile').click()
})

it('Acessar página de cadastro', () => {
  cy.visit('https://authx.globoid.globo.com/7120/login?url=https%3A%2F%2Fgoidc.globo.com%2Fauth%2Frealms%2Fglobo.com%2Fprotocol%2Fopenid-connect%2Fconfirm%3Fclient_id%3Dcheckout-vendas-web-nova-org%40apps.globoid%26response_type%3Dcode%26state%3Dcheckout-vendas-web-nova-org%40apps.globoid%26tab_id%3DSlk3n6XK9DB%26redirect_uri%3Dhttps%3A%2F%2Fcheckout-multiline-v2.sales.globo.com%2Fcheckout%2Fcallback-oidc%26prompt%3Dnone%26scope%3Dopenid+profile+phone+doc-number+email%26nonce%3D9b1c8e5e-7a0c-4d9b-8f1e-2a1b2c3d4e5f')
  cy.contains('Criar Conta Globo grátis', { matchCase: false }).click({force: true})
  cy.get('input[placeholder="Informe o seu nome completo"]').type('Pedro Victor Lima de Freitas')
  cy.get('input[placeholder="Ex: @gmail, @outlook, @yahoo, etc."]').type('contatohanabi1@gmail.com')
  cy.get('input[placeholder="dd/mm/aaaa"]').type('14/02/2002')
  cy.get('input[placeholder="000.000.000-00"]').type('516.425.508.17')
  cy.get('input[placeholder="Informe seu telefone ou celular"]').type('11991936842')
  })