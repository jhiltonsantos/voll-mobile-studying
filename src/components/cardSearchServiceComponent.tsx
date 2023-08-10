import { Box } from "native-base";
import { InputComponent } from "./inputComponent";
import { ButtonComponent } from "./buttonComponent";

export function CardSearchServiceComponent() {
    return (
        <Box
            width="100%"
            paddingLeft={3}
            paddingRight={3}
            paddingBottom={6}
            shadow={1}
            borderBottomRadius="lg"
            borderRightRadius="md"
        >
            <InputComponent labelText='' placeholderText='Digite a especialidade' />
            <InputComponent labelText='' placeholderText='Digite sua localização' />
            <ButtonComponent buttonText='Buscar' marginTop={5} />
        </Box>
    )
}