interface PageTitleProps {
  title: string;
  description?: string;
}

export function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-[#1E1B39]">{title}</h1>
      {description && (
        <p className="text-[#615E83] mt-2">{description}</p>
      )}
    </div>
  );
}

