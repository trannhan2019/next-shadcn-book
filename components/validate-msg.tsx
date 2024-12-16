export default function ValidateMsg({ error }: { error: string }) {
  return (
    error && (
      <p className="text-[0.8rem] font-medium text-destructive">{error}</p>
    )
  );
}
