import { AdminLayout } from "../components/layouts/AdminLayout";
import { Button } from "../components/ui/button";
import { useFormField } from "../components/hooks/useFormField";
import { useState } from "react";

function KycApplication() {
  const firstname = useFormField({ label: "First Name", id: "firstname", placeholder: "First Name", type: "text" });
  const lastname = useFormField({ label: "Last Name", id: "lastname", placeholder: "Last Name", type: "text" });
  const email = useFormField({ label: "Email", id: "email", placeholder: "Email", type: "email" });
  const mobile = useFormField({ label: "Mobile", id: "mobile", placeholder: "Mobile", type: "tel" });
  const DOB = useFormField({ label: "Date Of Birth", id: "dob", placeholder: "Date Of Birth", type: "text" });
  const city = useFormField({ label: "City", id: "city", placeholder: "City", type: "text" });
  const state = useFormField({ label: "State", id: "state", placeholder: "State", type: "text" });
  const address = useFormField({ label: "Address", id: "address", placeholder: "Address", type: "text" });
  const zipcode = useFormField({ label: "Zip Code", id: "zipcode", placeholder: "Zip Code", type: "text" });
  const nationality = useFormField({
    label: "Nationality",
    id: "nationality",
    placeholder: "Nationality",
    type: "text",
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileBack, setFileBack] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [previewBack, setPreviewBack] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };
  const handleFileChangeBack = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      console.log(selectedFile);
      setFileBack(selectedFile);
      setPreviewBack(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <h1 className="text-slate-600 font-maisonBold  text-xl">KYC Verification</h1>
      </div>
      <div className="border rounded-t-[6px] p-4 mt-5">
        <h2 className="font-maisonBold mb-1 text-primary text-base">KYC/AML Verification</h2>
        <p className="text-gray-600 text-sm">Submit application for KYC/AML verification</p>
      </div>
      <div className="grid grid-cols-4 border gap-10 p-8">
        <form className="col-span-3">
          <div className="grid lg:grid-cols-2 gap-6">
            {firstname}
            {lastname}
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {email}
            {mobile}
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {DOB}
            {nationality}
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {city}
            {state}
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {address}
            {zipcode}
          </div>
          <div className="grid grid-cols-2 gap-8 mb-5">
            <div className="w-full mx-auto p-8 border rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Your ID(Front)</h2>

              <div className="border-dashed border-2 border-gray-300 p-6 rounded-md flex flex-col items-center justify-center">
                {preview ? (
                  <div className="mb-4">
                    <img src={preview} alt="ID Preview" className="max-h-40 rounded-md shadow-md" />
                  </div>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V8a4 4 0 018 0v8m5 4H6a2 2 0 01-2-2V9a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2z"
                    />
                  </svg>
                )}
                <input type="file" accept="image/*" className="hidden" id="upload-id" onChange={handleFileChange} />
                <label
                  htmlFor="upload-id"
                  className="cursor-pointer bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-hover transition duration-200"
                >
                  {file ? "Change File" : "Choose File"}
                </label>
                <p className="text-gray-500 mt-3">PNG, JPG, or PDF (max. 5MB)</p>
              </div>
            </div>
            <div className="w-full mx-auto p-8 border rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Your ID(Back)</h2>
              <div className="border-dashed border-2 border-gray-300 p-6 rounded-md flex flex-col items-center justify-center">
                {previewBack ? (
                  <div className="mb-4">
                    <img src={previewBack} alt="ID Preview" className="max-h-40 rounded-md shadow-md" />
                  </div>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V8a4 4 0 018 0v8m5 4H6a2 2 0 01-2-2V9a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2z"
                    />
                  </svg>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="upload-id-back"
                  onChange={handleFileChangeBack}
                />
                <label
                  htmlFor="upload-id-back"
                  className="cursor-pointer bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-hover transition duration-200"
                >
                  {fileBack ? "Change File" : "Choose File"}
                </label>
                <p className="text-gray-500 mt-3">PNG, JPG, or PDF (max. 5MB)</p>
              </div>
            </div>
          </div>
          <div>
            <Button className="bg-primary-hover hover:bg-primary rounded-[5px]">Submit</Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default KycApplication;
