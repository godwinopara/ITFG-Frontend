import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface UseFormFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useFormField = ({ id, label, placeholder, type = "text", value, onChange }: UseFormFieldProps) => {
  return (
    <div className="grid w-full items-center gap-3 mb-8">
      <Label htmlFor={id} className="font-maisonMedium">
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className="rounded-[5px] border-gray-300"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
