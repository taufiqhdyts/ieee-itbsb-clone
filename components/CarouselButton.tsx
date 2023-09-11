"use client";

const CarouselButton = ({
  type,
  onClick,
}: {
  type: "previous" | "next";
  onClick: () => void;
}) => {
  return (
    <button
      aria-label={type === "previous" ? "Previous Image" : "Next Image"}
      className="h-9 w-9 overflow-hidden rounded-full bg-white font-poppins font-bold text-4xl leading-[0px] text-primary-3-dark-purple"
      onClick={onClick}
    >
      {type === "previous" ? "<" : ">"}
    </button>
  );
};

export default CarouselButton;
