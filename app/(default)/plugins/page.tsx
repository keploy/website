import Footer from "@/components/ui/footer";

import Hero from "@/components/vscode-extension/hero";
import Features from "@/components/vscode-extension/features";
import Newsletter from "@/components/newsletter";
export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Newsletter/>
            <Footer />
        </>
    );
}
