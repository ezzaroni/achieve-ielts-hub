import { ReactNode } from "react";

export interface BaseProps {
  children?: ReactNode;
  className?: string;
}

export interface SectionProps extends BaseProps {
  id?: string;
}

export interface FeatureData {
  title: string;
  description: string;
  imageSrc: string;
  ctaText: string;
  tags?: string[];
  align: 'left' | 'right';
}
