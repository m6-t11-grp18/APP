import * as yup from "yup";

const validateUpperCase = "^(?=.*[A-Z])";
const validateLowerCase = "^(?=.*[a-z])";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Campo obrigatório!")
        .matches(validateUpperCase, "Digite apenas letras")
        .matches(validateLowerCase, "Digite apenas letras"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
    cpf: yup.number().required("Campo obrigatório!"),
    phone: yup.number().required("Campo obrigatório!"),
    data_nasc: yup.number().required("Campo obrigatório!"),
    description: yup.string(),
    cep: yup.number().required("Campo obrigatório!"),
    state: yup.string().required("Campo obrigatório!"),
    city: yup.string().required("Campo obrigatório!"),
    street: yup.string().required("Campo obrigatório!"),
    numberStreet: yup.number().required("Campo obrigatório!"),
    complement: yup.string(),
    password: yup
        .string()
        .required("Campo obrigatório!")
        .min(8, "Senha incompativel: mínimo 8 caracteres")
        .matches(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])",
            "Senha incompativel: necessário conter letras (maiúsculas e minúsculas), caracteres especiais e números"
        ),
    confirmPassword: yup
        .string()
        .required("Campo obrigatório!")
        .oneOf([yup.ref("password"), null], "Senhas não conferem"),

});

export default formSchema;