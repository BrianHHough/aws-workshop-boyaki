import {
    Authenticator,
    Flex,
    Grid,
    Image,
    useTheme,
    View
  } from "@aws-amplify/ui-react";
  
  import { Header } from "../Header";
  import { Footer } from "../Footer";
  import { SignInHeader } from "../SignInHeader";
  import { SignInFooter } from "../SignInFooter";

  import "../../App.css";
  import "../../index.css";

  import CircuitPhoto from "../../assets/computer-glow.avif"
  
  const components = {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  };
  
  export function Login() {
    const { tokens } = useTheme();
  
    return (
      <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
        <Flex
          backgroundColor="#0f0c29"
          justifyContent="center"
        >
          <Authenticator components={components}>
            {({ signOut, user }) => (
              <main style={{color: "white"}}>
                <h1>Hello, {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
          </Authenticator>
        </Flex>
        
        <View height="100vh" style={{overflowY: "hidden"}}>
          <Image
            src={CircuitPhoto}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
    );
  }
  