
import Link from "next/link";

type SocialLinkProps = {
  href: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SocialLink = ({ href, icon: Icon}: SocialLinkProps) => {
  const commonClasses =
    "flex items-center";

  return (
    <Link href={href} className={commonClasses}>
      <Icon className="text-xl" />
    </Link>
  );
};

export default SocialLink;
