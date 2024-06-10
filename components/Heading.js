const Heading = ({ tag, text, className }) => {
  const Tag = tag || "h3";
  return <Tag className={className || ""}>{text}</Tag>;
};
export default Heading;
