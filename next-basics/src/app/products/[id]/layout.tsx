export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>
        <h1>Product Layout</h1>
      </div>
    </div>
    );
}