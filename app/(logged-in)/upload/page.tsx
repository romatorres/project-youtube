import BgGradient from "@/components/common/br-gradient";
import UploadForm from "@/components/upload/upload-form";
import UploadHeader from "@/components/upload/upload-header";

export default function Page() {
  return (
    <section className="min-h-7xl">
      <BgGradient />
      <div className="flex flex-col items-center mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="flex flex-col justify-center items-center gap-6 text-center mb-10">
          <UploadHeader />
        </div>
        <UploadForm />
      </div>
    </section>
  );
}
