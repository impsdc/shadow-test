import { Box, Flex, Text } from "@chakra-ui/react";
import Loader from "./Loader";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    title?: string;
    children?: JSX.Element[];
    loading?: boolean;
    fallbackText?: string;
}

export const ItemList = (props: Props) => {
    const items = props.children?.map((item, index) => (
        <Flex key={uuidv4()} width={[1, 2, 2, 3]} p={2}>
            {item}
        </Flex>
    ));

    return props.loading ? (
        <Loader />
    ) : (
        <Flex w={1} justifyContent="center" alignItems="center" flexDirection="column">
            {props.title ? (
                <Box pt={2}>
                    <Text as="h1" fontWeight="semibold">{`« ${props.title} »`}</Text>
                </Box>
            ) : null}
            <Flex w={1} flexWrap="wrap">
                {(items || []).length > 0 ?
                    items :
                    props.loading && (
                    <Flex py={5} w={1} justifyContent="center" alignItems="center">
                        <Text as="h1">{props.fallbackText || "Aucuns résultats"}</Text>
                    </Flex>
                      )}
            </Flex>
        </Flex>
    );
};

export default ItemList;
