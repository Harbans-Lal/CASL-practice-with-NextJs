import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { AbilityContext } from "@/casl/abilityFor";
import { ability } from "@/casl/abilityFor";
export default function App({ Component, pageProps }: AppProps) {

  return( 
  
      <FluentProvider theme={webLightTheme} >
          <AbilityContext.Provider value={ability}> 
             <Component {...pageProps} />
          </AbilityContext.Provider>
      </FluentProvider>
    
);
}
