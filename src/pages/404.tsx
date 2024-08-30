import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

const NotFound = () => {
  return (
    <>
      <NavigationBar />
      <main className="flex min-h-screen justify-center items-center">
        <h4 className="text-white 5xl">404 Not Found</h4>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
