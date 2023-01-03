import Footer from "../../components/footer";
import Headerr from "../../components/header";
import Text from '../../components/text/paragraph';
import Label from "../../components/form/label";
import Input from "../../components/form/input";
import { MainWrapper, Anchor, Form } from "./style";
import { themes } from '../../style/theme';
import BrandButton from '../../components/buttons/brand';
import BrandOutlineButton from '../../components/buttons/brandOutline';


export default function Login() {

    const TextStyle = {
        color: `${themes.light.white[1]}`,
        fontWeight: `${themes.light.fontWeight[6]}`,
        fontSize: `${themes.light.fontSize[125]}`,
        fontFamily: `${themes.light.fontFamily['Lexend']}`,
    }

    const linkStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
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

                    <a style={linkStyle} link=''>Esqueci minha senha</a>

                    <BrandButton style={buttonStyle}> Entrar </BrandButton>

                    <Anchor>Ainda não tem sua conta? </Anchor>

                    <BrandOutlineButton style={buttonStyle}>Cadastrar</BrandOutlineButton>
                </Form>
            </MainWrapper>
            <Footer />
        </>
    );
};