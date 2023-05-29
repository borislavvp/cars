import { formValidators } from "@/utils/formsValidators";
import { getBaseUrl } from "@/utils/getBaseUrl";
import { HTMLInputTypeAttribute, useEffect } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
  useForm
} from "react-hook-form";

const sendEmail = (data: FieldValues) => {
  fetch(`${getBaseUrl()}/api/sendgrid`, {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(res => {
      console.log("Success!", res);
    })
    .catch(e => console.error(e));
};

const input = ({
  type,
  name,
  data,
  error
}: {
  type: HTMLInputTypeAttribute;
  name: string;
  data?: UseFormRegisterReturn;
  error?: FieldErrors<FieldValues>;
}) => {
  const hasError = () =>
    error && error[data!.name] && error[data!.name]?.message !== "";

  const inputClass = [
    "w-full rounded border px-4 py-2 focus:border-2 focus:outline-none",
    hasError()
      ? "border-red-500 focus:border-red-400 "
      : "focus:border-blue-300 "
  ].join(" ");

  return (
    <div className="flex w-full flex-col items-start">
      <label className="font-semibold text-gray-800">{name}</label>
      <input
        placeholder={name}
        type={type}
        // required
        className={inputClass}
        // value={value}
        {...data}
      />
      {hasError() ? (
        <p className="text-red-600">{`${error![data!.name]?.message}`}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export const Form = () => {
  const { register, handleSubmit, formState } = useForm();

  useEffect(() => {
    console.log(formState.errors);
  }, [formState.errors]);

  const isSubmitButtonDisabled = Object.keys(formState.errors).length !== 0;

  const submitButtonStyle = [
    "my-5 rounded px-6 py-2 text-lg font-semibold ",
    isSubmitButtonDisabled
      ? "bg-gray-300 text-gray-600 shadow-inner cursor-not-allowed"
      : "text-white bg-blue-500 shadow-md hover:bg-blue-600 cursor-pointer"
  ].join(" ");

  return (
    <form
      onSubmit={handleSubmit(data => sendEmail(data))}
      className="flex h-full  w-[30rem] flex-wrap items-center space-y-5 rounded-md  bg-white p-10 text-gray-800 shadow-md"
    >
      {input({
        type: "text",
        name: "Име *",
        data: register("name", { required: "Име е задължително поле!" }),
        error: formState.errors
      })}
      {input({
        type: "email",
        name: "Ел. поща *",
        data: register("email", {
          required: "Ел. поща е задължително поле!",
          validate: (value: string) => formValidators.isEmail(value)
        }),
        error: formState.errors
      })}
      {input({
        type: "tel",
        name: "Телефон *",
        data: register("phone", {
          required: "Телефон е задължително поле!",
          value: "+359",
          validate: (value: string) => formValidators.isPhoneNumber(value)
        }),
        error: formState.errors
      })}
      {input({
        type: "text",
        name: "Модел *",
        data: register("model", {
          required: "Модел е задължително поле!",
          value: "Mercedes"
        }),
        error: formState.errors
      })}
      <div className="flex w-full items-start justify-between space-x-10">
        {input({
          type: "number",
          name: "Цена до *",
          data: register("price", {
            required: true,
            min: 5000,
            max: 10000000000,
            value: 10000
          }),
          error: formState.errors
        })}
        {input({
          type: "number",
          name: "Година *",
          data: register("year", {
            required: "Година е задължително поле!",
            value: 2015
          }),
          error: formState.errors
        })}
      </div>
      <textarea
        placeholder="Допълнителна информация"
        className="w-full rounded border px-4 py-2 focus:outline-none"
        {...register("info")}
      />
      <button
        disabled={isSubmitButtonDisabled}
        type="submit"
        className={submitButtonStyle}
      >
        Изпрати
      </button>
    </form>
  );
};
