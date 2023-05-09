import React from 'react'
import Button from '@mui/material/Button'

export default function Buttons({ sx, children }) {
    return (
        <Button variant='contained' sx={{
            background: "linear-gradient(265.77deg, #005280 -6.06%, #0D816C 108.54%);",
            ...sx
        }}>{children}</Button>
    )
}
