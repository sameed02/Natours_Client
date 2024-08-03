import { toast } from "react-toastify";
import styled from "styled-components";

const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  padding: 15px 40px;
  background-color: var(--color-medium-green);
  font-size: 2rem;
  color: var(--color-white);
  border-radius: 100px;
  transition: all 0.2s;
  border: none;
  margin: -20rem auto 0 auto;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    background-color: var(--color-dark-green);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); // 1st value: offset in X direction, 2nd: offset in Y direction, 3rd: Blur, 4th: color
  }
`;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

/* 
  usd to inr conversion
async function getConversionRate() {
  const response = await fetch("https://api.fxratesapi.com/latest");
  const data = await response.json();
  return data.rates.INR;
} */

function Checkout({ tourId, bookings }) {
  const isBooked = bookings.filter((booking) => booking.tour.id === tourId);

  async function displayRazorpay() {
    console.log("tour is ", isBooked);
    if (isBooked.length > 0) {
      return toast.error("tour already booked");
    }

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razropay failed to load!!");
      return;
    }

    const response = await fetch(
      `http://localhost:3000/api/v1/bookings/checkout/5c88fa8cf4afda39709c2951`,
      { credentials: "include" }
    );

    const data = await response.json();
    const order = { ...data?.data?.order, tourId };
    console.log(data?.data?.order);

    const responseKey = await fetch(`http://localhost:3000/api/v1/getKey`, {
      credentials: "include",
    });

    const key = await responseKey.json();

    const options = {
      key: key?.key,
      amount: data?.data?.order?.amount,
      currency: data?.data?.order?.currency,
      name: "Natours",
      description: "Test Transaction",
      image: "/logoGreen2x.png",
      order_id: data?.data?.order?.id,

      callback_url: `http://localhost:3000/api/v1/bookings/paymentVerification?order=${encodeURIComponent(
        JSON.stringify(order)
      )}`,

      prefill: {
        name: data?.data?.order?.user?.name,
        email: data?.data?.order?.user?.email,
      },

      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#28b485",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return <StyledBtn onClick={displayRazorpay}>Book Now</StyledBtn>;
}

export default Checkout;
