import { ITextProps, Text, VStack } from 'native-base'
import { TitleComponent } from './titleComponent'

interface CommentTextProps extends ITextProps {
    commentText: string
    authorInfo: string
}

export function CommentTextComponent({ commentText, authorInfo, ...otherProp }) {
    return (
        <VStack
            {...otherProp}
        >
            <Text
                color="gray.500"
                marginTop={5}
                marginBottom={3}
            >
                {commentText}
            </Text>
            <TitleComponent
                fontSize="md"
                textAlign="center"
                color="gray.800"
            >
                {authorInfo}
            </TitleComponent>
        </VStack>



    )
}