import styled from "styled-components";
import Branding from "./Branding";
import { useNavigate } from "react-router-dom";
import { MdAttachMoney, MdOutlineSpaceDashboard } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { RiGovernmentLine } from "react-icons/ri";
import { AiOutlineInfo } from "react-icons/ai";

const Container = styled.div`
  background-color: var(--color2);
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Left = styled.div`
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--translucentInteraction);
`;

const Right = styled.div`
  width: 70vw;
  height: 100vh;
  overflow-y: auto;
  background-color: #fff;
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color1);
  width: 100%;
  padding: 20px 20px;
  border-radius: 10px 10px 0 0;
  padding-left: 0;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const UserInfoMain = styled.div`
  display: flex;
  flex-direction: row;

  width: 70%;
  gap: 20px;
  align-items: center;
`;

const UserInfoLeft = styled.div``;

const UserImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 100px;
`;

const UserInfoRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const NameOfUser = styled.div`
  text-transform: capitalize;
  font-weight: 900;
  font-size: 25px;
`;

const LogoutButton = styled.div`
  text-decoration: underline;
  opacity: 0.7;
  cursor: pointer;
`;

export default function Header({ children }) {
  let loggedInUser = localStorage.getItem("farmsenseUser");
  loggedInUser = JSON.parse(loggedInUser);

  return (
    <Container>
      <Left>
        <Branding />
        <Bottom>
          <Navigation>
            <Nav path="/" icon={<MdOutlineSpaceDashboard />}>
              Dashboard
            </Nav>
            <Nav path="/predict" icon={<MdAttachMoney />}>
              Predict Cost
            </Nav>
            <Nav path="/tips" icon={<IoBulbOutline />}>
              Tips for better practice
            </Nav>
            <Nav path="/government-schemes" icon={<RiGovernmentLine />}>
              Government Launched Schemes
            </Nav>
            <Nav path="/about-us" icon={<AiOutlineInfo />}>
              About Us
            </Nav>
          </Navigation>
          <UserInfo>
            <UserInfoMain>
              <UserInfoLeft>
                <UserImage src="/default-profile.png" />
              </UserInfoLeft>
              <UserInfoRight>
                <NameOfUser>{loggedInUser.name}</NameOfUser>
                <LogoutButton onClick={logout}>Logout</LogoutButton>
              </UserInfoRight>
            </UserInfoMain>
          </UserInfo>
        </Bottom>
      </Left>
      <Right>{children}</Right>
    </Container>
  );

  function logout() {
    localStorage.removeItem("farmsenseUser");
    window.location = "/";
  }
}

const NavContainer = styled.div`
  /* margin-left: 50px; */
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-size: 31px;
  align-items: center;
  color: var(--color1);
  font-weight: 900;
  padding: 15px;
  width: 70%;
  border-radius: 10px;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  background-color: var(--translucentInteraction);
  cursor: pointer;
  &:hover {
    background-color: var(--color3);
  }
`;
const NavIcon = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: var(--color1) !important;
`;
const NavLabel = styled.div`
  font-size: 19px;
  font-weight: 600;
  color: var(--color1);
`;

function Nav({ path, icon, children }) {
  const navigate = useNavigate();

  return (
    <NavContainer
      onClick={() => {
        navigate(path);
      }}
    >
      <NavIcon>{icon}</NavIcon>
      <NavLabel>{children}</NavLabel>
    </NavContainer>
  );
}
