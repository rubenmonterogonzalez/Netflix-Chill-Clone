import Image from "next/image";
import Form from "~/components/auth-components/form";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <div>
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              priority
              alt="Logo"
              width={20}
              height={20}
            />
          </Link>
          <h3>Sign In</h3>
          <p>
            Use your email and password to sign in
          </p>
        </div>
        <Form type="login" />
      </div>
    </div>
  );
}