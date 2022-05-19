import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { boolean } from "yup";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Rozalem</Text>
          <Text color="gray.300" fontSize="small">
            lrozalem@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Lucas Rozalem" src="linkgit" />
    </Flex>
  );
}
