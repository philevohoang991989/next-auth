import {NavBar} from "@/components/Navbar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  console.log({AdminPage: session });
  return (
    <>
      <NavBar session={session && session} />
      <h1> Admin Page {session?.user.username || session?.user.name}</h1>
    </>
  );
};
export default AdminPage;
