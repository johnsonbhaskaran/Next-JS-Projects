import Link from "next/link";

const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${backgroundColor} shadow-md p-6 rounded-lg`}>
      <h2 className={`${textColor} font-bold text-2xl`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <Link
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.backgroundColor} hover:opacity-80 px-4 py-2 rounded-lg text-white`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};
export default InfoBox;
