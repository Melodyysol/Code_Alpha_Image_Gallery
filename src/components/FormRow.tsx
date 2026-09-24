import FormInput from "./FormInput";

export default function FormRow({
  type,
  placeholder,
  labelName,
  name,
}: {
  type: string;
  placeholder: string;
  labelName: string;
  name: string;
}) {
  const autoCompleteMap: Record<string, string> = {
    firstName: "given-name",
    lastName: "family-name",
    email: "email",
    password: "new-password",
    confirmPassword: "new-password",
  };

  return (
    <label className="label capitalize flex flex-col items-start text-sm">
      <span>{labelName || "Name"}: </span>{" "}
      <FormInput
        type={type}
        placeholder={placeholder}
        className="bg-base-100 input-sm md:input-md"
        name={name}
        autoComplete={autoCompleteMap[name] || "off"}
      />
    </label>
  );
}
