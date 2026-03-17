import { useWalletSignModal } from "@/app/providers/WalletSignModalProvider";
import { useCallback } from "react";

export const useWalletSign = () => {
    const {
        setIsOpen,
        setOnSign,
    } = useWalletSignModal();

    const sign = useCallback((options) => {
        return new Promise((resolve) => {
            const handleSign = (sign) => {
                resolve(sign);
                setIsOpen(false);
            };

            setOnSign(() => handleSign);
            setIsOpen(true);
        });
    }, [setIsOpen, setOnSign]);

    return sign;
};