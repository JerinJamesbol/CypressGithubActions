import LoginLogout from "./LoginLogout";

class BitCreation {
  BitCreation() {
    cy.fixture("login").then((login) => {
      const Login = new LoginLogout();
      Login.login();
      cy.wait(1000);
      cy.get(login.SideIcon).click();
      cy.wait(1000);
      cy.get(login.SelectMember).select("email");
      cy.get(login.SelectOption).select("matches");
      cy.get(login.SelectFilter).type(login.SearchEmail);
      cy.wait(1000);
      this.CreateCancelBit();
    });
  }
  CreateCancelBit() {
    cy.fixture("login").then((login) => {
      cy.get(login.findMember).click();
      cy.get(login.createBitButton).click();
      cy.get(login.selectService).select("Service");
      cy.get(login.selectService).select("Membership Cancellation");
      cy.get(login.Cancel).click();
      cy.get(login.SideIcon).click();
    });
  }
}
export default BitCreation;
