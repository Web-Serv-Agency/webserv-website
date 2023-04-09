import Home from "@/components/Home";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      router.push("/maintenance");
    }
  }, [router]);

  return (
    <>
      <Home />
    </>
  );
}
