import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import header from '../imgs/dance.gif';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;


function App(props) {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 50) {
      newMintAmount = 50;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (

    
    <>

      <div className='turtleHeader pt-10' ref={props.refProp}>
        <div class="grid lg:grid-cols-2 md:grid-cols-1  m-auto container ">
          
          <div className='text-center m-auto w-3/4 border-2 p-10 rounded-xl border-yellow-300'>
            <p className="text-4xl lg:text-6xl text-white font-semibold mt-5">
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </p>

            <div className="py-3">
              <a target={"_blank"} href={CONFIG.SCAN_LINK} className="linkText text-xl lg:text-2xl">
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </a>
            </div>

 
            {/* <button onClick={(e) => { window.open(CONFIG.MARKETPLACE_LINK, "_blank"); }} className="text-xl lg:text-2xl text-white font-semibold">
              {CONFIG.MARKETPLACE}
            </button> */}





            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <p className="text-xl lg:text-2xl text-white font-semibold">
                  The sale has ended.
                </p>

                <p className="text-xl lg:text-2xl text-white font-semibold">
                  You can still find {CONFIG.NFT_NAME} on
                </p>

                <a target={"_blank"} href={CONFIG.MARKETPLACE_LINK} className="text-xl lg:text-2xl text-white font-semibold">
                  {CONFIG.MARKETPLACE}
                </a>
              </>
            ) : (
              <>
                <p className="text-xl lg:text-2xl text-white font-semibold pt-5">
                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "} {CONFIG.NETWORK.SYMBOL}.
                </p>

                <p className="text-xl lg:text-2xl text-white font-semibold">
                  Excluding gas fees.
                </p>

                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <div className="text-lg lg:text-xl text-white font-semibold pt-10">

                    <p className="pb-3">
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                      className="turtleButton inline-block text-lg font-semibold px-6 py-4 text-black"
                    >
                      CONNECT
                    </button>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <p>
                          {blockchain.errorMsg}
                        </p>
                      </>
                    ) : null}
                  </div>
                ) : (
                  <>
                    <p className="text-lg lg:text-xl text-white font-semibold pt-10">
                      {feedback}
                    </p>

                    <div className="grid grid-cols-3 m-auto w-2/4 py-5">
                      <button
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                        className="turtleButton inline-block text-lg font-semibold px-6 py-4 text-black mx-auto"
                      >
                        -
                      </button>

                      <p className="text-xl lg:text-2xl text-white font-semibold mx-auto py-4">
                        {mintAmount}
                      </p>

                      <button
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                        className="turtleButton inline-block text-lg font-semibold px-6 py-4 text-black mx-auto"
                      >
                        +
                      </button>
                    </div>

                    <div>
                      <button disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                        className="turtleButton inline-block text-lg font-semibold px-6 py-4 text-black"
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <img src={header} className="w-2/12 justify-self-center md:w-3/4"/>
        </div>
      </div>   


 
    </>
  );
}

export default App;
