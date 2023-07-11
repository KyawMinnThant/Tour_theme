import {
  NativeSelect,
  NumberInput,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import bgImage from "../assets/section-bg-4.jpg";
import { useForm } from "@mantine/form";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import { countries } from "countries-list"; // Import the countries-list library
import { IconChevronDown } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Register = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const countryList = Object.values(countries); // Get an array of all countries
  const countryOptions = countryList.map((country) => country.name);
  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate options for the date (1-31)
  const dateOptions = Array.from({ length: 31 }, (_, index) => `${index + 1}`);
  console.log(dateOptions);

  // Generate options for the year (1990-2023)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: currentYear - 1990 + 1 },
    (_, index) => `${currentYear - index}`
  );
  console.log(yearOptions);
  return (
    <div>
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
             Register
            </h1>
          </div>
        </div>
      </div>
      <div className=" md:w-full max-w-[500px]    md:max-w-[1180px] mx-auto mb-[50px] mt-10 px-[30px]">
        <p className=" text-[14px] text-[#8c8c8c] mb-[30px]">
          After creating an account, you'll be able to track your payment
          status, track the confirmation and you can also rate the tour after
          you finished the tour.
        </p>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <TextInput
              label="Username or E-Mail"
              size="md"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              size="md"
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Password"
              size="md"
              {...form.getInputProps("password")}
            />
            <TextInput
              label="Username or E-Mail"
              size="md"
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Phone"
              size="md"
              {...form.getInputProps("email")}
            />
            <NativeSelect
              label="Country"
              size="md"
              placeholder="Your favorite library/framework"
              data={[...countryOptions]}
              rightSection={<BsChevronDown size="1rem" />}
              rightSectionWidth={40}
            />

            <div>
              <h1 className=" mantine-b11773 ">Birth Date*</h1>
              <div className=" grid grid-cols-3 gap-[30px]">
                <NativeSelect
                  size="md"
                  data={["Day", ...dateOptions]}
                  rightSection={<BsChevronDown size="1rem" />}
                  rightSectionWidth={40}
                />
                {/* <NativeSelect
                  size="md"
                  data={["Month", ...monthOptions]}
                  rightSection={<BsChevronDown size="1rem" />}
                  rightSectionWidth={40}
                /> */}
                <NativeSelect
                  data={["React", "Vue", "Angular", "Svelte"]}
                  size="md"
                  radius="xs"
                />
                <NativeSelect
                  size="md"
                  data={["Year", ...yearOptions]}
                  rightSection={<BsChevronDown size="1rem" />}
                  rightSectionWidth={40}
                />
              </div>
            </div>
            {/* <NativeSelect
              label="Your favorite library/framework"
              placeholder="Your favorite library/framework"
              data={[1, "2", "3", "4"]}
              rightSection={<BsChevronDown size="1rem" />}
              rightSectionWidth={40}
            /> */}
          </div>
          <div className=" my-[50px]">
            <button
              type="submit"
              className=" w-full text-[12.5px] font-[600]  bg-[#485DA1] py-[15px] text-white"
            >
              SIGN UP
            </button>
          </div>
        </form>
        <hr />
        <div>
          <h1 className=" text-center mb-[12px] mt-[32px] font-[700]">
            ALREADY A MEMBER?
          </h1>
          <Link to={"/login"}>
            <p className=" text-center text-blue-600 hover:text-blue-400 text-xs font-[500]">
              LOGIN
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
