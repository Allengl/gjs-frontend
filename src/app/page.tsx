import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Home = async() => {

  return (
    <div>
      <h1 className='text-xxl'>Home</h1>
      <Link className={buttonVariants()}  href='/sign-in'>Open My Admin</Link>
    
      <h2>Client Sesion</h2>
      <User /> 
      <h2>Server Sesion</h2>
    </div>
  )
}
export default Home;
