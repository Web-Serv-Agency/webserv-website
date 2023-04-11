import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";

type Props = {};

export default function Teams({}: Props) {
  return (
    <SectionWrapper bgColor="primary">
      <SectionHeading
        heading="Meet our Experts"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            incidunt rerum dolores pariatur. Odio, id. Iure commodi, similique."
        position="left"
      />
    </SectionWrapper>
  );
}
