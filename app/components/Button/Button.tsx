import Link from "next/link";

export default function Button({ label, href }: { label: string, href: string }) {
  return (
    <Link
      href={href}
    >
      <button className="py-[0.938rem] px-[2.375rem] bg-white rounded-full">
        {label}
      </button>
    </Link>
  )
}
