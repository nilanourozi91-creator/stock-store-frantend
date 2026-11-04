"use client";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import Cookie from "js-cookie";
import { GetUserInfomations, Login } from "@/lib/auth.action";
import { loginSchema } from "@/lib/validation/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type LoginState = {
  data: string;
  success: boolean;
  errors?: {
    email?: string;
    password?: string;
  };
};

const initialState: LoginState = {
  data: "",
  success: false,
  errors: {},
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [state, action, pending] = useActionState(
    async (prevState: LoginState, formData: FormData) => {
      // =========================
      // ZOD VALIDATION
      // =========================

      const result = loginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      // =========================
      // VALIDATION ERROR
      // =========================

      if (!result.success) {
        const errors: LoginState["errors"] = {};

        result.error.issues.forEach((issue) => {
          const field = issue.path[0];

          if (field === "email" || field === "password") {
            errors[field] = issue.message;
          }
        });

        return {
          ...prevState,
          success: false,
          data: "",
          errors,
        };
      }

      // =========================
      // ZOD PASSED
      // SEND TO LARAVEL
      // =========================

      const response = await Login(prevState, formData);

      return {
        ...response,
        errors: {},
      };
    },
    initialState
  );

  // =========================
  // SAVE TOKEN
  // =========================
  type user={
    name:string,
    email:string,
    id:number,
  }
    //  getuserformessages
     const [data ,setdata]=useState<user|null>(null);
     useEffect(()=>{
      const cookee=Cookie.get('token') as string|'';
      async function getuser():Promise<user> {
        return await GetUserInfomations(cookee);
      }
      async function getU() {
        setdata(await getuser());
      }
      getU()
     },[])
    const router=useRouter();
  useEffect(() => {
    if (state.success && state.data) {
      Cookie.set("token", state.data, {
        expires: 7,
        path: "/",
      });
       router.push('/');
       toast.info('success',{
        description: `${data?.name} login successfuly.`,
        duration: 3000,
       })
       
    }
  }, [state.success, state.data]);

  return (
    <main className="min-h-screen bg-[#faf9f7] text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* =========================================
            LEFT BRAND SECTION
        ========================================= */}

        <section className="relative hidden overflow-hidden bg-purple-600 dark:bg-purple-700 lg:flex">

          {/* Decorations */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10" />

          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/5" />

          <div className="absolute left-20 top-24 h-5 w-5 rounded-full bg-white/20" />

          <div className="absolute right-32 top-40 h-3 w-3 rounded-full bg-white/30" />

          <div className="relative flex w-full flex-col justify-between p-12 xl:p-16">

            {/* Logo */}
            <Link
              href="/"
              className="inline-flex w-fit items-center gap-3 text-white"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <ShoppingBag className="h-6 w-6" />
              </div>

              <span className="text-xl font-bold">
                FreshStock
              </span>
            </Link>

            {/* Main Content */}
            <div className="max-w-lg">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Fresh products, better living
              </div>

              <h1 className="text-4xl font-black leading-tight text-white xl:text-6xl">
                Welcome back to
                <span className="block text-purple-100">
                  FreshStock.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-purple-100">
                Sign in to continue shopping fresh products,
                manage your orders, and enjoy a simple grocery
                shopping experience.
              </p>

            </div>

            {/* Bottom */}
            <p className="text-sm text-purple-100">
              Fresh groceries. Simple shopping. Better everyday.
            </p>

          </div>
        </section>

        {/* =========================================
            LOGIN FORM
        ========================================= */}

        <section className="flex items-center justify-center bg-[#faf9f7] px-4 py-10 dark:bg-gray-950 sm:px-6 lg:px-12">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <Link
              href="/"
              className="mb-10 flex items-center justify-center gap-3 lg:hidden"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400">
                <ShoppingBag className="h-6 w-6" />
              </div>

              <span className="text-xl font-bold text-gray-950 dark:text-gray-100">
                FreshStock
              </span>
            </Link>

            {/* Header */}
            <div className="mb-8">

              <p className="mb-3 text-sm font-semibold text-purple-600 dark:text-purple-400">
                Welcome back
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-gray-100 sm:text-4xl">
                Sign in to your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Enter your email and password to continue.
              </p>

            </div>

            {/* =========================================
                FORM
            ========================================= */}

            <form action={action} className="space-y-6">

              {/* EMAIL */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>

                <div className="relative">

                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={`
                      w-full rounded-xl border
                      bg-white py-3.5 pl-12 pr-4
                      text-gray-900
                      outline-none transition

                      placeholder:text-gray-400

                      focus:ring-4
                      focus:ring-purple-100

                      dark:bg-gray-900
                      dark:text-gray-100
                      dark:placeholder:text-gray-500
                      dark:focus:ring-purple-950

                      ${
                        state.errors?.email
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-purple-500 dark:border-gray-800 dark:focus:border-purple-500"
                      }
                    `}
                  />

                </div>

                {/* Email Error */}
                {state.errors?.email && (
                  <p className="mt-2 text-sm font-medium text-red-500">
                    {state.errors.email}
                  </p>
                )}

              </div>

              {/* PASSWORD */}
              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-semibold text-purple-600 transition hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Forgot password?
                  </Link>

                </div>

                <div className="relative">

                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className={`
                      w-full rounded-xl border
                      bg-white py-3.5 pl-12 pr-12
                      text-gray-900
                      outline-none transition

                      placeholder:text-gray-400

                      focus:ring-4
                      focus:ring-purple-100

                      dark:bg-gray-900
                      dark:text-gray-100
                      dark:placeholder:text-gray-500
                      dark:focus:ring-purple-950

                      ${
                        state.errors?.password
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-purple-500 dark:border-gray-800 dark:focus:border-purple-500"
                      }
                    `}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((value) => !value)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>

                </div>

                {/* Password Error */}
                {state.errors?.password && (
                  <p className="mt-2 text-sm font-medium text-red-500">
                    {state.errors.password}
                  </p>
                )}

              </div>

              {/* SERVER ERROR / MESSAGE */}
              {state.data && !state.success && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
                  {state.data}
                </div>
              )}

              {/* SUCCESS */}
              {state.success && state.data && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-600 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400">
                  Login successful!
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={pending}
                className="
                  group
                  flex w-full
                  items-center justify-center
                  gap-2
                  rounded-xl
                  bg-purple-600
                  px-5 py-3.5
                  text-sm font-semibold
                  text-white
                  shadow-lg shadow-purple-200
                  transition

                  hover:bg-purple-700
                  disabled:cursor-not-allowed
                  disabled:opacity-60

                  dark:bg-purple-500
                  dark:hover:bg-purple-400
                  dark:shadow-none
                "
              >
                {pending ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

            </form>

            {/* REGISTER */}
            <div className="mt-8 text-center">

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}

                <Link
                  href="/register"
                  className="font-semibold text-purple-600 transition hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  Create an account
                </Link>
              </p>

            </div>

            {/* Security Note */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500">
              <Lock className="h-3.5 w-3.5" />
              Your account information is protected.
            </div>

          </div>

        </section>
      </div>
    </main>
  );
}