import { createContext, useContext, FC, ReactElement } from 'react';

const APICtx = createContext<Record<string, unknown>>(undefined);

export const APIContext: FC<{ children: ReactElement }> = ({ children }) => (
	<APICtx.Provider value={undefined}>{children}</APICtx.Provider>
);

export const useAPI = () => useContext(APICtx);
