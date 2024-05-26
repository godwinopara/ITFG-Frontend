interface ButtonProps {
  className?: string;
  btnText: string;
}

export default function Button({ className, btnText }: ButtonProps) {
  return (
    <button
      className={`py-3 px-5 font-bold rounded-[100px] text-center ${className}`}
    >
      {btnText}
    </button>
  );
}


