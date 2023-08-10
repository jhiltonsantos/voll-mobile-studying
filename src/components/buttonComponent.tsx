import { Button, ITextProps } from "native-base"

interface ButtonProps extends ITextProps {
    buttonText: string
}

export function ButtonComponent({ buttonText, ...otherProps }: ButtonProps) {
    return (
        <Button
            width='100%'
            backgroundColor="blue.800"
            marginTop={10}
            borderRadius="lg"
            {...otherProps}
        >
            {buttonText}
        </Button>
    )

}
