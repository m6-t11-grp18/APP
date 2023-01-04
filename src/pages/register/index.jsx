import Footer from "../../components/footer";
import Headerr from "../../components/header";
import { MainWrapper, Form, Div, LabelCompartilhada } from "./style";
import Text from '../../components/text/paragraph';
import Label from "../../components/form/label";
import Input from "../../components/form/input";
import { themes } from '../../style/theme';
import { useNavigate } from "react-router-dom";
import BrandButton from '../../components/buttons/brand';

export default function Register() {

    let navigate = useNavigate();
    const handleButtonRegister = () => {
        navigate(`/login`);
    };

    const TextStyle = {
        color: `${themes.light.white[1]}`,
        fontWeight: `${themes.light.fontWeight[6]}`,
        fontSize: `${themes.light.fontSize[125]}`,
        fontFamily: `${themes.light.fontFamily['Lexend']}`,
    }

    const TextStyle2 = {
        color: `${themes.light.white[1]}`,
        fontWeight: `${themes.light.fontWeight[6]}`,
        fontSize: `${themes.light.fontSize[100]}`,
        fontFamily: `${themes.light.fontFamily['Lexend']}`,
    }

    const buttonStyle = {
        width: '100%',
        height: '40px',
    }

    const buttonStyle2 = {
        width: '45%',
        height: '40px',
    }
    return (
        <>
            <Headerr />
            <MainWrapper>
                <Form>
                    <Text style={TextStyle}>Cadastro </Text>
                    <Text style={TextStyle2}>Informações pessoais </Text>

                    <Label>Nome</Label>
                    <Input placeholder='Ex: Samuel Leão' />

                    <Label>Email</Label>
                    <Input placeholder='Ex: samuel@kenzie.com' />

                    <Label>CPF</Label>
                    <Input placeholder='000.000.000-00' />

                    <Label>Celular</Label>
                    <Input placeholder='(DDD) 90000-0000' />

                    <Label>Data de Nascimento</Label>
                    <Input placeholder='00/00/00' />

                    <Label>Descrição</Label>
                    <Input placeholder='Digitar descrição' />

                    <Text style={TextStyle2}>Informações de Emdereço</Text>

                    <Label>CEP</Label>
                    <Input placeholder='00000.000' />

                    <Div>
                        <LabelCompartilhada>
                            <Label>Estado</Label>
                            <Input placeholder='Digitar estado' />
                        </LabelCompartilhada>
                        <LabelCompartilhada>
                            <Label>Cidade</Label>
                            <Input placeholder='Digitar cidade' />
                        </LabelCompartilhada>
                    </Div>

                    <Label>Rua</Label>
                    <Input placeholder='Digitar rua' />

                    <Div>
                        <LabelCompartilhada>
                            <Label>Número</Label>
                            <Input placeholder='Digitar número' />
                        </LabelCompartilhada>
                        <LabelCompartilhada>
                            <Label>Complemento</Label>
                            <Input placeholder='Ex: apto 307, torre 2' />
                        </LabelCompartilhada>
                    </Div>

                    <Text style={TextStyle2}>Tipo de conta</Text>

                    <Div>
                        <BrandButton
                            style={buttonStyle2}
                        >   Comprador </BrandButton>

                        <BrandButton
                            style={buttonStyle2}
                        > Anunciante </BrandButton>
                    </Div>

                    <Label>Senha</Label>
                    <Input placeholder='Digitar senha' />

                    <Label>Confirmar Senha</Label>
                    <Input placeholder='Digitar senha novamente' />

                    <BrandButton
                        style={buttonStyle}
                        onClick={handleButtonRegister}
                    > Finalizar Cadastro </BrandButton>

                </Form>
            </MainWrapper>
            <Footer />
        </>
    )
}