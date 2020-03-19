context('Window', () => {

  it('cy.title() - get the title', () => {
    cy.visit('/')
    cy.title().should('include', 'Bungalows Puerta del Sol')
  })


  it("Check page content", () => {
      cy.contains("Relajate")
      cy.contains("Habitación Estándar")
      cy.contains("Habitación Doble")
      cy.contains("Habitación Duplex")
  })

  it("Check button", () => {
      cy.get('.button').click()
      cy.contains("Habitación Estándar")
      cy.contains("Habitación Doble")
      cy.contains("Habitación Duplex")
  })
})
