export default function AccordionItem({
  title,
  description,
  icon,
  open,
  onClick,
}) {
  return (
    <div className="border border-[#D9E8E2] rounded-2xl overflow-hidden">

      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 bg-white"
      >

        <div className="flex items-center gap-4">

          <img
            src={icon}
            alt={title}
            className="w-7"
          />

          <span className="font-semibold">
            {title}
          </span>

        </div>

        <span>
          {open ? "−" : "+"}
        </span>

      </button>

      {open && (

        <div className="p-6 pt-0 bg-white">

          <p>
            {description}
          </p>

        </div>

      )}

    </div>
  );
}