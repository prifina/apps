import React, { useState } from "react";
import { Link as ReachLink, useHistory } from "react-router-dom";

import {
  Flex,
  Image,
  Button,
  Box,
  Text,
  Heading,
  Link,
  useDisclosure,
  Modal,
} from "@chakra-ui/core";

//fix heroku

import Background from "../../assets/bg/Background.svg";
import Logo from "../../assets/icons/NewsMuzzlerAppIcon.svg";

import FormInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import WiPModal from "../sections/WiPModal";

import { Auth } from "aws-amplify";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let history = useHistory();

  const [error, setError] = useState("");

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username required"),
    password: Yup.string().required("Password required"),
  });

  async function signIn(username, password) {
    try {
      const user = await Auth.signIn(username, password);
      console.log("success");
      console.log(user);
      history.push("/dashboard");
    } catch (error) {
      setError(error);
      console.log("error signing in", error);
    }
  }

  return (
    <Box
      pt={[0, 10, 15, 150]}
      pb={[0, 10, 15, 459]}
      px={[0, 20, 50, 287]}
      style={{ backgroundImage: `url(${Background})` }}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box
        bg="white"
        width={[
          "25%", // base
          "50%", // 480px upwards
          "75%", // 768px upwards
          "100%", // 992px upwards
        ]}
        direction="column"
      >
        {/* fix the flow of the Link in dependance of position absolute */}
        <Link as={ReachLink} to="/dashboard">
          <Box>
            <Image
              position="absolute"
              pl="24px"
              pt="24px"
              src={Logo}
              size="40px"
            />
          </Box>
        </Link>
        <Flex
          pt="24px"
          direction="row"
          justifyContent="center"
          position="relative"
        >
          <Heading as="b" fontSize="28px">
            Login with Prifina
          </Heading>
        </Flex>

        <Flex display="flex" flexDirection="column" alignItems="center">
          <Box w="281px">
            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values, actions) => {
                signIn(values);
                setTimeout(() => {
                  // alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <Box w="249px">
                    <Box pt="15px" style={{ color: "red" }}>
                      {error.message}
                    </Box>
                    <Field
                      type="text"
                      onChange={props.handleChange}
                      value={props.values.username}
                      title="username"
                      name="username"
                      fieldName="username"
                      component={FormInput}
                    />
                    {props.errors.username && props.touched.username ? (
                      <div style={{ color: "red" }}>
                        {props.errors.username}
                      </div>
                    ) : null}

                    <Field
                      type="password"
                      onChange={props.handleChange}
                      value={props.values.password}
                      title="password"
                      name="password"
                      fieldName="password"
                      component={PasswordInput}
                    />
                    {props.errors.password && props.touched.password ? (
                      <div style={{ color: "red" }}>
                        {props.errors.password}
                      </div>
                    ) : null}
                  </Box>

                  <Flex pt="8px" w="281px" justifyContent="flex-end">
                    <Link fontSize="12px" fontWeight="400">
                      Forgot password?
                    </Link>
                  </Flex>
                  <Flex class="button" pt="24px" justifyContent="center">
                    {/* <Link as={ReachLink} to="/dashboard"> */}
                    <Button
                      variantColor="purpleBright"
                      type="submit"
                      isLoading={props.isSubmitting}
                    >
                      LOGIN
                    </Button>
                    {/* </Link> */}
                  </Flex>
                </form>
              )}
            </Formik>
          </Box>

          <Box pt="24px" as="u">
            <Link onClick={onOpen} fontSize="14px" fontWeight="600">
              What is Prifina?
            </Link>
            <Modal
              size="900px"
              width={[
                "100%", // base
                "50%", // 480px upwards
                "25%", // 768px upwards
                "15%", // 992px upwards
              ]}
              position="relative"
              isOpen={isOpen}
              onClose={onClose}
            >
              <WiPModal />
            </Modal>
          </Box>
          <Flex pt="12px" pb="24px" flexDirection="row">
            <Text margin="0px" fontSize="14px" fontWeight="400">
              Don’t have a Prifina account?
            </Text>
            <Link
              as={ReachLink}
              to="/signup"
              pl="8px"
              fontSize="14px"
              fontWeight="600"
            >
              SIGN UP.
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
