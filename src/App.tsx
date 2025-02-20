import { MdMessage } from "react-icons/md";
import NavBar from "./Componants/NavBar/NavBar";
import Button from "./Componants/UI/Button/Button";
import Input from "./Componants/UI/Input/Input";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Textaria from "./Componants/UI/Textaria/Textaria";

function App() {
  return (
    <div className="h-100">
      <NavBar />
      <div className="pirant container mx-auto grid sm:grid-cols-12 sm:flex sm:flex-col-reverse md:grid-cols-2 lg:flex-row lg:justify-between">
        <div className="left">
          <div className="mt-10 flex">
            <div className="sm:mx-auto">
              <Button icon={<MdMessage fontSize={25} />}>
                <span className="text">VIA SUPPORT CHAT</span>
              </Button>
            </div>
            <div className="sm:mx-auto">
              <Button icon={<FaPhoneAlt fontSize="24px" />}>
                <span className="text">VIA EMAIL FORM</span>
              </Button>
            </div>
          </div>

          <div className="border mt-10 p-4 mx-4 text-center flex items-center justify-center space-x-2">
            <span>
              <HiMail fontSize={"25px"} />
            </span>
            <p>VIA EMAIL FORM</p>
          </div>

          <form>
            <Input label="Name" />
            <Input label="Email" />
            <Textaria label="Text aria" className="h-40 w-full" />
            <div className="mt-10 flex justify-end">
              <Button>SUBMIT BUTTON</Button>
            </div>
          </form>
          <div>
            <p className="w-96 flex flex-wrap mx-4 mt-2">
              Anshu support@dosomecoding.com Subscribe to this channel
            </p>
          </div>
        </div>

        <div>
          <img src={"image/contact.svg"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
