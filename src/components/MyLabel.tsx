import './mylabel.css';

interface MyLabelProps {
  /**
   * Do you need the label capitalized?
   */
  allCaps?: boolean;
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
                          color = 'primary',
                          fontColor,
                          label = 'No Label',
                          size = 'normal',
                        }: MyLabelProps) => {
  const labelColor = fontColor ? '' : `text-${color}`;

  return <span
    className={['label', size, labelColor].join(' ')}
    style={{color: fontColor}}
  >
    {allCaps ? label?.toUpperCase() : label}
  </span>
}
