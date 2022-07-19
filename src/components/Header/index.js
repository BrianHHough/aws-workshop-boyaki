import { Flex, Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center">
      <Image
        alt="logo"
        src="https://static1.squarespace.com/static/6050e9a0cefe703b4f20dd0a/t/607bfbb73b6a633d0a8aa0e8/1618738104184/YouTube+Banner.png"
        padding={tokens.space.medium}
        height="200px"
        width="200px"
      />
    </Flex>
  );
}
