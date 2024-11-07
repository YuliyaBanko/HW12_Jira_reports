Cypress.Commands.add('loginSQL', (username, password) => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/login');
    if (username) {
        cy.get('input[name="username"]').type(username);
    }
    if (password) {
        cy.get('input[name="password"]').type(password);
    }
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('registrSQL', (username, newpassword1, newpassword2, email) => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/account/register');

    if (username) {
        cy.get('input[name="username"]').type(username);
    }
    if (email) {
        cy.get('input[name="email"]').type(email);
    }
    if (newpassword1) {
        cy.get('input[name="firstPassword"]').type(newpassword1);
    }

    if (newpassword2) {
        cy.get('input[name="secondPassword"]').type(newpassword2);
    }
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('switchLanguage', (language, expectedText) => {
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.contains(language).click();
    cy.get(":nth-child(1) > .d-flex").should('have.text', expectedText);
});


Cypress.Commands.add('changePassword', (userNameSanta, newPassword) => {
    cy.contains(userNameSanta).click({force:true});
        cy.get('.layout-column-start > :nth-child(1) > .frm').type(newPassword);
        cy.get(':nth-child(4) > .form-page-group__main > .layout-column-start > :nth-child(2) > .frm').type(newPassword);
});

Cypress.Commands.add('changePasswordSQL', (oldPasswordSQL, newPasswordSQL) => {
    cy.get('[data-cy="accountMenu"] > .d-flex > span').click();
    cy.get('[data-cy="passwordItem"] > span').click();
    cy.get('[data-cy="currentPassword"]').type(oldPasswordSQL);
    cy.get('[data-cy="newPassword"]').type(newPasswordSQL);
    cy.get('[data-cy="confirmPassword"]').type(newPasswordSQL);
    cy.get('[data-cy="submit"] > span').click();
});

