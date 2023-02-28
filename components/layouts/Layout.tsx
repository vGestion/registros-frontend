import { FC } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { Navbar } from "../ui";

interface Props {
    title?: string
    children: any
}

export const Layout:FC<Props> = ({ title = 'Registros Datalat', children}) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
           <title>{title}</title>
        </Head>

        <Navbar />
        {/* Footer */}
        <Box sx={{ padding: '10px 20px'}}>
            {children}
        </Box>
    </Box>
  )
}
