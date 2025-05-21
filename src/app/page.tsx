import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-4">
      <ModeToggle/>
      <SignedOut>
        <SignInButton mode="modal" >
          <Button>Sign In</Button>
        </SignInButton>
        <SignUpButton mode="modal" >
          <Button variant={"secondary"}>Sign Up</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
