import { ButtonReturn, ContainerSuccess, ImgThanks, TextSuccess } from "./style";
import ImageThanks from '../../assets/ThanksIcon.svg' 
import { Link } from "react-router-dom";

export function SuccessOrder() {
    return(
        <ContainerSuccess>
            <TextSuccess>
                Compra realizada com sucesso!
            </TextSuccess>
            <ImgThanks src={ImageThanks} alt='thank you'/> 
            <Link to="/">
                <ButtonReturn>Voltar</ButtonReturn>
            </Link>
        </ContainerSuccess>
    )
}