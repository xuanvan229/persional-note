import React from 'react';
// import {MdCardTravel} from 'react-icons/md';
// import {FaRegUserCircle} from 'react-icons/fa';
// import {IoMdKey} from 'react-icons/io';
// interface Props {
//   label: string,
//   type: string,
//   children?: React.ReactNode,
//   icon: React.ReactNode
// }
const Input = (props) => {
  const { label, type, icon, error, ForgotPasswordComponent, TogglePasswordComponent, className, ...rest } = props
  return (
    <div className={className ? className : "mt-5"}>
      <div className="flex justify-between">
        <div className="text-sm text-gray-900">
          {label}
        </div>
        {ForgotPasswordComponent && <ForgotPasswordComponent />}
      </div>
      <div className="relative border-gray-500 border-solid border w-full p-2 pl-3 flex flex-row items-center rounded-sm mt-2">
        {icon}
        <input type={type} className="w-full outline-none" {...rest} />
        {TogglePasswordComponent &&
          <div className="absolute right-0 top-0 h-full flex items-center justify-center w-8">
            <TogglePasswordComponent />
          </div>}
      </div>
      {error && <div className="text-red-800 text-xs">{error}</div>}
    </div>
  );
}

export default Input;
