import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  className?: string;
};

const IconCongregationAccess = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
  className,
}: IconProps) => {
  return (
    <SvgIcon
      className={`organized-icon-congregation-access ${className}`}
      sx={{ width: `${width}px`, height: `${height}px`, ...sx }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_14912_258760"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_14912_258760)">
          <path
            d="M4 20.8941V9.6442L11.5 4L19 9.6442V11.7038H17.5V10.3942L11.5 5.87495L5.49998 10.3942V19.3942H7.69038C7.69038 19.672 7.69038 19.8787 7.69038 20.1364C7.69038 20.3942 7.69038 20.5998 7.69038 20.8941H4Z"
            fill={color}
          />
          <path
            d="M10.5298 20.8008V19.3145H21.4702V20.8008H10.5298ZM11.2215 17.3124L10.4278 16.8284L10.8558 16.0266H10V15.0585H10.8558L10.4278 14.2848L11.2215 13.8008L11.6493 14.5824L12.0772 13.8008L12.8632 14.2848L12.4354 15.0585H13.2911V16.0266H12.4354L12.8632 16.8284L12.0772 17.3124L11.6493 16.5028L11.2215 17.3124ZM15.5722 17.3124L14.7785 16.8284L15.2065 16.0266H14.3507V15.0585H15.2065L14.7785 14.2848L15.5722 13.8008L16 14.5824L16.4278 13.8008L17.2215 14.2848L16.7935 15.0585H17.6493V16.0266H16.7935L17.2215 16.8284L16.4278 17.3124L16 16.5028L15.5722 17.3124ZM19.9228 17.3124L19.1368 16.8284L19.5646 16.0266H18.7089V15.0585H19.5646L19.1368 14.2848L19.9228 13.8008L20.3507 14.5824L20.7785 13.8008L21.5722 14.2848L21.1442 15.0585H22V16.0266H21.1442L21.5722 16.8284L20.7785 17.3124L20.3507 16.5028L19.9228 17.3124Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconCongregationAccess;