export default async function Product({params}: {params: {id: string}}){
    const { id } = params;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-2xl font-bold">Product Page:{id}</h1>
            <p className="text-lg">This is the product page of our Next.js application.</p>
        </div>
    );
}