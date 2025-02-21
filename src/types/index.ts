import { LucideIcon } from "lucide-react";

export type icon = {
    name: string,
    image: string
};

export type servicios = {
    icon:  LucideIcon;
    title: string;
    description: string;
};

export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
  }
  