import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";



export const TransactionsProvider = ({ children }) => {
  return <TransactionContext.Provider>{children}</TransactionContext.Provider>;
};
