import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
import "./Welcome.css";

import { TransactionContext } from "../context/TransctionContext";
// import { shortenAddress } from "../utils/shortenAddress";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="white-glassmorphism welcome_input"
  />
);

const Welcome = () => {
  const {
    connectWallet,
    handleChange,
    setformData,
    formData,
    currentAccount,
    sendTransaction,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="welcome">
      <div className="welcome_container">
        <div className="welcome_left">
          <h1 className="text-gradient">
            Send Crypto <br /> across the world
          </h1>
          <p>
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="connect-btn"
            >
              <AiFillPlayCircle
                style={{ marginRight: "0.5rem", color: "white" }}
              />
              <p style={{ fontWeight: "600", color: "white" }}>
                Connect Wallet
              </p>
            </button>
          )}

          <div className="welcome_table">
            <div
              className="common_style"
              style={{ borderTopLeftRadius: "1rem" }}
            >
              Reliability
            </div>
            <div className="common_style">Security</div>
            <div
              className="common_style"
              style={{ borderTopRightRadius: "1rem" }}
            >
              Ethereum
            </div>
            <div
              className="common_style"
              style={{ borderBottomLeftRadius: "1rem" }}
            >
              Web 3.0
            </div>
            <div className="common_style">Low Fees</div>
            <div
              className="common_style"
              style={{ borderBottomRightRadius: "1rem" }}
            >
              Blockchain
            </div>
          </div>
        </div>

        <div className="welcome_right">
          <div className="eth-card white-glassmorphism ecard">
            <div className="card_container">
              <div className="card_icons_container">
                <div className="eth-icon">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="address">.....</p>
                <p
                  style={{
                    color: "white",
                    marginTop: "0.25rem",
                    fontWeight: "600",
                    fontSize: "1.125rem",
                  }}
                >
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="blue-glassmorphism welcome_form">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div
              style={{
                height: "1px",
                width: "100%",
                margin: "0.5rem 0",
                backgroundColor: "#9ca3af",
              }}
            />
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="send-money-btn"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
