import { cn } from "@/lib/utils";
import type { ComponentType, SVGProps } from "react"

interface NavbarItemProps {
    icon: ComponentType<SVGProps<SVGSVGElement>>
    title: string
    subtitle: string,
    iconColorClass?: string;
}

export function NavbarItem({
    icon: Icon,
    title,
    subtitle,
    iconColorClass
}: NavbarItemProps) {
    return (
        <div className="flex items-center gap-2">
            <Icon className={cn("text-2xl", iconColorClass || "text-primary")} />
            <div className="flex flex-col text-start text-sm">
                <span className="text-white">{title}</span>
                <span className="text-primary">{subtitle}</span>
            </div>
        </div>
    )
}

export default NavbarItem;