import Home from "@/components/Home";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push("/maintenance");
  }, [router]);

  return (
    <>
      <Home />
    </>
  );
}
