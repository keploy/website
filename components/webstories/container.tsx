export default function Container({ children }:{children:any}) {
    // return <div className="container mx-auto px-5">{children}</div>
    return <div className="max-w-7xl mx-auto px-5 sm:px-6 mt-20">{children}</div>;
  }
  