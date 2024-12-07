export default function TitleHead({
  title,
  isRequired,
}: {
  title: string;
  isRequired?: boolean;
}) {
  return (
    <h1 className="text-gray-400 text-lg">
      {title} {isRequired && <strong className="text-red-600">*</strong>}
    </h1>
  );
}
