import { useNavigate } from "react-router-dom";
import { HmacSHA256 } from "crypto-js";
import { v4 as uuid4 } from "uuid";
import { useEffect } from "react";

export const PaymentSuccess = () => {
  const navigate = useNavigate();
  const userPage = () => {
    const id = localStorage.getItem("plateNumber_user_i");
    navigate(`/user-dashboard/${id}`);
  };

  const handleGenerateHmac = (data, key) => {
    const hmac = HmacSHA256(data, key);
    return hmac;
  };

  useEffect(() => {
  }, []);

  useEffect(() => {
    const ApiKey = "Pk_TeStHV9FnLZE1vSidgkH36b4s473lpKYkI58gYgc6M";
    const SecretKey = "Sk_teSTN-HY[n1]wIO32A-AU0XP5kRZ[tzHpOxQ6bf9]]";
    const PayerRefNo = uuid4().slice(0, 13);
    // const Amount = state?.licenceFee
    const formData = new FormData();

    formData.append("ApiKey", "Pk_TeStHV9FnLZE1vSidgkH36b4s473lpKYkI58gYgc6M");
    formData.append("Hash", hashKey);
    formData.append("PayerRefNo", PayerRefNo);
    formData.append("PayerName", state.ownerName);
    formData.append("Amount", Amount);
    formData.append("Description", state.licenseType);
    formData.append("Mobile", "08123456785");
    formData.append("Email", "sani22@gmail.com");
    formData.append(
      "ResponseUrl",
      "http://localhost:5173/payment-successfull/"
    );

    const fetch = async () => { };
  }, []);

  return (
    <div className="absolute top-2/4 text-center    left-[40%] ">
      <div className=" top-2/4  left-[40%] ">
        <p className="text-2xl capitalize"> your Payment was successful</p>
      </div>
      <button
        onClick={userPage}
        className="capitalize bg-green-800 my-5 p-2 hover:text-white "
      >
        user page
      </button>
    </div>
  );
};
