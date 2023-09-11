// Use props to get tailwind typesafe intellisense
// Declare size and color in className as props

const ArrowDropdownIcon = ({ ...props }) => {
    return (
        <svg {...props} width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M10.7345 14.2679C11.7107 15.244 13.296 15.244 14.2722 14.2679L24.2683 4.27177C24.9868 3.5533 25.1976 2.48341 24.8072 1.54627C24.4167 0.609137 23.5108 0 22.4956 0L2.50337 0.00780993C1.49595 0.00780993 0.582247 0.616947 0.191774 1.55408C-0.198698 2.49121 0.0199664 3.56111 0.730626 4.27958L10.7267 14.2757L10.7345 14.2679Z" fill="#FFFEF5" />
        </svg>

    );
};

export default ArrowDropdownIcon;
