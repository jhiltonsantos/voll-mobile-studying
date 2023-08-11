import { VStack, Text, ScrollView, Card, Divider, Box } from 'native-base'
import { ImageLogoComponent } from '../../components/imageLogoComponent';
import { TitleComponent } from '../../components/titleComponent';
import { InputComponent } from '../../components/inputComponent';
import { ButtonComponent } from '../../components/buttonComponent';
import { CommentTextComponent } from '../../components/commentTextComponent';

import { comments } from '../../utils/commentsText';
import { CardSearchServiceComponent } from '../../components/cardSearchServiceComponent';

const MainTab = () => {
    return (
        <ScrollView
            flex={1}
            padding={5}
            background="white"
        >
            <ImageLogoComponent margin={0} />

            <TitleComponent
                marginTop={5}
                marginBottom={5}
                color="blue.500"
                fontSize="xl"
            >
                Boas-vindas!
            </TitleComponent>
            
            <CardSearchServiceComponent />

            <TitleComponent
                color="blue.800"
                textAlign="center"
                marginTop={5}
            >
                Depoimentos
            </TitleComponent>

            {comments.map((comment) => {
                return <ScrollView key={comment.id}>
                    <CommentTextComponent
                        commentText={comment.text}
                        authorInfo={comment.authorInfo}
                    />
                    <Divider marginTop={5} />
                </ScrollView>

            })}

            <Divider marginTop={10} marginBottom={5} />

        </ScrollView>
    )
}

export default MainTab;

