import { Text } from "../typography";

const FooterContactInfo = () => {
  return (
    <section>
      <article className="text-white flex flex-col gap-10">
        <div>
          <Text variant="body">+16478937780</Text>
          <Text variant="body">ellayang.designz@gmail.com</Text>
          <Text variant="body">Toronto, Canada</Text>
        </div>

        <div>
            <Text variant="body">Copyright © 2025 Ella Yang</Text>
        </div>
      </article>
    </section>
  );
};

export default FooterContactInfo;
