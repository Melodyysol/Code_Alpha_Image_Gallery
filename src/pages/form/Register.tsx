import { Link, useNavigate } from "react-router";
import { FormRow, Header } from "../../components";
import { useActionState, useEffect } from "react";

import { UseAuth } from "../../custom-hooks";

type State = {
  error: string | null;
  success: boolean;
};

export default function Register() {
  const navigate = useNavigate();
  const { signUp } = UseAuth();

  const handleSubmit = async (
    _prevState: State,
    formData: FormData,
  ): Promise<State> => {
    const firstName = (formData.get("firstName") as string).trim();
    const lastName = (formData.get("lastName") as string).trim();
    const email = (formData.get("email") as string).trim();
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    return await signUp(firstName, lastName, email, password, confirmPassword);
  };

  const [state, formAction, isPending] = useActionState(handleSubmit, {
    error: null,
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      navigate("/dashboard");
    }
  }, [state.success]);

  return (
    <>
      <Header />
      <main className="bg-base-200 overflow-x-scroll mt-10">
        <div className="container flex justify-center items-center min-h-screen flex-col px-10">
          <h1 className="font-bold mb-5 text-3xl">Create your account</h1>
          <form
            action={formAction}
            noValidate
            aria-label="Registration form"
            className="register-form shadow-md py-5 px-5 flex flex-col rounded-2xl space-y-5 w-full bg-base-100 max-w-sm border-2 border-base-300"
          >
            {state.error && (
              <div className="alert alert-error alert-soft text-sm capitalize">
                {state.error}
              </div>
            )}
            <div className="name flex gap-5">
              <FormRow
                type="text"
                placeholder="First name"
                labelName="first name"
                name="firstName"
              />
              <FormRow
                type="text"
                placeholder="Last name"
                labelName="last name"
                name="lastName"
              />
            </div>
            <FormRow
              type="email"
              placeholder="Enter your email"
              labelName="email"
              name="email"
            />
            <FormRow
              type="password"
              placeholder="Create a password"
              labelName="password"
              name="password"
            />
            <FormRow
              type="password"
              placeholder="Confirm your password"
              labelName="confirm password"
              name="confirmPassword"
            />
            <button
              disabled={isPending}
              type="submit"
              className="btn btn-primary"
            >
              {isPending ? "Creating account..." : "Create account"}
            </button>
            <p className="text-sm text-center text-base-content/70">
              Already have an account?{" "}
              <Link to="/login" className="link link-accent font-medium">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
