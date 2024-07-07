import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex items-center justify-center">
      <Link href="/main/">
        <Button>Start Working Out</Button>
      </Link>
    </main>
  );
}
