import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function Container({ children }: Props) {
    return (
        <div className="w-full flex items-center justify-between max-w-[1246px] px-[15px] mx-auto">
            {children}
        </div>
    )
}
