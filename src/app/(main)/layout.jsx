
import { Navbar } from "@/components/main/navbar";
import { Toaster } from "sonner";

async function getSite() {
    try {
        const response = await fetch(`${process.env.API_URL}/site`, {
            cache: 'no-store',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return {
            launched: false,
            contractAddress: "",
        };
    }
}

export default async function MainLayout({ children }) {
    const site = await getSite();

    return (

        <div>

            {children}
            <Toaster />
        </div>
    );
}