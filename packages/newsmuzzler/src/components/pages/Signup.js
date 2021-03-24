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

import Background from "../../assets/bg/Background.svg";
import Logo from "../../assets/icons/NewsMuzzlerAppIcon.svg";

import FormInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import WiPModal from "../sections/WiPModal";
import Checkbox from "../common/CheckboxTerms";

import { Auth } from "aws-amplify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CheckboxTerms from "../common/CheckboxTerms";

export default function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [error, setError] = useState("");

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Username required"),
    password: Yup.string()
      .min(9, "Password must be 8 characters long!")
      .max(25, "Too Long!")
      .required("Password required"),
    confirmpassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
    terms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
    email: Yup.string().email("Invalid email").required("Email required"),
  });
  let history = useHistory();

  async function signUp({ username, password, email }) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log("sucessful signing up");
      console.log(user);
      history.push("/terms");
    } catch (error) {
      setError(error);
      console.log("error signing up:", error);
    }
  }

  return (
    <Box
      pt={150}
      pb={240}
      px={287}
      style={{ backgroundImage: `url(${Background})` }}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box bg="white" width="100%" direction="column">
        <Image position="absolute" pl="24px" pt="24px" src={Logo} size="40px" />

        <Flex
          pt="24px"
          direction="row"
          justifyContent="center"
          position="relative"
        >
          <Heading as="b" fontSize="28px">
            Signup with Prifina
          </Heading>
        </Flex>

        <Flex pt="4.5px" direction="row" justifyContent="center">
          <Text fontSize="16px" fontWeight="600" color="#595959">
            Reroute your newsletters via anonymized email to your normal email.
          </Text>
        </Flex>

        <Flex display="flex" flexDirection="column" alignItems="center">
          <Box w="281px">
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, actions) => {
                signUp(values);
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
                    <Form>
                      <Field
                        name="username"
                        type="text"
                        onChange={props.handleChange}
                        value={props.values.username}
                        title="username"
                        component={FormInput}
                        fieldName="username"
                      />
                      {props.errors.username && props.touched.username ? (
                        <div style={{ color: "red" }}>
                          {props.errors.username}
                        </div>
                      ) : null}

                      <Field
                        name="password"
                        type="password"
                        onChange={props.handleChange}
                        value={props.values.password}
                        title="password"
                        fieldName="password"
                        component={PasswordInput}
                      />
                      {props.errors.password && props.touched.password ? (
                        <div style={{ color: "red" }}>
                          {props.errors.password}
                        </div>
                      ) : null}

                      <Field
                        name="confirm password"
                        type="password"
                        onChange={props.handleChange}
                        value={props.values.password}
                        title="confirm password"
                        fieldName="confirmpassword"
                        component={PasswordInput}
                      />
                      <span class="error" style={{ color: "red" }}>
                        {props.errors.confirmpassword}
                      </span>

                      <Field
                        name="email"
                        type="email"
                        onChange={props.handleChange}
                        value={props.values.email}
                        title="email"
                        fieldName="email"
                        component={FormInput}
                      />
                      {props.errors.email && props.touched.email ? (
                        <div style={{ color: "red" }}>{props.errors.email}</div>
                      ) : null}

                      <Box class="checkbox" pt="21px">
                        <Field
                          name="terms"
                          fieldName="terms"
                          w="314px"
                          text="I accept NewsMuzzler’s Terms & Conditions."
                          component={CheckboxTerms}
                        />
                        {/* {!!props.errors.terms ? (
                          <div style={{ color: "red" }}>
                            {props.errors.terms}
                          </div>
                        ) : null} */}
                      </Box>
                    </Form>
                  </Box>

                  {/* <Link as={ReachLink} to="/terms"> */}
                  <Flex pt="24px" justifyContent="center">
                    <Button
                      w="281px"
                      variantColor="purpleBright"
                      type="submit"
                      isLoading={props.isSubmitting}
                    >
                      SIGN UP
                    </Button>
                  </Flex>
                  {/* </Link> */}
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
              Already have an account?
            </Text>
            <Link
              as={ReachLink}
              to="/login"
              pl="8px"
              fontSize="14px"
              fontWeight="600"
            >
              LOG IN.
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
