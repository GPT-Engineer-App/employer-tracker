import { useState } from "react";
import { Container, VStack, Input, Button, Text, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [employer, setEmployer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && employer) {
      setSubmitted(true);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {submitted ? (
        <Icon as={FaCheckCircle} w={24} h={24} color="green.500" />
      ) : (
        <VStack spacing={4} width="100%">
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Current Employer" value={employer} onChange={(e) => setEmployer(e.target.value)} />
          <Button colorScheme="teal" onClick={handleSubmit}>
            Submit
          </Button>
        </VStack>
      )}
    </Container>
  );
};

export default Index;
