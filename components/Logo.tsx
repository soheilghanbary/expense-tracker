import { PiggyBank, CircleDollarSign } from "lucide-react";


export function Logo() {
    return (
        <a href="/" className="flex items-center gap-2">
            <PiggyBank className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" />
            <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
                SpendSmart
            </p>
            <CircleDollarSign className="stroke h-9 w-9 stroke-amber-500 stroke-[1.5]" />
        </a>
    );
}

export function LogoMobile() {
    return (
        <a href="/" className="flex items-center gap-2">
            <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
                SpendSmart
            </p>
            <CircleDollarSign className="stroke h-9 w-9 stroke-amber-500 stroke-[1.5]" />
        </a>
    );
}