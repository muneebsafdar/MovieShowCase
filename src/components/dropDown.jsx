import React from 'react'

function DropDown({options,CategorySetter}) {
    return (
        <select
        className='bg-gray-700 text-white rounded outline-1 py-2 px-3 inline-block'
        onChange={(e)=>CategorySetter(e.target.value)}
        >
            {
                options.map((op,index)=>(
                    <option className='' key={index} value={op}>{op.toUpperCase()}</option>
                ))
            }
        </select>
    )
}

export default DropDown
