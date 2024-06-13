import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/logo";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type formLogin = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const form = useForm<formLogin>({ resolver: zodResolver(loginSchema) });

  const handleForm = () => {};

  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center h-full w-[1200px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleForm)}
            className="w-[600px] space-y-4"
          >
            <div className="flex w-full justify-center">
              <Logo />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full justify-between">
              <Button variant={"link"} type="button">
                Esqueceu sua senha?
              </Button>
              <Button>Acessar</Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="bg-primary w-full h-full"></div>
    </div>
  );
};

export default LoginPage;
