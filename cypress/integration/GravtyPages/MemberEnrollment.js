import LoginLogout from './LoginLogout';

class MemberEnrollment {
AddMember(){
 const Login=new LoginLogout();
    cy.fixture("login").then((login) => {
        Login.visit();
        Login.login();
        cy.wait(1000)
        cy.get(login.SideIcon).click();
        cy.wait(1000)
        cy.get(login.AddMemberButton).click();
        cy.get(login.MemberEmail).type(login.enrolEmail)
        cy.get(login.MemberContact).type(login.enrolContact)
        cy.get(login.firstName).type(login.fname)
        cy.get(login.lastName).type(login.lname)
        cy.get(login.calender).click();
        cy.get(login.CurrentDate).click();
        cy.get(login.enroll).click();
        cy.get(login.enrollOk).click();
        Login.logout();
})
}
}
 export default MemberEnrollment;


