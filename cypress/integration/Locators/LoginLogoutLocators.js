class LoginLogoutLocators {
	getLoginContainer() {
	        cy.wait(1000)
		return cy.get('.login-container');
	}
	getEmail() {
		return cy.get('input:first').should('have.attr', 'placeholder', 'Username').type('shyam.shah@bankofloyal.com')
    }
	getPassword() {
		return cy.get('input:last').should('have.attr', 'placeholder', 'Password').type('I-07a1fddafedasedfggddfdc')
    }
	getGravty() {
		return cy.visit("https://regression.qav2.gravtee.com")
	}
	getLoginButton() {
		return cy.get('#login');
	}
	getLogoutButton() {
		return cy.get('.header-button-user')
	}
	getLogout() {
		return cy.contains('Logout').should('have.attr', 'class', 'ng-binding')
	}
	getMemberSideIcon() {
    	return cy.get('.sidebar-icon-members')
    }
    getAddMemberButton() {
        return cy.get('.add-nmember')
    }
    getMemberEmail() {
        return cy.get(':nth-child(2) > .field')
    }
    getMemberContact() {
	    return cy.get(':nth-child(3) > .field')
    }
    getFirstName() {
      	return cy.get(':nth-child(4) > .field')
    }
    getLastName() {
        return cy.get(':nth-child(5) > .field')
    }
     getCalender() {
        return cy.get('.input-group-addon > #picker-new_4')
    }
     getCurrentDate() {
        return cy.get('.today')
    }
    getEnrollButton() {
       return cy.get('.button-go')
    }
        getEnrollOK() {
    return cy.get('[ng-show="memberExists===false&&emailExists===false"] > .btn')
}
}
export default LoginLogoutLocators