import React from "react";
import bgImage from "../assets/section-bg-4.jpg";
import { useForm } from "@mantine/form";
import { PasswordInput, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
// import { SlSocialTwitter } from "react-icons/sl";
import { ImTwitter } from "react-icons/im";

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
          <p className=" mt-3 mb-[20px] w-full text-end text-[#485da1] text-[13px] font-[500] ">Forget Password?</p>
          <div className=" flex flex-col gap-2 ">
            <button className=" w-[270px] flex items-center text-white rounded-md shadow bg-[#1877F2]">
              <MdFacebook className=" w-[24px] h-[24px] m-[8px]" />
              <p className=" pl-[12px] pr-[20px]">
                Continue with <span className=" font-[700] text-[16px] leading-5 tracking-[.25px]">Facebook</span>
              </p>
            </button>
            <button className=" w-[270px] flex items-center  rounded-md shadow ">
              <img
                src="data:image/png;base64,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"
                alt=""
                className=" w-[24px] h-[24px] m-[8px] bg-transparent"
              />

              <p className=" pl-[12px] pr-[24px]">
                Continue with <span className=" font-[700] text-[16px] leading-5 tracking-[.25px]">Google</span>
              </p>
            </button>
            <button className=" w-[270px]  flex items-center text-white rounded-md shadow bg-[#4AB3F4]">
              <ImTwitter className=" w-[24px] h-[24px] m-[8px]" />
              {/* <img className=" w-[24px] m-[8px]" src="data:image/png;base64,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" alt="" /> */}
              <p className=" pl-[12px] pr-[24px]">
                Continue with <span className=" font-[700] text-[16px] leading-5 tracking-[.25px]">Twitter</span>
              </p>
            </button>
          </div>
        </form>
        <hr className=" mt-[40px]"/>
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
