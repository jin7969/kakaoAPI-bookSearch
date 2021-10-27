import { KAKAO_AUTH_URL } from "./oauth";
import styled from "styled-components";

function Login() {
  return (
    <Kakao href={KAKAO_AUTH_URL}>
      <img src="kakao.png" alt="" />
    </Kakao>
  );
}
export default Login;

const Kakao = styled.a`
  & :hover {
    transform: scale(1.05);
  }
`;
