export default function ProductLayout({
    children,
}:{
    children:React.ReactNode;
}){
    return (
        <div className="">
            {children}
            <div className="">
                <h2>Feature products section</h2>
            </div>
        </div>
    )
}