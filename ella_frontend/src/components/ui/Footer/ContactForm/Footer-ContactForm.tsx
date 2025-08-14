import { Text } from "../../typography";
import FooterInput from "./FooterInput";

const FooterContactForm = () => {
  return (
    <form className="text-white gap-10 flex flex-col">
      <header>
        <Text variant="section-heading">Let's Talk!</Text>
      </header>

      <div className="flex flex-col gap-4">
        <FooterInput />
        <FooterInput />
      </div>
    </form>
  );
};

export default FooterContactForm;
