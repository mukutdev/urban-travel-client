import React from 'react';
import BgImage from '../../components/BgImage/BgImage';
import regImg from "../../assets/images//pexels-suliman-sallehi-2128181.jpg";
import { Button, Label, TextInput } from 'flowbite-react';
import { AiOutlineUserAdd , AiOutlineLink} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MdOutlineVpnKey } from 'react-icons/md';
import { FaRegEnvelope } from 'react-icons/fa';
const Register = () => {

    const handleSubmitUser = e => {
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
             <BgImage img={regImg} content={"Create an account"}></BgImage>
             <div className="container mx-auto">
        <div className="w-1/3 mx-auto my-28">
          <div className="shadow-md p-8 rounded ">
            <h2 className="text-center text-xl font-medium">
              Create Your Account
            </h2>
            <form onSubmit={handleSubmitUser} className="mt-7">
              <div className="mb-2 block">
                <Label htmlFor="name4" value="Your name" />
              </div>
              <TextInput
                id="name4"
                name="name"
                type="text"
                placeholder="John Smith"
                required={true}
                icon={AiOutlineUserAdd}
              />
              <div className="mt-3 mb-1 block">
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
              <div className="mt-3 mb-1 block">
                <Label htmlFor="photo" value="Enter photo url" />
              </div>
              <TextInput
                id="photo"
                name="photoUrl"
                type="text"
                placeholder="https/imgbb/your-photo.png"
                required={true}
                icon={AiOutlineLink}
              />
              <div className="mt-3 mb-1 block">
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
                Register
              </Button>
            </form>

                <p>
                 Already have an account ? <Link to={'/login'} className="underline">Login Now</Link>
                </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;