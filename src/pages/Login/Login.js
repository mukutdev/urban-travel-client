import React, { useContext } from "react";
import BgImage from "../../components/BgImage/BgImage";
import loginImg from "../../assets/images//pexels-suliman-sallehi-2128181.jpg";
import { Button, Label, TextInput } from "flowbite-react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineVpnKey } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";

const Login = () => {

    const { handleLoginUser , handleGoogleLogin} = useContext(AuthProvider)
  const handleUserLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // handleUserSignIn(email, password)
    //   .then(result => {
    //     const user = result.user;
    //     console.log(user);
    //     navigate(from, { replace: true });
    //   })
    //   .catch(err => console.log(err));
  };

  return (
    <div>
      <BgImage img={loginImg} content={"Login Area"}></BgImage>

      <div className="container mx-auto">
        <div className="w-1/3 mx-auto my-28">
          <div className="shadow-md p-8 rounded ">
            <h2 className="text-center text-xl font-medium">
              Login To Your Account
            </h2>
            <form onSubmit={handleUserLogin} className="mt-7">
              <div className="mb-2 block">
                <Label htmlFor="email4" value="Your email" />
              </div>
              <TextInput
                id="email4"
                name="email"
                type="email"
                placeholder="name@element.com"
                required={true}
                icon={FaRegEnvelope}
              />
              <div className="mb-2 block mt-3">
                <Label htmlFor="pass4" value="Your Password" />
              </div>
              <TextInput
                id="pass4"
                type="password"
                name="password"
                placeholder="Enter your password"
                required={true}
                icon={MdOutlineVpnKey}
              />
              <Button className="my-5 w-full" type="submit">
                Login To Your Account
              </Button>
              <Button className="my-5 w-full bg-slate-200 font-medium text-black hover:bg-slate-100 " type="submit">
               <FcGoogle className="text-lg mr-2 mt-1 "/> <span className="text-lg">Login using Google</span>
              </Button>
            </form>

                <p>
                 New user ? <Link to={'/register'} className="underline">Create an account</Link>
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
