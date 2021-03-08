import LoginLogout from "./GravtyPages/LoginLogout";
import MemberEnrollment from "./GravtyPages/MemberEnrollment";
import BitCreation from "./GravtyPages/BitCreation";

describe("The Home Page", () => {
  it("load gravty ,login and logout ", () => {
    const home = new LoginLogout();
    home.visit();
    home.login();
    home.logout();
  });

  it("load gravty ,login ,add member and logout  ", () => {
    const Member = new MemberEnrollment();
    Member.AddMember();
  });

  it("load gravty ,createBit ,CancelBit ", () => {
    const Bit = new BitCreation();
    const home = new LoginLogout();
    Bit.BitCreation();
    home.logout();
    //ok
  });
});
