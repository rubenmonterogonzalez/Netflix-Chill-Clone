import Image from "next/image";
import Form from "~/components/auth-components/form";
import Link from "next/link";
import { css } from "~/styled-system/css";

export default function Login() {
  return (
    <div
      className={css({
        display: 'flex',
        h: 'screen',
        w: 'screen',
        alignItems: 'center',
        justifyContent: 'center',
        bgColor: 'gray.50',
      })}
    >
      <div
        className={css({
          zIndex: '10',
          w: 'full',
          maxW: 'md',
          overflow: 'hidden',
          rounded: '2xl',
          borderWidth: '1px',
          borderColor: 'gray.100',
          shadow: 'xl',
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: '3',
            mb: '3',
            borderBottomWidth: '1px',
            borderColor: 'gray.200',
            bgColor: 'white',
            pl: '4',
            pr: '4',
            pt: '8',
            pb: '6',
            textAlign: 'center',
            sm: { pl: '16', pr: '16' },
          })}
        >
          <Link href="/">
            <Image
              src="/logo.png"
              priority
              alt="Logo"
              className={css({ h: '10', w: '10', rounded: 'full' })}
              width={20}
              height={20}
            />
          </Link>
          <h3 className={css({ fontSize: 'xl', lineHeight: 'xl', fontWeight: 'semibold' })}>Sign In</h3>
          <p className={css({ fontSize: 'sm', lineHeight: 'sm', color: 'gray.500' })}>
            Use your email and password to sign in
          </p>
        </div>
        <Form type="login" />
      </div>
    </div>
  );
}