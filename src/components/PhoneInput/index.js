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
import PhoneInput2 from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const PhoneInput = (props) => {
    const { label, value, onChange, onBlur, error, ...rest } = props
    return (
        <div className="mt-5">
            <div className="text-sm text-gray-900">
                {label}
            </div>
            {console.log(value.length)}
            <PhoneInput2
                countryCodeEditable={false}
                value={value}
                onChange={onChange}
                containerStyle={{
                    width: '100%',
                    marginTop: '0.5rem',
                }}
                buttonStyle={{
                    border: '1px solid #a0aec0',
                    borderRadius: '0.125rem',
                    width: 60,
                    display: 'flex',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                inputStyle={{
                    border: '1px solid #a0aec0',
                    paddingLeft: 75,
                    width: '100%',
                    height: 40,
                    borderRadius: '0.125rem',
                }}
                country={'vn'}
                onBlur={onBlur}
                {...rest}
            />
            
            {error && <div className="text-red-800 text-xs">{error}</div>}
            
        </div>
    );
}

export default PhoneInput;
