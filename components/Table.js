import React from 'react'

export function TableContainer({children}) {
    return (
        <div className='bg-white sm:rounded-xl shadow-sm overflow-y-auto relative'>
            {children}
        </div>
    )
}

export function Table({children, classes}) {
    return (
        <TableContainer>
            <table className={`border-collapse table-auto w-full whitespace-nowrap bg-white relative ${classes}`}>
                {children}
            </table>
        </TableContainer>
    )
}



export function THeadRow({children, classes}) {
    return (
        <tr className={`border-b border-gray-200 ${classes}`}>
            {children}
        </tr>
    )
}

export function TBodyRow({children, classes}) {
    return (
        <tr className={`border-dashed border-t border-gray-200 ${classes}`}>
            {children}
        </tr>
    )
}
export function THead({children, colSpan}) {
    return (
        <th className='text-left text-gray-800 font-bold tracking-wider text-xs uppercase px-6 py-2' colSpan={colSpan}>
            {children}
        </th>
    )
}


export function TData({children, classes, colSpan}) {
    return (
        <td className={`text-gray-700 px-6 py-3 text-sm ${classes}`} colSpan={colSpan}>
            {children}
        </td>
    )
}
