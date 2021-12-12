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
  color?: 'primary' | 'secondary' | 'tertiary'
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
  size?: 'normal' | 'h1' | 'h2' | 'h3',
}

export const MyLabel = ({
                          allCaps = false,
                          backgroundColor = 'transparent',
                          color = 'primary',
                          fontColor,
                          label = 'No Label',
                          size = 'normal',
                        }: MyLabelProps) => {
  const labelColor = fontColor ? '' : `text-${color}`;

  return <span
    className={['label', size, labelColor].join(' ')}
    style={{color: fontColor, backgroundColor}}
  >
    {allCaps ? label?.toUpperCase() : label}
  </span>
}
