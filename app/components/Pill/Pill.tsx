export default function Pill({ label }: { label: string }) {
  return (
    <span className="bg-grey-light rounded-full py-[0.563rem] px-[1.25rem] whitespace-nowrap">
      {label}
    </span>
  )
}
