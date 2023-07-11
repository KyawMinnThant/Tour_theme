import React from "react";
import bgImage from "../assets/section-bg-4.jpg";
import { useForm } from "@mantine/form";
import { PasswordInput, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    // h-[342.19px] md:h-[350.39px] lg:h-[448.38px]
    //
    <>
      <div
        className=" heightForBg bg-cover  bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          id="one"
          className="flex h-full  items-center max-w-[450px] md:w-full px-[15px] md:max-w-[1180px] mx-auto"
        >
          <div className="lg:mt-[10%] leading-extra-loose  animate__backInLeft animate__animated">
            <h1 className=" mx-[15px]  text-white     text-[42px] font-bold tracking-wide ">
              Login
            </h1>
          </div>
        </div>
      </div>
      <div className=" md:w-full max-w-[500px]    md:max-w-[1180px] mx-auto mb-[50px] mt-10 px-[30px]">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <div className=" grid grid-cols-1 gap-[30px]">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              <TextInput
                label="Username or E-Mail"
                size="md"
                {...form.getInputProps("email")}
                // style={{ height: "20px" }}
                // style={{ height: '48px' }}
              />
              <PasswordInput
                label="Password"
                size="md"
                {...form.getInputProps("password")}
              />
            </div>
            <div>
              <button
                type="submit"
                className=" w-full text-[12.5px] font-[600]  bg-[#485DA1] py-[15px] text-white"
              >
                SIGN IN!
              </button>
            </div>
          </div>
          <p className=" mt-3 w-full text-end">Forget Password?</p>
        </form>
        <hr />
        <div>
          <h1 className=" text-center mb-[12px] mt-[32px] font-[700]">
            DO NOT HAVE AN ACCOUNT?
          </h1>
          <Link to={"/register"}>
            <p className=" text-center text-blue-600 hover:text-blue-400 text-xs font-[500]">
              CREATE AN ACCOUNT
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
