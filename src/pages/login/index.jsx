import Footer from "../../components/footer";
import Headerr from "../../components/header";
import Text from '../../components/text/paragraph';
import Label from "../../components/form/label";
import Input from "../../components/form/input";
import { MainWrapper, Anchor, Form } from "./style";
import { themes } from '../../style/theme';
import BrandButton from '../../components/buttons/brand';
import BrandOutlineButton from '../../components/buttons/brandOutline';
import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";

export default function Login() {

    let navigate = useNavigate();

    const handleButtonEnter = () => {
        navigate(`/`);
    };

    const handleButtonRegister = () => {
        navigate(`/register`);
    };

    const TextStyle = {
        color: `${themes.light.white[1]}`,
        fontWeight: `${themes.light.fontWeight[6]}`,
        fontSize: `${themes.light.fontSize[125]}`,
        fontFamily: `${themes.light.fontFamily['Lexend']}`,
    }

    const linkStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'pointer',
    }

    const buttonStyle = {
        width: '100%',
        height: '40px',
    }

    return (
        <>
            <Headerr />
            <MainWrapper
                id="top">
                <Form>
                    <Text style={TextStyle}>Login </Text>

                    <Label>Usuário</Label>
                    <Input placeholder='Digite seu usuário aqui' />

                    <Label>Senha</Label>
                    <Input placeholder='Digite sua senha aqui' />

                    <Link style={linkStyle}> Esqueci minha senha</Link>

                    <BrandButton
                        style={buttonStyle}
                        onClick={handleButtonEnter}
                    > Entrar </BrandButton>

                    <Anchor>Ainda não tem sua conta? </Anchor>

                    <BrandOutlineButton
                        style={buttonStyle}
                        onClick={handleButtonRegister}
                    > Cadastrar
                    </BrandOutlineButton>
                </Form>
            </MainWrapper>
            <Footer />
        </>
    );
};