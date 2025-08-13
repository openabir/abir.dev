type NameProp = {
  name: string;
};
const ProfileName = ({ name }: NameProp) => {
  return (
      <h1 className="font-semibold text-xl tracking-tighter sm:text-3xl">
        Hey, I&apos;m &nbsp;{name} . <span className="text-3xl wave">👋</span>
      </h1>
  );
};

export default ProfileName;
