
import { Toaster } from "sonner";

export default function MainLayout({ children }) {
    return (
        <div>
            {children}
            <Toaster />
        </div>
    );
}