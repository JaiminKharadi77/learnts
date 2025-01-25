type OscarProps = {
  children: React.ReactNode; // This is how you import React Component is you want to import it
};

function Oscar(props: OscarProps) {
  return <div>{props.children}</div>;
}

export default Oscar;
