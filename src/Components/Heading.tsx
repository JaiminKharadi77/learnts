type HeadingProps = {
  children: string;
};

function Heading(props: HeadingProps) {
  return (
    <div>
      <h1 className="text-white bg-black">{props.children}</h1>
    </div>
  );
}

export default Heading;
