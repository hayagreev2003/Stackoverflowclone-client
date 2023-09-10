import React from 'react';
import './Payment.css';
import { useDispatch, useSelector } from 'react-redux';
import { handlePayment } from '../../actions/Subscription';
import { useNavigate } from 'react-router-dom';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
const PricingCard = ({ name, price, features, animationDelay, isCurrentPlan, onClick, cName }) => {
  return (
    <>
    <div className={`pricing-card ${isCurrentPlan ? 'current-plan' : ''} ${cName}`} onClick={onClick}>
      {isCurrentPlan}
      <h3 className="pricing-card-header">{name}</h3>
      <div className="price">
        <sup>₹</sup>
        {price}
        <span>/MO</span>
      </div>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="order-btn" onClick={onClick}>
         Upgrade
      </button>
    </div>
    </>
  );
};

const Payment = () => {
  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSub = async (amount) => {
    if (User === null) {
      alert('Login or signup to buy a subscription');
      navigate('/login');
    } else {
      dispatch(handlePayment(User.result._id, amount));
    }
  };

  const pricingPlansData = [
    {
      name: 'Free Plan',
      price: '0',
      features: ['1 Question/Day', 'Character Limit - 250'],
      amount: 0,
      cName:'pricing-card-1',
    },
    {
      name: 'Silver Plan',
      price: '100',
      features: ['5 Questions/Day', 'Character Limit - Unlimited'],
      amount: 100,
      cName:'pricing-card-2',
    },
    {
      name: 'Gold Plan',
      price: '1000',
      features: ['Unlimited Questions/Day', 'Character Limit - Unlimited'],
      amount: 1000,
      cName:'pricing-card-3',
    },
  ];

  return (
    <>
    <LeftSidebar />
    <section>
    <div className="pricing-page">
      <h2>Choose your plan</h2>
      <div className="pricing-table">
        {pricingPlansData.map((plan, index) => (
          <PricingCard
            key={index}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            animationDelay={index * 200}
            isCurrentPlan={index === 0}
            onClick={() => handleSub(plan.amount)}
            cName = {plan.cName}
          />
        ))}
      </div>
    </div>
    </section>
    </>
  );
};

export default Payment;
