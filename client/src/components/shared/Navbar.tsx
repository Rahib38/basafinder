import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <div className="text-xl font-bold">Brand</div>
      <div className="space-x-4">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Services</Button>
        <Button variant="ghost">Contact</Button>
      </div>
      <div className="space-x-2">
        <Button variant="outline">Login</Button>
        <Button variant="default">Register</Button>
      </div>
    </nav>
  );
}
