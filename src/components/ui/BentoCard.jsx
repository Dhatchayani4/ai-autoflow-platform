export default function BentoCard({
  title,
  description,
  icon,
  active,
  onHover,
}) {
  return (
          <article
        onMouseEnter={onHover}
        className={`
          rounded-3xl
          p-10
          border
          transition-all duration-300 ease-out
          cursor-pointer
          hover:-translate-y-2
          hover:shadow-2xl
          ${
            active
              ? "bg-[#172B36] text-white border-[#172B36] shadow-2xl"
              : "bg-white border-[#D9E8E2]"
          }
        `}
      >
      <img
        src={icon}
        alt={title}
        className="w-8 mb-6"
      />

      <h3 className="text-3xl font-bold mb-6">
        {title}
      </h3>

      <p className="text-base leading-8 opacity-80">
        {description}
      </p>
    </article>
  );
}