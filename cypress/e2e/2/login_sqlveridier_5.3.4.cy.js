const testData = require("../../fixtures/logindata.json");
const regData = require("../../fixtures/registrdata.json");

describe("LoginSqlverifier", () => {
    it("successfulLogin", () => {
        cy.loginSQL(Cypress.env('username'), Cypress.env('password'));
        cy.get('[data-cy="docsMenu"]').should('exist');              
    });

    it("unsuccessfulLogin", () => {
        testData.forEach((item) => {
            cy.loginSQL(item.username, item.password);
            cy.get('[data-cy="docsMenu"]').should('not.exist'); 
        });             
    });
});

describe("Registration", () => {
    it("successfulRegistration", () => {
        cy.registrSQL(
            Cypress.env('username1'),
            Cypress.env('newpassword1'),
            Cypress.env('newpassword2'),
            Cypress.env('email')
        );
        cy.get(".invalid-feedback").should('not.exist');              
    });

    it("unsuccessfulRegistration", () => {
        regData.forEach((item) => {
            cy.registrSQL(item.username1, item.newpassword1, item.newpassword2, item.email);
            cy.get(".invalid-feedback").should('exist');  
        });             
    });
});

