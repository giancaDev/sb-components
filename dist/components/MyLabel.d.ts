/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Do you need the label capitalized?
     */
    allCaps?: boolean;
    backgroundColor?: string;
    /**
     * Basic Colors
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * What label color to use
     */
    fontColor?: string;
    /**
     * Component contents
     */
    label?: string;
    /**
     * How large should the label be?
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
