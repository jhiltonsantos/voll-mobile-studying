import { Text, ITextProps } from 'native-base';
import { ReactNode } from 'react';

interface TitleProps extends ITextProps {
    children: ReactNode
}

export function TitleComponent({ children, ...otherProps }: TitleProps) {
    return (
        <Text
            fontSize="2xl"
            fontWeight="bold"
            color="gray.500"
            {...otherProps}
        >
            {children}
        </Text>
    )
}