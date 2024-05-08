import React, { useState, useContext } from "react";

import {
  Header,
  Footer,
  Hero,
  ICOTokens,
  LiquidityHistory,
  ICOSale,
  Access,
  Analytic,
  App,
  AddLiquidity,
  AddPool,
  SuccessPool,
  NoPool,
  Loader,
  Input,
  PoolInput,
  HeaderICON,
  FooterICON,
} from "../components/index";

import { CONTEXT } from "../context/index";

const index = () => {
  const {
    connect,
    GET_POOL_ADDRESS,
    LOAD_TOKEN,
    notifyError,
    notifySuccess,
    CREATE_LIQUIDITY,
    GET_ALL_LIQUIDITY,
    transferNativeToken,
    buyToken,
    tokenSale,
    nativeToken,
    address,
    loader,
    DAPP_Name,
  } = useContext(CONTEXT);

  const [openAddPool, setOpenAddPool] = useState(false);
  const [openAllLiquidity, setopenAllLiquidity] = useState(false);

  return (
    <div className="crumina-grind">
      <Header
        setOpenAddPool={setOpenAddPool}
        setopenAllLiquidity={setopenAllLiquidity}
        connect={connect}
        address={address}
      />
      <div className="main-content-wrapper">
        <Hero transferNativeToken={transferNativeToken} />
        <ICOTokens />
        <LiquidityHistory GET_ALL_LIQUIDITY={GET_ALL_LIQUIDITY} />
        <App />
        <Analytic />
        <ICOSale
          tokenSale={tokenSale}
          nativeToken={nativeToken}
          buyToken={buyToken}
        />
      </div>

      {openAddPool && (
        <div className="new_center">
          <AddPool
            setOpenAddPool={setOpenAddPool}
            LOAD_TOKEN={LOAD_TOKEN}
            notifyError={notifyError}
            notifySuccess={notifySuccess}
            GET_POOL_ADDRESS={GET_POOL_ADDRESS}
          />
        </div>
      )}

      {openAllLiquidity && (
        <div className="new_center">
          <AddLiquidity
            CREATE_LIQUIDITY={CREATE_LIQUIDITY}
            setopenAllLiquidity={setopenAllLiquidity}
          />
        </div>
      )}

      {loader && (
        <div className="new_center">
          <Loader />
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default index;
