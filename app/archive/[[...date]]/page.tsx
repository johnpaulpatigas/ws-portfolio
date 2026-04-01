import { ArchiveSection } from "@/components/features/archive/archive-section";

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ date?: string[] }>;
}) {
  const { date } = await params;

  return (
    <div className="py-8">
      <ArchiveSection date={date} />
    </div>
  );
}
