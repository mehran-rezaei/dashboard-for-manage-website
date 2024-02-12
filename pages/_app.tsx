import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardReducer from '../context/dashboardReducer'
import { ThemeProvider } from "@material-tailwind/react";
import '@/i18next';
// import { store } from '@/reduxtoolkit/store';
// import { Provider } from "react-redux";



export default function App({ Component, pageProps }: AppProps , props:any) {
  return(
    <>
    <div dir='rtl'>
      {/* <Provider store={store}> */}
    <ThemeProvider >
    <DashboardReducer>
    <Component {...pageProps} />
    </DashboardReducer>
    </ThemeProvider>
      {/* </Provider> */}


    </div>
    </>
  )
}
