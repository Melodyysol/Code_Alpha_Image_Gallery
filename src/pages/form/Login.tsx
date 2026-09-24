import { Link, useNavigate } from "react-router";
import { FormRow, Header } from "../../components";
import { useActionState, useEffect } from "react";
import { UseAuth } from "../../custom-hooks";

type State = { error: string | null; success: boolean };

export default function Login() {
  const navigate = useNavigate();
  const { signIn } = UseAuth();

  const handleSubmit = async (
    _prevState: State,
    formData: FormData,
  ): Promise<State> => {
    const email = (formData.get("email") as string).trim();
    const password = formData.get("password") as string;

    return await signIn(email, password);
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
        <div className="container flex justify-center items-center min-h-[80vh] flex-col px-10">
          <h1 className="font-bold mb-5 text-3xl">Welcome back</h1>
          <form
            action={formAction}
            noValidate
            aria-label="Login form"
            className="register-form shadow-md py-10 px-5 flex flex-col rounded-2xl space-y-5 w-full bg-base-100 max-w-sm border-2 border-base-300"
          >
            {state.error && (
              <div className="alert alert-error alert-soft text-sm text-center capitalize">
                {state.error}
              </div>
            )}
            <FormRow
              type="email"
              placeholder="Enter your email"
              labelName="email"
              name="email"
            />
            <FormRow
              type="password"
              placeholder="Enter your password"
              labelName="password"
              name="password"
            />
            <button
              disabled={isPending}
              type="submit"
              className="btn btn-primary"
            >
              {isPending ? "Logging in..." : "Log in"}
            </button>
            <p className="text-sm text-center text-base-content/70">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="link link-accent font-medium">
                Register
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
