import { faker } from '@faker-js/faker';
const loginPageElements = require('../../fixtures/selectorsSQL.json');

describe("Sqlverifier login - UI", () => {
    it("User can't log in with old password", () => {
      
        let oldPasswordSQL = "Koko";
        let newPasswordSQL = faker.internet.password(10);
        let username = "Koko";

        cy.log("Generated new password:", newPasswordSQL);

        cy.visit("/");

        cy.loginSQL(username, oldPasswordSQL);
        cy.get(loginPageElements.entityMenu).should("exist");

        cy.changePasswordSQL(oldPasswordSQL, newPasswordSQL);
        cy.get(loginPageElements.accountMenu).click();
        cy.get(loginPageElements.logOutButton).click();
        cy.get('h4').should("exist");

        cy.loginSQL(username, oldPasswordSQL);
        cy.get('strong').should("exist");

        cy.get(loginPageElements.passwordField).clear().type(newPasswordSQL);
        cy.get(loginPageElements.signInButton).click();
        cy.changePasswordSQL(newPasswordSQL, oldPasswordSQL);
    });
});



