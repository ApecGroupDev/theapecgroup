import Header from "@/components/header";

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-gray-200 w-full'>{children}</div>
  );
}