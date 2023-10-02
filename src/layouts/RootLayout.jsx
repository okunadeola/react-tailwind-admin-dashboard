import Navbar from "./navbar";
import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (

    <div className="dark:text-gray-100 dark:bg-slate-600 duration-200 ease-in-out">
      <Navbar/>
      <div className="flex max-w-full ">
        <Sidebar />
        <div className="w-full">
         <main className="py-4 px-4 break-words ">{children}</main>
        </div>
      </div>

    </div>
  );
}

export default RootLayout;
