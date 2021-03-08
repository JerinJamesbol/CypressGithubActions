class LoginLogout {
  visit() {
    cy.fixture("login").then((login) => {
      var url = login.url;
      cy.visit(url);
    });
  }

  login() {
    cy.fixture("login").then((login) => {
      var loginForm = login.loginForm;
      cy.get(login.loginForm).within(() => {
        cy.get(login.EId)
          .should(login.attribute,login.atTypePlaceholder, "Username")
          .type(login.email);
        cy.get(login.PId)
          .should(login.attribute,login.atTypePlaceholder, "Password")
          .type(login.Password);
        cy.get(login.loginButton).click();
      });
    });
  }

  logout() {
    cy.fixture("login").then((login) => {
      cy.get(login.logoutButton).click();
      cy.contains(login.LogoutText)
        .should(login.attribute,login.atTypeClass,"ng-binding")
        .click();
    });
  }
}
export default LoginLogout;


