import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthenticationLayout from "../../layout/AuthenticationLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "../../components/Icon/IconEyeToggle";
import useToggleValue from "../../hook/useToggleValue";
import MicrosoftLogin from "react-microsoft-login";
import { gapi } from "gapi-script";
import { useGetIdentity, useLogin } from "@pankod/refine-core";
import { useDispatch } from "react-redux";
import { setUser } from "store/userGoggle/userGoogleSlice";
import { useEffect } from "react";
import { TOKEN_KEY } from "../../constants";
import { useNavigation } from "@pankod/refine-core";
import { getUser } from "store/user/userSlice";
import { toast } from "react-toastify";
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter email address"),
  password: yup
    .string()
    .required("Please enter password")
    .min(8, "Password must be 8 character "),
});
const SignInPage = () => {
  const dispatch = useDispatch();
  const { data: userIdentity } = useGetIdentity<string>();
  const { push } = useNavigation();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (values: any) => {
    if (values.email === "student@gmail.com") {
      dispatch(getUser(2));
      localStorage.setItem("token", "2");
      push("/");
    } else if (values.email === "teacher@gmail.com") {
      dispatch(getUser(1));
      localStorage.setItem("token", "1");
      push("/");
    } else {
      toast.error("Error", { position: "top-right", autoClose: 2000 });
    }
  };
  const authHandler = (err: any, data: any, msal: any) => {
    if (!err && data) {
      if (data?.account?.userName === "huynt@primas.edu.vn") {
        dispatch(getUser(1));
        localStorage.setItem("token", "1");
        push("/");
      } else if (data?.account?.userName === "19110217@student.hcmute.edu.vn") {
        dispatch(getUser(2));
        localStorage.setItem("token", "2");
        push("/");
      } else {
        toast.error("Error", { position: "top-right", autoClose: 2000 });
      }
    } else return;
  };
  useEffect(() => {
    if (userIdentity) {
      return push("/");
    } else return;
  }, []);
  return (
    <AuthenticationLayout>
      <div className="absolute bg-white p-6 sm:p-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-sm flex flex-col gap-y-4 items-center min-w-[350px] sm:min-w-[555px]">
        <span className="text-2xl font-semibold">Welcome Back!</span>
        <div className="w-full flex items-center justify-center">
          <MicrosoftLogin
            clientId={"f11a7498-585a-49c3-bf5a-e1e0b3624bbb"}
            authCallback={authHandler}
            buttonTheme="light"
          />
        </div>
        <form
          className="w-full flex flex-col gap-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col gap-y-3">
            <label htmlFor="email" className="text-sm text-text1">
              Email *
            </label>
            <Input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              register={{ ...register("email") }}
              errors={errors.email?.message}
            ></Input>
          </div>
          <div className="w-full flex flex-col gap-y-3">
            <label htmlFor="password" className="text-sm text-text1">
              Password *
            </label>
            <Input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Enter password"
              id="password"
              register={{ ...register("password") }}
              errors={errors.password?.message}
              className={"pr-10"}
            >
              <div className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 cursor-pointer">
                <IconEyeToggle
                  open={showPassword}
                  onClick={handleTogglePassword}
                ></IconEyeToggle>
              </div>
            </Input>
          </div>
          <span className="text-secondary w-full text-end cursor-pointer">
            Forgot password
          </span>
          <Button className="w-full border-primary py-3">Sign in</Button>
        </form>
      </div>
    </AuthenticationLayout>
  );
};

export default SignInPage;
