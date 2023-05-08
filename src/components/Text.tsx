import newLineToBr from "utils/newLineToBr";

export type TextProps = {
  title: string;
  text: string;
};

export default function Text({ title, text }: TextProps) {
  return (
    <section className="section">
      <h2 className="heading1">{title}</h2>
      <p className="mt-6 font-sans text-2xl">{newLineToBr(text)}</p>
    </section>
  );
}
